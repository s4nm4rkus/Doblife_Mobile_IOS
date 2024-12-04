import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import styles from "./selectDivisionModal.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  divisionIDValue,
  divisionNameValue,
  divisionsValue,
  leagueIDValue,
  setDivisionID,
  setDivisions,
  setIsSelectDivisionModalVisible,
} from "../../../../features/selectLeague/selectLeagueSlice";
import { fetchLeagueSeasonCategoriesByLeague } from "../../../../api/leagueSeasonCategoryApi";
import { useMutation } from "@tanstack/react-query";
import { Dropdown } from "react-native-element-dropdown";
import { useEffect } from "react";

const SelectDivisionModal = ({ isVisible, isCanceled, join }) => {
  const dispatch = useDispatch();

  const leagueID = useSelector(leagueIDValue);
  const divisionName = useSelector(divisionNameValue);
  const divisionID = useSelector(divisionIDValue);
  const divisions = useSelector(divisionsValue);

  const { mutateAsync: fetchLeagueSeasonCategoriesMutation } = useMutation({
    mutationFn: fetchLeagueSeasonCategoriesByLeague,
    onSuccess: (data) => {
      var count = Object.keys(data).length;
      let leagueSeasonCategoriesArr = [];
      for (var i = 0; i < count; i++) {
        leagueSeasonCategoriesArr.push({
          value: data[i].id,
          label: `${data[i].name} | ${data[i].age_limit_from} - ${data[i].age_limit_to}`,
          from: data[i].age_limit_from,
          to: data[i].age_limit_to,
          season_description: data[i].league_season.season_description,
          league_participants: data[i].league_participants,
          league_season_id: data[i].league_season.id,
          league_name: data[i].league_season.league.name,
          league_acronym: data[i].league_season.league.acronym,
          barangay: data[i].league_season.location_barangay.name,
          barangay_id: data[i].league_season.location_barangay.id,
          city: data[i].league_season.location_city.city,
          city_id: data[i].league_season.location_city.id,
          province: data[i].league_season.location_province.name,
          province_id: data[i].league_season.location_province.id,
          opening_date: data[i].league_season.opening_date,
          owner_name: data[i].league_season.league.owner_user.profile.full_name,
          league_type: data[i].league_season.league.league_type.name,
        });
      }

      dispatch(setDivisions(leagueSeasonCategoriesArr));

      const defaultSelectedItem =
        leagueSeasonCategoriesArr.length > 0
          ? leagueSeasonCategoriesArr[0].value
          : null;
      dispatch(setDivisionID(defaultSelectedItem));
    },
  });

  const handleJoin = async () => {
    console.log("join");
  };

  const handleFetchDivisions = async () => {
    const params = {
      league_id: leagueID,
    };

    try {
      await fetchLeagueSeasonCategoriesMutation({ params });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    dispatch(setDivisionID(null));
    handleFetchDivisions();
  }, [leagueID]);

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  return (
    <Modal visible={isVisible} transparent={true} animationType="fade">
      <View style={styles.overlay} />
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.chooseDivisionContainer}>
            <Text style={styles.chooseDivisionText}>Choose Division</Text>
            <View style={styles.xMarkContainer}>
              <TouchableOpacity onPress={() => isCanceled()}>
                <FontAwesomeIcon icon={faXmark} size={hp(3)} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabelText}>Divisions</Text>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={divisions}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select"
              searchPlaceholder="Search..."
              value={divisionID}
              onChange={(item) => {
                dispatch(setDivisionID(item.value));
              }}
              renderItem={renderItem}
            />
          </View>
          <View style={styles.modalButtons}>
            <TouchableOpacity
              style={[styles.modalButton, styles.yesButton]}
              onPress={join}
            >
              <Text style={styles.yesButtonText}>Join</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SelectDivisionModal;
