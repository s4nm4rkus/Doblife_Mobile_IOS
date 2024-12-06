import { View, Text, TouchableOpacity } from "react-native";
import styles from "./seasonDetailsCard.style";
import { useDispatch, useSelector } from "react-redux";
import { leagueSeasonCategoryValue } from "../../../../../../../features/selectDivision/selectDivisionSlice";
import moment from "moment/moment";
import {
  setBarangay,
  setCity,
  setCountry,
  setDate,
  setProvince,
} from "../../../../../../../features/leaguesEditSeasonDetails/leaguesEditSeasonDetailsSlice";
import { isOwnerValue } from "../../../../../../../features/league/leagueSlice";

const SeasonDetailsCard = ({ navigation }) => {
  const dispatch = useDispatch();
  const leagueSeasonCategory = useSelector(leagueSeasonCategoryValue);
  const isOwner = useSelector(isOwnerValue);

  const renderPlaceName = () => {
    if (!leagueSeasonCategory) return "No Address";

    let barangay = leagueSeasonCategory.barangay;
    let city = leagueSeasonCategory.city;
    let province = leagueSeasonCategory.province;

    if (barangay && city && province) {
      return `${barangay} ${city}, ${province}`;
    }

    if (city && province) {
      return `${city}, ${province}`;
    }

    if (province) {
      return `${province}`;
    }
  };

  const handleNavigateEditSeasonDetails = () => {
    let openingDate = leagueSeasonCategory.opening_date;

    dispatch(setCountry(leagueSeasonCategory.country_id));
    dispatch(setProvince(leagueSeasonCategory.province_id));
    dispatch(setCity(leagueSeasonCategory.city_id));
    dispatch(setBarangay(leagueSeasonCategory.barangay_id));

    if (openingDate) {
      openingDate = moment(openingDate).format("MM/DD/YYYY");
      dispatch(setDate(openingDate));
    }

    navigation.navigate("EditSeasonDetails");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerWrapper}>
          <Text style={styles.seasonDescriptionText}>SEASON DETAILS</Text>
          <View style={styles.editContainer}>
            <TouchableOpacity
              onPress={() => handleNavigateEditSeasonDetails()}
              disabled={!isOwner}
            >
              <Text style={styles.editText(isOwner)}>EDIT</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.headerLine}></View>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.details}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={styles.detailsLabelText}>Address</Text>
              <Text style={styles.detailsText}>{renderPlaceName()}</Text>
            </View>
          </View>
        </View>
        <View style={styles.details}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={styles.detailsLabelText}>Opening Date</Text>
              <Text style={styles.detailsText}>
                {leagueSeasonCategory
                  ? moment(leagueSeasonCategory.opening_date).format(
                      "MMMM DD, YYYY"
                    )
                  : "No Opening Date"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SeasonDetailsCard;
