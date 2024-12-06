import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useState, useEffect, useContext } from "react";
import { Dropdown } from "react-native-element-dropdown";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./editSeasonDetails.style";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthContext } from "../../../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { leagueIDValue } from "../../../features/myLeaguesSelectLeague/myLeaguesSelectLeagueSlice";
import Header from "./header/Header";
import { leagueSeasonCategoryValue } from "../../../features/selectDivision/selectDivisionSlice";
import { fetchProvinces } from "../../../api/provinceApi";
import { fetchBarangays } from "../../../api/barangayApi";
import { fetchCities } from "../../../api/cityApi";
import {
  Menu,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
} from "react-native-popup-menu";
import DatePicker from "react-native-date-picker";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  barangayValue,
  cityValue,
  countryValue,
  dateValue,
  provinceValue,
  setBarangay,
  setCity,
  setDate,
  setProvince,
} from "../../../features/leaguesEditSeasonDetails/leaguesEditSeasonDetailsSlice";
import moment from "moment/moment";
import { updateSeasonDetails } from "../../../api/leagueSeasonApi";
import { FONTSIZE } from "../../../constants/theme";

const EditSeasonDetailsScreen = ({ navigation }) => {
  const { userToken } = useContext(AuthContext);
  const dispatch = useDispatch();
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [barangays, setBarangays] = useState([]);
  const [isProvinceDisabled, setProvinceDisabled] = useState(true);
  const [isCityDisabled, setCityDisabled] = useState(true);
  const [isBarangayDisabled, setBarangayDisabled] = useState(true);
  const [isDateOpened, setIsDateOpened] = useState(false);
  const leagueSeasonCategory = useSelector(leagueSeasonCategoryValue);
  const country = useSelector(countryValue);
  const province = useSelector(provinceValue);
  const city = useSelector(cityValue);
  const barangay = useSelector(barangayValue);
  const date = useSelector(dateValue);

  const optionsStyles = {
    optionsContainer: {
      width: wp(90),
      marginTop: 45,
      padding: 5,
    },
  };

  const { mutateAsync: updateSeasonDetailsMutation } = useMutation({
    mutationFn: updateSeasonDetails,
    onSuccess: (data) => {},
  });

  const handleUpdateSeasonDetails = async () => {
    const params = {
      league_season_id: leagueSeasonCategory.league_season_id,
      city_id: city,
      brgy_id: barangay,
      province_id: province,
      date: date ? moment(date, "MM/DD/YYYY").format("YYYY-MM-DD") : null,
    };

    try {
      await updateSeasonDetailsMutation({ userToken, params });
      navigation.navigate("League");
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  const onBackdropPress = () => {
    setIsDateOpened(false);
  };

  const onTriggerPress = () => {
    setIsDateOpened(true);
  };

  const onBackdropPressLocation = () => {
    setIsLocationOpened(false);
  };

  const onTriggerPressLocation = () => {
    setIsLocationOpened(true);
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

  const handleDateChange = (date) => {
    let dateString = date.toLocaleDateString().replace(/\b(\d)\b/g, "0$1");
    console.log(dateString);
    dispatch(setDate(dateString));
  };

  const handleCancelDate = () => {
    dispatch(setDate(null));
    setIsDateOpened(false);
  };

  const handleOkDate = () => {
    setIsDateOpened(false);
  };

  useEffect(() => {
    let countryID = 11;

    if (country) {
      countryID = country;
    }

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

      if (city) {
        handleFetchBarangays(city);
      }
    });
  }, []);

  const renderItems = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <MenuProvider>
        <Header
          navigation={navigation}
          save={handleUpdateSeasonDetails}
          title="Back"
        />
        <View style={styles.addressContainer}>
          <Text style={styles.inputLabelText}>Address</Text>
          <View style={styles.inputContainer}>
            <Dropdown
              style={styles.dropdown}
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
              placeholder="Select Province"
              searchPlaceholder="Search..."
              value={province}
              onChange={(item) => {
                dispatch(setProvince(item.value));
                handleFetchCities(item.value);
              }}
              renderItem={renderItems}
            />
          </View>
          <View style={styles.inputContainer}>
            <Dropdown
              style={styles.dropdown}
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
              placeholder="Select City/Municipality"
              searchPlaceholder="Search..."
              value={city}
              onChange={(item) => {
                dispatch(setCity(item.value));
                handleFetchBarangays(item.value);
              }}
              renderItem={renderItems}
            />
          </View>
          <View style={styles.inputContainer}>
            <Dropdown
              style={styles.dropdown}
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
              placeholder="Select Barangay"
              searchPlaceholder="Search..."
              value={barangay}
              onChange={(item) => {
                dispatch(setBarangay(item.value));
              }}
              renderItem={renderItems}
            />
          </View>
          <View style={styles.addressContainerLine}></View>
        </View>
        <View style={styles.openingDateContainer}>
          <Text style={styles.openingDateText}>Opening Date</Text>
          <View style={styles.inputContainer}>
            <Menu
              onBackdropPress={() => onBackdropPress()}
              opened={isDateOpened}
            >
              <MenuTrigger onPress={() => onTriggerPress()}>
                <View style={styles.popoverContainer}>
                  <Text
                    style={
                      date ? styles.popoverText : styles.popoverPlaceholderText
                    }
                  >
                    {date ? date : "Pick Date"}
                  </Text>
                  <View style={styles.iconWrapper}>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      style={styles.chevronDownIcon}
                      size={hp(1.6)}
                    />
                  </View>
                </View>
              </MenuTrigger>
              <MenuOptions customStyles={optionsStyles}>
                <DatePicker
                  mode="date"
                  date={date ? moment(date, "MM/DD/YYYY").toDate() : new Date()}
                  onDateChange={(date) => handleDateChange(date)}
                />
                <View style={{ marginVertical: 10 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      marginHorizontal: 20,
                    }}
                  >
                    <TouchableOpacity
                      style={{ marginRight: 20 }}
                      onPress={handleCancelDate}
                    >
                      <Text style={{ fontSize: FONTSIZE.semi_large }}>
                        Cancel
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleOkDate}>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: FONTSIZE.semi_large,
                        }}
                      >
                        Ok
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </MenuOptions>
            </Menu>
          </View>
        </View>
      </MenuProvider>
    </SafeAreaView>
  );
};

export default EditSeasonDetailsScreen;
