import { View, Text } from "react-native";
import styles from "./divisionDetailsCard.style";
import { useSelector } from "react-redux";
import { leagueSeasonCategoryValue } from "../../../../../../../features/selectDivision/selectDivisionSlice";

const DivisionDetailsCard = ({ navigation }) => {
  const leagueSeasonCategory = useSelector(leagueSeasonCategoryValue);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.divisionDetailsText}>Division Details</Text>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.details}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={styles.detailsLabelText}>Division Name</Text>
              <Text style={styles.detailsText}>
                {leagueSeasonCategory ? leagueSeasonCategory.label : ""}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.details}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={styles.detailsLabelText}>Year Born</Text>
              <Text style={styles.detailsText}>
                {leagueSeasonCategory
                  ? `${leagueSeasonCategory.from} - ${leagueSeasonCategory.to}`
                  : ""}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DivisionDetailsCard;
