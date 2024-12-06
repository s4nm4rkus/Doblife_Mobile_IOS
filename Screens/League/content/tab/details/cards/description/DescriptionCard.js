import { View, Text, TouchableOpacity } from "react-native";
import styles from "./descriptionCard.style";
import { useDispatch, useSelector } from "react-redux";
import { leagueSeasonCategoryValue } from "../../../../../../../features/selectDivision/selectDivisionSlice";
import {
  isOwnerValue,
  leagueDataValue,
} from "../../../../../../../features/league/leagueSlice";
import {
  setLeagueDescription,
  setSeasonDescription,
} from "../../../../../../../features/leaguesEditDescriptions/leaguesEditDescriptionsSlice";

const DescriptionCard = ({ navigation }) => {
  const dispatch = useDispatch();
  const leagueSeasonCategory = useSelector(leagueSeasonCategoryValue);

  console.log("leagueSeasonCategory:", leagueSeasonCategory);

  const leagueData = useSelector(leagueDataValue);
  const isOwner = useSelector(isOwnerValue);

  const handleNavigateEditDescriptions = () => {
    if (leagueData) {
      dispatch(setLeagueDescription(leagueData.description));
    }

    if (leagueSeasonCategory) {
      dispatch(setSeasonDescription(leagueSeasonCategory.season_description));
    }

    navigation.navigate("EditDescriptions");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerWrapper}>
          <Text style={styles.seasonDescriptionText}>DESCRIPTION</Text>
          <View style={styles.editContainer}>
            <TouchableOpacity
              onPress={() => handleNavigateEditDescriptions()}
              disabled={!isOwner}
            >
              <Text style={styles.editText(isOwner)}>EDIT</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.headerLine}></View>
      </View>
      <View style={styles.leagueDescriptionContainer}>
        <Text style={styles.descriptionTitle}>League Description</Text>
        <View style={styles.details}>
          <Text style={styles.detailsText}>
            {leagueData ? leagueData.description : "No league description"}
          </Text>
        </View>
      </View>
      <View style={styles.seasonDescriptionContainer}>
        <Text style={styles.descriptionTitle}>Season Description</Text>
        <View style={styles.details}>
          <Text style={styles.detailsText}>
            {leagueSeasonCategory
              ? leagueSeasonCategory.season_description
              : "No season description"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DescriptionCard;
