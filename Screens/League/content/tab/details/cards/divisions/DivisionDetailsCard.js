import { View, Text, TouchableOpacity } from "react-native";
import styles from "./divisionDetailsCard.style";
import { useDispatch, useSelector } from "react-redux";
import {
  leagueSeasonCategoriesValue,
  leagueSeasonCategoryValue,
} from "../../../../../../../features/selectDivision/selectDivisionSlice";
import { setDivisionDatas } from "../../../../../../../features/leaguesEditDivisions/leaguesEditDivisionsSlice";
import { isOwnerValue } from "../../../../../../../features/league/leagueSlice";

const DivisionDetailsCard = ({ navigation }) => {
  const dispatch = useDispatch();
  const leagueSeasonCategory = useSelector(leagueSeasonCategoryValue);
  const leagueSeasonCategories = useSelector(leagueSeasonCategoriesValue);
  const isOwner = useSelector(isOwnerValue);

  const handleNavigateEditDivisions = () => {
    var count = leagueSeasonCategories.length;
    let leagueSeasonCategoriesArr = [];
    for (var i = 0; i < count; i++) {
      leagueSeasonCategoriesArr.push({
        id: leagueSeasonCategories[i].value,
        division_name: leagueSeasonCategories[i].label,
        from: leagueSeasonCategories[i].from,
        to: leagueSeasonCategories[i].to,
        is_editing: false,
        is_new: false,
      });
    }

    dispatch(setDivisionDatas(leagueSeasonCategoriesArr));
    navigation.navigate("EditDivisions");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerWrapper}>
          <Text style={styles.seasonDescriptionText}>DIVISIONS</Text>
          <View style={styles.editContainer}>
            <TouchableOpacity
              onPress={() => handleNavigateEditDivisions()}
              disabled={!isOwner}
            >
              <Text style={styles.editText(isOwner)}>EDIT</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.headerLine}></View>
      </View>
      <View style={styles.divisionContainer}>
        <View style={styles.titlesContainer}>
          <View style={styles.column}>
            <Text style={styles.labelText}>Division Name</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.labelText}>Year Born</Text>
          </View>
        </View>

        {leagueSeasonCategories?.map((data, index) => (
          <View style={styles.valuesContainer} key={index}>
            <View style={styles.column}>
              <Text style={styles.valueText}>{data.label}</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.valueText}>
                {data.from} {data.to != 0 ? `- ${data.to}` : null}
              </Text>
            </View>
          </View>
        ))}
      </View>
      {/* <View style={styles.detailsContainer}>
        <View style={styles.details}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={styles.detailsLabelText}>Division Name</Text>
              <Text style={styles.detailsText}>
                { leagueSeasonCategory ? leagueSeasonCategory.label : ''}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.details}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={styles.detailsLabelText}>Year Born</Text>
              <Text style={styles.detailsText}>
                { leagueSeasonCategory ? `${leagueSeasonCategory.from} - ${leagueSeasonCategory.to}` : ''}
              </Text>
            </View>
          </View>
        </View>
      </View> */}
    </View>
  );
};

export default DivisionDetailsCard;
