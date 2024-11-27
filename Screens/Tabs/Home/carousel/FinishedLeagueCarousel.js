import { useState, useRef } from "react";
import { View, Text, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import styles from "./finishedLeagueCarousel.style";
// import Carousel from "react-native-reanimated-carousel";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar, faTrophy } from "@fortawesome/free-solid-svg-icons";

const FinishedLeagueCarousel = ({ data }) => {
  const ref = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderItem = ({ item, index }) => {
    if (index == 0) {
      return (
        <LinearGradient
          colors={["#c42414", "#7c0b00"]}
          style={styles.container}
        >
          <View style={styles.leagueOwnerContainer}>
            <Text style={styles.leagueOwnerText}>{item.league_owner_name}</Text>
          </View>
          <View style={styles.championContainer}>
            <Text style={styles.championText}>CHAMPION</Text>
          </View>
          <View style={styles.teamImageContainer}>
            <View style={styles.star1Container}>
              <FontAwesomeIcon icon={faStar} size={hp(1.5)} color="#ffc700" />
            </View>
            <View style={styles.star2Container}>
              <FontAwesomeIcon icon={faStar} size={hp(2.2)} color="#ffc700" />
            </View>
            <View style={styles.star3Container}>
              <FontAwesomeIcon icon={faStar} size={hp(2.5)} color="#ffc700" />
            </View>
            <View style={styles.star4Container}>
              <FontAwesomeIcon icon={faStar} size={hp(2.2)} color="#ffc700" />
            </View>
            <View style={styles.star5Container}>
              <FontAwesomeIcon icon={faStar} size={hp(1.5)} color="#ffc700" />
            </View>
            {item.winner_image ? (
              <Image
                source={{ uri: item.winner_image }}
                resizeMode="contain"
                style={styles.teamImage}
              />
            ) : (
              <Image
                source={require("../../../../assets/teamPlaceholders/team-placeholder-04.png")}
                resizeMode="contain"
                style={styles.teamImage}
              />
            )}
          </View>
          <View style={styles.teamNameContainer}>
            <FontAwesomeIcon icon={faTrophy} color="#ffc700" size={hp(3.2)} />
            <Text style={styles.teamNameText}>{item.team_name_winner}</Text>
          </View>
        </LinearGradient>
      );
    }

    if (index == 1) {
      return (
        <LinearGradient
          colors={["#c42414", "#7c0b00"]}
          style={styles.container}
        >
          <View style={styles.teamScoresContainer}>
            <Text style={styles.teamScoresText}>TEAM SCORES</Text>
          </View>
          <View style={styles.teamAContainer}>
            <View style={styles.secondPageteamImageContainer}>
              {item.team_a.is_winner && (
                <View style={styles.trophyContainer}>
                  <FontAwesomeIcon
                    icon={faTrophy}
                    color="#ffc700"
                    size={hp(2)}
                  />
                </View>
              )}
              {item.team_a.image ? (
                <Image
                  source={{ uri: item.team_a.image }}
                  resizeMode="contain"
                  style={styles.secondPageTeamImage}
                />
              ) : (
                <Image
                  source={require("../../../../assets/teamPlaceholders/team-placeholder-04.png")}
                  resizeMode="contain"
                  style={styles.secondPageTeamImage}
                />
              )}
            </View>
            <View style={styles.teamNameAndScoreContainer}>
              <View style={styles.secondPageTeamNameContainer}>
                <Text style={styles.secondPageTeamAcronymText}>
                  {item.team_a.team_acronym}
                </Text>
                <Text style={styles.secondPageTeamNameText}>
                  {item.team_a.team_name}
                </Text>
              </View>
              <View style={styles.scoreContainer}>
                <Text style={styles.ptsText}>PTS</Text>
                <Text style={styles.scoreText}>{item.team_a.team_score}</Text>
              </View>
            </View>
          </View>
          <View style={styles.teamBContainer}>
            <View style={styles.secondPageteamImageContainer}>
              {item.team_b.is_winner && (
                <View style={styles.trophyContainer}>
                  <FontAwesomeIcon
                    icon={faTrophy}
                    color="#ffc700"
                    size={hp(2)}
                  />
                </View>
              )}
              {item.team_b.image ? (
                <Image
                  source={{ uri: item.team_b.image }}
                  resizeMode="contain"
                  style={styles.secondPageTeamImage}
                />
              ) : (
                <Image
                  source={require("../../../../assets/teamPlaceholders/team-placeholder-04.png")}
                  resizeMode="contain"
                  style={styles.secondPageTeamImage}
                />
              )}
            </View>
            <View style={styles.teamNameAndScoreContainer}>
              <View style={styles.secondPageTeamNameContainer}>
                <Text style={styles.secondPageTeamAcronymText}>
                  {item.team_b.team_acronym}
                </Text>
                <Text style={styles.secondPageTeamNameText}>
                  {item.team_b.team_name}
                </Text>
              </View>
              <View style={styles.scoreContainer}>
                <Text style={styles.ptsText}>PTS</Text>
                <Text style={styles.scoreText}>{item.team_b.team_score}</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      );
    }

    if (index == 2) {
      return (
        <LinearGradient
          colors={["#c42414", "#7c0b00"]}
          style={styles.container}
        >
          <View style={styles.playerOfTheGameContainer}>
            <Text style={styles.playerOfTheText}>PLAYER OF THE</Text>
            <Text style={styles.gameText}>GAME</Text>
          </View>
          <View style={styles.bestPlayerContainer}>
            <View style={styles.thirdPageteamImageContainer}>
              {item.profile_image ? (
                <Image
                  source={{ uri: item.profile_image }}
                  resizeMode="contain"
                  style={styles.thirdPageTeamImage}
                />
              ) : (
                <Image
                  source={require("../../../../assets/teamPlaceholders/team-placeholder-04.png")}
                  resizeMode="contain"
                  style={styles.thirdPageTeamImage}
                />
              )}
            </View>
            <View style={styles.playerAndScoreContainer}>
              <View style={styles.thirdPageTeamNameContainer}>
                <Text style={styles.thirdPageTeamNameText}>
                  {item.team_name_winner}
                </Text>
              </View>
              <View style={styles.thirdPagePlayerContainer}>
                <Text style={styles.thirdPagePlayerText}>
                  {item.player_name}
                </Text>
              </View>
              <View style={styles.thirdPageScoreContainer}>
                <Text style={styles.thirdPagePtsText}>PTS</Text>
                <Text style={styles.thirdPageScoreText}>107</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      );
    }
  };

  const renderPaginationDots = () => {
    return (
      <View style={styles.paginationContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              { opacity: index === currentIndex ? 1 : 0.3 },
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={{ height: 366.8 }}>
      <Carousel
        loop
        ref={ref}
        width={wp(90)}
        autoPlay={false}
        data={data}
        scrollAnimationDuration={500}
        renderItem={renderItem}
        onSnapToItem={(index) => setCurrentIndex(index)}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
      />
      {renderPaginationDots()}
    </View>
  );
};

export default FinishedLeagueCarousel;
