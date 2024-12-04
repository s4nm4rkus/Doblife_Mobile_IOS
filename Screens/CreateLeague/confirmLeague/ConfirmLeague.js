import { Text, View, ScrollView } from "react-native";
import styles from "./confirmLeague.style";
import { useSelector } from "react-redux";
import {
  acronymValue,
  barangayValue,
  cityValue,
  dayValue,
  divisionDatasValue,
  leagueNameValue,
  leagueTypeValue,
  monthValue,
  provinceValue,
  yearValue,
} from "../../../features/createLeague/createLeagueSlice";
import moment from "moment/moment";
import { useEffect } from "react";
import { isEmptyObject } from "../../../utils/helpers";

const ConfirmLeague = ({ route, navigation }) => {
  const leagueName = useSelector(leagueNameValue);
  const acronym = useSelector(acronymValue);
  const leagueType = useSelector(leagueTypeValue);
  const province = useSelector(provinceValue);
  const city = useSelector(cityValue);
  const barangay = useSelector(barangayValue);
  const datas = useSelector(divisionDatasValue);
  const month = useSelector(monthValue);
  const day = useSelector(dayValue);
  const year = useSelector(yearValue);

  return (
    <View style={styles.container} onStartShouldSetResponder={() => true}>
      <View style={styles.cardContainer}>
        <Text style={styles.textTitle}>League Details</Text>
        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>League Name</Text>
          <Text style={styles.detailValue}>{leagueName}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>Acronym</Text>
          <Text style={styles.detailValue}>{acronym}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>League Type</Text>
          <Text style={styles.detailValue}>{leagueType.label}</Text>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <Text style={styles.textTitle}>Season Details</Text>
        {(!isEmptyObject(province) ||
          !isEmptyObject(city) ||
          !isEmptyObject(barangay)) && (
          <View style={styles.detailContainer}>
            <Text style={styles.detailLabel}>Location</Text>
            <Text style={styles.detailValue}>
              {barangay?.label} {city?.label}, {province?.label}
            </Text>
          </View>
        )}
        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>Opening Date</Text>
          <Text style={styles.detailValue}>
            {moment(`${year}-${month}-${day}`, "YYYY-MM-DD").format(
              "MMMM DD, YYYY"
            )}
          </Text>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <Text style={styles.textTitle}>Divisions</Text>
        <View style={styles.divisionContainer}>
          <View style={styles.titlesContainer}>
            <View style={styles.column}>
              <Text style={styles.labelText}>Division Name</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.labelText}>Year Born</Text>
            </View>
          </View>

          {datas?.map((data, index) => (
            <View style={styles.valuesContainer} key={index}>
              <View style={styles.column}>
                <Text style={styles.valueText}>{data.division_name}</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.valueText}>
                  {data.from} - {data.to}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default ConfirmLeague;
