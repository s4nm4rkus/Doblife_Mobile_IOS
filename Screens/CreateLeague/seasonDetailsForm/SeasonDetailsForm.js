import { Text, View } from "react-native";
import { useState, useContext, useEffect } from "react";
import styles from "./seasonDetailsForm.style";
import { TextInput } from "react-native-gesture-handler";
import { Dropdown } from "react-native-element-dropdown";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import {
  barangayValue,
  cityValue,
  countryValue,
  dayValue,
  monthValue,
  provinceValue,
  seasonDescriptionValue,
  setBarangay,
  setCity,
  setCountry,
  setDay,
  setMonth,
  setProvince,
  setSeasonDescription,
  setYear,
  yearValue,
} from "../../../features/createLeague/createLeagueSlice";
import { fetchCountries } from "../../../api/countryApi";
import { fetchProvinces } from "../../../api/provinceApi";
import { fetchCities } from "../../../api/cityApi";
import { fetchBarangays } from "../../../api/barangayApi";

const datas = [
  { label: "Item 1", value: "1", search: "Item 1" },
  { label: "Item 2", value: "2", search: "Item 2" },
  { label: "Item 3", value: "3", search: "Item 3" },
  { label: "Item 4", value: "4", search: "Item 4" },
  { label: "Item 5", value: "5", search: "Item 5" },
  { label: "Item 6", value: "6", search: "Item 6" },
  { label: "Item 7", value: "7", search: "Item 7" },
  { label: "Item 8", value: "8", search: "Item 8" },
];

