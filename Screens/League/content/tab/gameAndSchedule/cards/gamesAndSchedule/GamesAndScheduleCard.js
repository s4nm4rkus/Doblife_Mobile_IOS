import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import styles from "./gamesAndScheduleCard.style";
import { useEffect, useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { fetchLeagueRounds } from "../../../../../../../api/leagueRoundApi";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCalendarDays,
  faChevronDown,
  faCirclePlus,
  faClipboardList,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { fetchLeagueParticipants } from "../../../../../../../api/leagueParticipantApi";
import { bracketValue } from "../../../../../../../features/selectBracket/selectBracketSlice";
import { leagueSeasonCategoryValue } from "../../../../../../../features/selectDivision/selectDivisionSlice";
import { useDispatch, useSelector } from "react-redux";
import BottomSheetSelectMatchups from "../../../../../bottomSheetModal/bottomSheetSelectMatchups/BottomSheetSelectMatchups";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { LinearGradient } from "expo-linear-gradient";
import BottomSheetSelectDate from "../../../../../bottomSheetModal/bottomSheetSelectDate/BottomSheetSelectDate";
import {
  activeGameNumberValue,
  activeRoundValue,
  addLeagueMatchup,
  leagueMatchupsValue,
  openBottomSheet,
  openBottomSheetSelectTeam,
  setActiveGameNumber,
  setActiveRound,
  setLeagueMatchups,
} from "../../../../../../../features/selectMatchups/selectMatchupsSlice";
import moment from "moment/moment";
import {
  createLeagueMatchup,
  fetchLeagueMatchups,
  generateMatch,
} from "../../../../../../../api/leagueMatchupApi";
import { fetchMatchupIDAsync } from "../../../../../../../features/scoreBoard/scoreBoardSlice";
import Toast from "react-native-toast-message";
import BottomSheetSelectTeam from "../../../../../bottomSheetModal/bottomSheetSelectTeam/BottomSheetSelectTeam";
import SelectTournamentFormatModal from "../../../../../modal/selectTournamentFormat/SelectTournamentFormatModal";
import { fetchLeagueSeasonFormat } from "../../../../../../../api/leagueSeasonCategoryApi";

const GamesAndScheduleCard = ({ navigation }) => {
  const dispatch = useDispatch();
  const [rounds, setRounds] = useState([]);
  const activeGameNumber = useSelector(activeGameNumberValue);
  const leagueMatchups = useSelector(leagueMatchupsValue);
  const activeRound = useSelector(activeRoundValue);
  const [elimRoundGames, setElimRoundGames] = useState([]);
  const [postElimGames, setPostElimGames] = useState([]);
  const [leagueParticipantIDs, setLeagueParticipantIDs] = useState([]);
  const [activeTeam, setActiveTeam] = useState(null);
  const [
    isSelectTournamentFormatModalVisible,
    setIsSelectTournamentFormatModalVisible,
  ] = useState(false);
  const [activeFormat, setActiveFormat] = useState(null);
  const bracket = useSelector(bracketValue);
  const leagueSeasonCategory = useSelector(leagueSeasonCategoryValue);

  const { mutateAsync: generateMatchMutation } = useMutation({
    mutationFn: generateMatch,
    onSuccess: (data) => {
      handleFetchLeagueSeasonFormat();
    },
  });

  const { mutateAsync: fetchLeagueRoundsMutation } = useMutation({
    mutationFn: fetchLeagueRounds,
    onSuccess: (data) => {
      setRounds(data);
      handleFetchLeagueParticipants();
    },
  });

  const { mutateAsync: fetchLeagueSeasonFormatMutation } = useMutation({
    mutationFn: fetchLeagueSeasonFormat,
    onSuccess: (data) => {
      setActiveFormat(data.format);
    },
  });

  const { mutateAsync: fetchLeagueParticipantsMutation } = useMutation({
    mutationFn: fetchLeagueParticipants,
    onSuccess: (data) => {
      setLeagueParticipantIDs(data.map((data) => data.id));
      const dataLength = data.length;
      const matchups = [];

      if (activeFormat == "single round robin") {
        for (let i = 0; i < dataLength; i++) {
          for (let j = i + 1; j < dataLength; j++) {
            matchups.push(`${data[i]}v${data[j]}`);
          }
        }
      }

      if (activeFormat == "single elimination") {
        let matchupsCount = 0;
        let iterations = 6;
        let oldValue = 0;
        let maxTeams = 0;
        // for (let i = 0; i < dataLength; i += 2) {
        //   matchups.push(`${data[i]}v${data[i+1]}`);
        // }

        for (let i = 2; i <= iterations; i++) {
          let value = 2 ** i;
          if (oldValue != 0 && dataLength >= oldValue && dataLength < value) {
            maxTeams = oldValue;
            break;
          }
          oldValue = value;
        }

        for (let i = 0; i < dataLength; i += 2) {
          matchupsCount += 2;
          matchups.push(`${data[i]}v${data[i + 1]}`);

          if (matchupsCount == maxTeams) break;
        }
        for (let i = maxTeams; i < dataLength; i++) {
          matchups.push(`${data[i]}v${null}`);
        }
      }
      const gamesArr = Array.from(matchups.keys());

      setElimRoundGames(gamesArr);
    },
  });

  const { mutateAsync: fetchLeagueMatchupsMutation } = useMutation({
    mutationFn: fetchLeagueMatchups,
    onSuccess: (data) => {
      let matchupObject;
      if (activeFormat == "single round robin") {
        matchupObject = data.reduce((acc, matchup) => {
          const {
            game_number,
            team_a,
            league_participant_b,
            match_time,
            status,
          } = matchup;

          acc[game_number] = {
            matchup: {
              team1:
                status != "generated"
                  ? {
                      name: team_a.team_profile.name,
                      league_participant_id: team_a.id,
                    }
                  : null,
              team2:
                status != "generated"
                  ? {
                      name: league_participant_b.team_profile.name,
                      league_participant_id: league_participant_b.id,
                    }
                  : null,
            },
            date_and_time: match_time ? match_time : null,
            status: status,
          };

          return acc;
        }, {});
      }

      if (activeFormat == "single elimination") {
        let winnerCount = 0;
        matchupObject = data.reduce((acc, matchup) => {
          const {
            game_number,
            team_a,
            league_participant_b,
            match_time,
            status,
          } = matchup;

          if (league_participant_b == null) {
            winnerCount += 1;
          }

          acc[game_number] = {
            matchup: {
              team1:
                status != "generated"
                  ? {
                      name: team_a.team_profile.name,
                      league_participant_id: team_a.id,
                    }
                  : null,
              team2:
                league_participant_b != null
                  ? {
                      name: league_participant_b.team_profile.name,
                      league_participant_id: league_participant_b.id,
                    }
                  : {
                      name: `winner ${winnerCount}`,
                      league_participant_id: 0,
                    },
            },
            date_and_time: match_time ? match_time : null,
            status: status,
          };

          return acc;
        }, {});
      }

      dispatch(setLeagueMatchups(matchupObject));

      if (activeRound == 2) {
        const numberOfKeys = Object.keys(matchupObject).length;

        const arrayOfIndices = Array.from(
          { length: numberOfKeys },
          (_, index) => index
        );
        setPostElimGames(arrayOfIndices);
      }
    },
  });

  const handleGenerateMatch = async (format) => {
    const params = {
      league_season_category_id: leagueSeasonCategory.value,
      format: format,
      bracket_id: bracket ? bracket.id : null,
    };

    try {
      await generateMatchMutation({ params });
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  const handleFetchLeagueRounds = async () => {
    const params = {};
    try {
      await fetchLeagueRoundsMutation(params);
    } catch (e) {
      console.log(e);
    }
  };

  const handleFetchLeagueSeasonFormat = async () => {
    const params = {
      league_season_category_id: leagueSeasonCategory.value,
    };
    try {
      await fetchLeagueSeasonFormatMutation({ params });
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  const handleFetchLeagueParticipants = async () => {
    if (!leagueSeasonCategory && !bracket) return;

    const params = {
      league_season_category_id: leagueSeasonCategory.value,
      bracket_id: bracket ? bracket.id : null,
    };
    try {
      await fetchLeagueParticipantsMutation(params);
    } catch (e) {
      console.log(e);
    }
  };

  const handleFetchLeagueMatchups = async () => {
    if (!activeRound || elimRoundGames.length == 0 || !leagueSeasonCategory)
      return;

    const params = {
      league_season_category_id: leagueSeasonCategory.value,
      league_rounds: activeRound,
    };

    try {
      await fetchLeagueMatchupsMutation({ params });
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  useEffect(() => {
    if (activeFormat) {
      handleFetchLeagueRounds();
    }
  }, [leagueSeasonCategory, bracket, activeFormat]);

  useEffect(() => {
    handleFetchLeagueSeasonFormat();
  }, []);

  useEffect(() => {
    if (activeFormat) {
      handleFetchLeagueMatchups();
    }
  }, [activeRound, elimRoundGames, leagueSeasonCategory, activeFormat]);

  useEffect(() => {
    if (activeGameNumber) {
      handleCreateLeagueMatchup();
    }
  }, [leagueMatchups]);

  const handleCreateLeagueMatchup = async () => {
    if (!leagueMatchups.hasOwnProperty(activeGameNumber)) return;

    const leagueMatchup = leagueMatchups[activeGameNumber];
    const team1 = leagueMatchup.matchup.team1;
    const team2 = leagueMatchup.matchup.team2;
    const dateAndTime = leagueMatchup.date_and_time;

    if (dateAndTime == null && (team1 == null || team2 == null)) return;

    const date = moment(dateAndTime);

    const matchDate = date.isValid() ? date.format("YYYY-MM-DD") : null;
    const matchTime = date.isValid()
      ? date.format("YYYY-MM-DD HH:mm:ss")
      : null;

    const params = {
      team_a: team1 ? team1.league_participant_id : null,
      team_b: team2 ? team2.league_participant_id : null,
      match_date: matchDate,
      match_time: matchTime,
      status: team1 && dateAndTime ? "scheduled" : "selected",
      league_rounds: activeRound,
      league_season_category_id: leagueSeasonCategory.value,
      game_number: activeGameNumber,
    };

    try {
      await createLeagueMatchup({ params });
      dispatch(setActiveGameNumber(null));
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  const renderRounds = ({ item, index }) => (
    <View style={styles.roundButtonContainer}>
      <TouchableOpacity onPress={() => dispatch(setActiveRound(item.id))}>
        <Text
          style={[
            styles.roundButtonText,
            styles.activeRoundButtonText(item.id, activeRound),
          ]}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const bottomSheetModalRef = useRef(BottomSheetModal);
  const bottomSheetSelectDateRef = useRef(BottomSheetModal);
  const bottomSheetSelectTeamRef = useRef(BottomSheetModal);

  const handleOpenBottomSheetSelectMatchups = (gameNumber) => {
    dispatch(setActiveGameNumber(gameNumber));
    dispatch(openBottomSheet());
    bottomSheetModalRef.current?.present();
  };

  const handleOpenBottomSheetSelectTeam = (gameNumber, activeTeam) => {
    setActiveTeam(activeTeam);
    dispatch(setActiveGameNumber(gameNumber));
    dispatch(openBottomSheetSelectTeam());
    bottomSheetSelectTeamRef.current?.present();
  };

  const handleOpenBottomSheetSelectDate = (gameNumber) => {
    if (
      leagueMatchups[gameNumber].matchup.team1 == null ||
      leagueMatchups[gameNumber].matchup.team2 == null
    ) {
      Toast.show({
        type: "customErrorToast",
        text1: "Error",
        text2: "Please select a matchup before selecting a date.",
      });
      return;
    }
    dispatch(setActiveGameNumber(gameNumber));
    bottomSheetSelectDateRef.current?.present();
  };

  const handleOpenScoreSheet = async (gameNumber) => {
    if (
      (leagueMatchups.hasOwnProperty(gameNumber) &&
        leagueMatchups[gameNumber].matchup.team_a != null) ||
      leagueMatchups[gameNumber].date_and_time != null
    ) {
      const datas = {
        params: {
          league_season_category_id: leagueSeasonCategory.value,
          league_rounds: activeRound,
          game_number: gameNumber,
          team_a:
            leagueMatchups[gameNumber].matchup.team1.league_participant_id,
          team_b:
            leagueMatchups[gameNumber].matchup.team2.league_participant_id,
        },
      };

      try {
        const originalPromiseResult = await dispatch(
          fetchMatchupIDAsync(datas)
        ).unwrap();
        navigation.navigate("ScoreSheet");
      } catch (rejectedValueOrSerializedError) {
        // handle error here
      }
    }
  };

  const handleAddGame = () => {
    const newArray = [...postElimGames, postElimGames.length];
    dispatch(
      addLeagueMatchup({
        [postElimGames.length + 1]: {
          date_and_time: null,
          matchup: {
            team1: null,
            team2: null,
          },
        },
      })
    );
    setPostElimGames(newArray);
  };

  const formatedate_and_time = (dateTimeString) => {
    return moment(dateTimeString).format("HH/MM | DD/MM/YYYY");
  };

  const AddGameButton = () => {
    return (
      <TouchableOpacity
        style={styles.addGameContainer}
        onPress={() => handleAddGame()}
      >
        <FontAwesomeIcon icon={faCirclePlus} size={hp(3.8)} />
        <Text style={styles.addGameText}>Add Game</Text>
      </TouchableOpacity>
    );
  };

  const renderElimRoundGames = ({ item, index }) => (
    <View style={styles.gameContainer}>
      <View style={styles.gameHeader}>
        <View>
          <Text style={styles.gameText(leagueMatchups[item + 1].status)}>
            Game {item + 1}
          </Text>
        </View>
        <View style={styles.scoreSheetContainer}>
          <Text style={styles.scoreSheetText}>Score Sheet</Text>
          <TouchableOpacity onPress={() => handleOpenScoreSheet(item + 1)}>
            <LinearGradient
              colors={["#c42414", "#7c0b00"]}
              locations={[0, 0.67]}
              style={styles.scoreSheetButton}
            >
              <FontAwesomeIcon
                icon={faClipboardList}
                size={hp(2.2)}
                color="#fff"
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => handleOpenBottomSheetSelectMatchups(item + 1)}
        style={styles.selectMatchupsContainer}
        disabled={leagueMatchups[item + 1].status == "finished"}
      >
        <View style={styles.selectMatchupsInputContainer}>
          {leagueMatchups.hasOwnProperty(item + 1) &&
          leagueMatchups[item + 1].matchup.team1 != null ? (
            <View style={styles.matchupButtonContainer}>
              <View style={styles.teamNameContainer}>
                <Text
                  style={styles.teamNameText(leagueMatchups[item + 1].status)}
                  numberOfLines={1}
                >
                  {leagueMatchups[item + 1]?.matchup?.team1?.name}
                </Text>
              </View>
              <View style={styles.vsContainer}>
                <Text style={styles.vsText(leagueMatchups[item + 1].status)}>
                  vs
                </Text>
              </View>
              <View style={styles.teamNameContainer}>
                <Text
                  style={styles.teamNameText(leagueMatchups[item + 1].status)}
                  numberOfLines={1}
                >
                  {leagueMatchups[item + 1]?.matchup?.team2?.name}
                </Text>
              </View>
            </View>
          ) : (
            <Text style={styles.selectMatchupsPlaceholderText}>
              Select Match ups
            </Text>
          )}
        </View>
        <View style={styles.selectMatchupsIconWrapper}>
          <FontAwesomeIcon icon={faChevronDown} size={hp(1.4)} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleOpenBottomSheetSelectDate(item + 1)}
        style={styles.selectMatchupsContainer}
        disabled={leagueMatchups[item + 1].status == "finished"}
      >
        {leagueMatchups.hasOwnProperty(item + 1) &&
        leagueMatchups[item + 1].date_and_time != null ? (
          <View style={styles.selectMatchupsInputContainer}>
            <Text
              style={styles.selectMatchupsText(leagueMatchups[item + 1].status)}
            >
              {formatedate_and_time(leagueMatchups[item + 1].date_and_time)}
            </Text>
          </View>
        ) : (
          <View style={styles.selectMatchupsInputContainer}>
            <Text style={styles.selectDatePlaceholderText}>
              HH/MM | DD/MM/YYYY
            </Text>
          </View>
        )}
        <View style={styles.selectMatchupsIconWrapper}>
          <FontAwesomeIcon
            icon={faCalendarDays}
            size={hp(2)}
            style={styles.calendarIcon(leagueMatchups[item + 1].status)}
          />
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderPostElimGames = ({ item, index }) => (
    <View style={styles.gameContainer}>
      <View style={styles.gameHeader}>
        <View>
          <Text style={styles.gameText}>Game {item + 1}</Text>
        </View>
        <View style={styles.scoreSheetContainer}>
          <Text style={styles.scoreSheetText}>Score Sheet</Text>
          <TouchableOpacity onPress={() => handleOpenScoreSheet(item + 1)}>
            <LinearGradient
              colors={["#c42414", "#7c0b00"]}
              locations={[0, 0.67]}
              style={styles.scoreSheetButton}
            >
              <FontAwesomeIcon
                icon={faClipboardList}
                size={hp(2.2)}
                color="#fff"
              />
            </LinearGradient>
          </TouchableOpacity>
          {/* <TouchableOpacity 
            onPress={() => console.log('delete')}
            style={styles.trashCanButton}
          >
            <FontAwesomeIcon icon={faTrashCan} size={(hp(2.2))}/>
          </TouchableOpacity> */}
        </View>
      </View>
      <TouchableOpacity
        onPress={() => handleOpenBottomSheetSelectTeam(item + 1, "team1")}
        style={styles.selectMatchupsContainer}
      >
        <View style={styles.selectMatchupsInputContainer}>
          {leagueMatchups.hasOwnProperty(item + 1) &&
          leagueMatchups[item + 1].matchup.team1 != null ? (
            <View style={styles.matchupButtonContainer}>
              <View>
                <Text style={styles.teamNameText} numberOfLines={1}>
                  {leagueMatchups[item + 1]?.matchup?.team1?.name}
                </Text>
              </View>
            </View>
          ) : (
            <Text style={styles.selectMatchupsPlaceholderText}>
              Select Team 1
            </Text>
          )}
        </View>
        <View style={styles.selectMatchupsIconWrapper}>
          <FontAwesomeIcon icon={faChevronDown} size={hp(1.4)} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleOpenBottomSheetSelectTeam(item + 1, "team2")}
        style={styles.selectMatchupsContainer}
      >
        <View style={styles.selectMatchupsInputContainer}>
          {leagueMatchups.hasOwnProperty(item + 1) &&
          leagueMatchups[item + 1].matchup.team2 != null ? (
            <View style={styles.matchupButtonContainer}>
              <View>
                <Text style={styles.teamNameText} numberOfLines={1}>
                  {leagueMatchups[item + 1]?.matchup?.team2?.name}
                </Text>
              </View>
            </View>
          ) : (
            <Text style={styles.selectMatchupsPlaceholderText}>
              Select Team 2
            </Text>
          )}
        </View>
        <View style={styles.selectMatchupsIconWrapper}>
          <FontAwesomeIcon icon={faChevronDown} size={hp(1.4)} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleOpenBottomSheetSelectDate(item + 1)}
        style={styles.selectMatchupsContainer}
      >
        {leagueMatchups.hasOwnProperty(item + 1) &&
        leagueMatchups[item + 1].date_and_time != null ? (
          <View style={styles.selectMatchupsInputContainer}>
            <Text style={styles.selectMatchupsText}>
              {formatedate_and_time(leagueMatchups[item + 1].date_and_time)}
            </Text>
          </View>
        ) : (
          <View style={styles.selectMatchupsInputContainer}>
            <Text style={styles.selectDatePlaceholderText}>
              HH/MM | DD/MM/YYYY
            </Text>
          </View>
        )}
        <View style={styles.selectMatchupsIconWrapper}>
          <FontAwesomeIcon icon={faCalendarDays} size={hp(2)} />
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>GAMES & SCHEDULE</Text>
      </View>
      {Object.keys(leagueMatchups).length === 0 && activeRound == 1 ? (
        <View style={styles.generateMatchContainer}>
          <TouchableOpacity
            style={styles.generateMatchButton}
            onPress={() => setIsSelectTournamentFormatModalVisible(true)}
          >
            <Text style={styles.buttonText}>Generate Match</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <View style={styles.roundsContainer}>
            <FlatList
              horizontal
              data={rounds}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderRounds}
              showsHorizontalScrollIndicator={false}
            ></FlatList>
          </View>
          <View style={styles.gamesContainer}>
            {activeRound == 1 ? (
              <FlatList
                data={elimRoundGames}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderElimRoundGames}
                showsVerticalScrollIndicator={false}
              ></FlatList>
            ) : (
              <FlatList
                data={postElimGames}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderPostElimGames}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={AddGameButton}
              ></FlatList>
            )}
          </View>
        </>
      )}

      <BottomSheetSelectMatchups bottomSheetModalRef={bottomSheetModalRef} />
      <BottomSheetSelectDate bottomSheetModalRef={bottomSheetSelectDateRef} />
      <BottomSheetSelectTeam
        bottomSheetModalRef={bottomSheetSelectTeamRef}
        activeTeam={activeTeam}
      />
      <SelectTournamentFormatModal
        isVisible={isSelectTournamentFormatModalVisible}
        isCanceled={() => setIsSelectTournamentFormatModalVisible(false)}
        handleGenerateMatch={(format) => handleGenerateMatch(format)}
      />
    </View>
  );
};

export default GamesAndScheduleCard;