const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const SeasonDetailsForm = ({ route, navigation }) => {
  const queryClient = useQueryClient();
  const profile = queryClient.getQueryData(["profile"]);
  const dispatch = useDispatch();
  const seasonDescription = useSelector(seasonDescriptionValue);
  const month = useSelector(monthValue);
  const day = useSelector(dayValue);
  const year = useSelector(yearValue);
  const [days, setDays] = useState([]);
  const [months, setMonths] = useState([]);
  const [years, setYears] = useState([]);
  const [countries, setCountries] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [barangays, setBarangays] = useState([]);
  const country = useSelector(countryValue);
  const province = useSelector(provinceValue);
  const city = useSelector(cityValue);
  const barangay = useSelector(barangayValue);
  const [errors, setErrors] = useState({});
  const [value, setValue] = useState();
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [isProvinceDisabled, setProvinceDisabled] = useState(true);
  const [isCityDisabled, setCityDisabled] = useState(true);
  const [isBarangayDisabled, setBarangayDisabled] = useState(true);

  const removeLeagueNameError = () => {
    let errorsObj = errors;

    if (errorsObj["league_name"] === undefined) return;

    delete errorsObj.league_name;

    setErrors((error) => {
      const { league_name, ...errors } = error;

      return errors;
    });
  };

  const getMonthName = (monthNumber) => {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString("en-US", {
      month: "short",
    });
  };

  const getDefaultDays = () => {
    let days = [];
    for (var i = 1; i <= daysPerMonth[0]; i++) {
      days.push({ label: ("0" + i).slice(-2), value: ("0" + i).slice(-2) });
    }
    setDays(days);
  };

  const getMonths = () => {
    let months = [];
    for (var i = 1; i <= 12; i++) {
      months.push({ label: getMonthName(i), value: i });
    }
    setMonths(months);
  };

  const getYears = () => {
    const d = new Date();
    let years = [];
    for (var i = 1930; i <= d.getFullYear() + 1; i++) {
      years.push({ label: i.toString(), value: i });
    }
    years.reverse();
    setYears(years);
  };

  const handleFetchProvinces = (countryID) => {
    fetchProvinces(countryID).then((data) => {
      var count = Object.keys(data).length;
      let provincesArr = [];
      for (var i = 0; i < count; i++) {
        provincesArr.push({
          value: data[i].id,
          label: data[i].name,
        });
      }
      setProvinces(provincesArr);
      setProvinceDisabled(false);

      if (province) {
        handleFetchCities(province);
      }
    });
  };

  const handleFetchCities = (provinceID) => {
    fetchCities(provinceID).then((data) => {
      var count = Object.keys(data).length;
      let citiesArr = [];
      for (var i = 0; i < count; i++) {
        citiesArr.push({
          value: data[i].id,
          label: data[i].city,
        });
      }
      setCities(citiesArr);
      setCityDisabled(false);

      if (city) {
        handleFetchBarangays(city);
      }
    });
  };

  const handleFetchBarangays = (cityID) => {
    fetchBarangays(cityID).then((data) => {
      var count = Object.keys(data).length;
      let barangaysArr = [];
      for (var i = 0; i < count; i++) {
        barangaysArr.push({
          value: data[i].id,
          label: data[i].name,
        });
      }
      setBarangays(barangaysArr);
      setBarangayDisabled(false);
    });
  };

  useEffect(() => {
    fetchCountries().then((data) => {
      var count = Object.keys(data).length;
      let countriesArr = [];
      for (var i = 0; i < count; i++) {
        countriesArr.push({
          value: data[i].id,
          label: data[i].name,
        });
      }
      setCountries(countriesArr);

      if (country) {
        handleFetchProvinces(country);
      }
    });
    getDefaultDays();
    getMonths();
    getYears();
  }, []);

  const renderItems = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  return (
    <View style={styles.inputsContainer} onStartShouldSetResponder={() => true}>
      <Text style={styles.seasonDetailsText}>Season Details</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabelText}>Season Description *</Text>
        <View style={styles.textInputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.inInput}
              value={seasonDescription}
              onChangeText={(text) => dispatch(setSeasonDescription(text))}
            />
          </View>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabelText}>Opening Date *</Text>
        <View style={{ flex: 1, flexDirection: "row", gap: 10 }}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={months}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder=""
            searchPlaceholder="Search..."
            value={month}
            onChange={(item) => {
              dispatch(setMonth(item.value));
            }}
            renderItem={renderItems}
          />
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={days}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder=""
            searchPlaceholder="Search..."
            value={day}
            onChange={(item) => {
              dispatch(setDay(item.value));
            }}
            renderItem={renderItems}
          />
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={years}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder=""
            searchPlaceholder="Search..."
            value={year}
            onChange={(item) => {
              dispatch(setYear(item.value));
            }}
            renderItem={renderItems}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabelText}>Address *</Text>
        <View style={styles.dropdownContainer}>
          <Dropdown
            style={styles.addressDropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={countries}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Country"
            searchPlaceholder="Search..."
            value={country.value}
            onChange={(item) => {
              dispatch(setCountry(item));
              handleFetchProvinces(item.value);
            }}
            renderItem={renderItems}
          />
        </View>
        <View style={styles.dropdownContainer}>
          <Dropdown
            style={styles.addressDropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={provinces}
            search
            disable={isProvinceDisabled}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Province"
            searchPlaceholder="Search..."
            value={province.value}
            onChange={(item) => {
              dispatch(setProvince(item));
              handleFetchCities(item.value);
            }}
            renderItem={renderItems}
          />
        </View>
        <View style={styles.dropdownContainer}>
          <Dropdown
            style={styles.addressDropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={cities}
            search
            disable={isCityDisabled}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="City"
            searchPlaceholder="Search..."
            value={city.value}
            onChange={(item) => {
              dispatch(setCity(item));
              handleFetchBarangays(item.value);
            }}
            renderItem={renderItems}
          />
        </View>
        <View style={styles.dropdownContainer}>
          <Dropdown
            style={styles.addressDropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={barangays}
            search
            disable={isBarangayDisabled}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Barangay"
            searchPlaceholder="Search..."
            value={barangay.value}
            onChange={(item) => {
              dispatch(setBarangay(item));
            }}
            renderItem={renderItems}
          />
        </View>
      </View>
    </View>
  );
};

export default SeasonDetailsForm;
