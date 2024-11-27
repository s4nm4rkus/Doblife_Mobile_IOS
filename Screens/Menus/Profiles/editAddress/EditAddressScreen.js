import { Text, View } from "react-native";
import { useState, useContext, useEffect } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./editAddress.style";
import Header from "../editHeader/Header";
import { AuthContext } from "../../../../context/AuthContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  updateBirthplace,
  updateHometown,
  updateLivingAddress,
  updateVotingAddress,
} from "../../../../api/userApi";
import { fetchCountries } from "../../../../api/countryApi";
import { fetchProvinces } from "../../../../api/provinceApi";
import { fetchCities } from "../../../../api/cityApi";
import { fetchBarangays } from "../../../../api/barangayApi";
import {
  barangayValue,
  cityValue,
  countryValue,
  provinceValue,
  setBarangay,
  setCity,
  setCountry,
  setProvince,
} from "../../../../features/profile/editAddress/editAddressSlice";
import { useDispatch, useSelector } from "react-redux";

const EditAddressScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { userToken } = useContext(AuthContext);
  const profile = queryClient.getQueryData(["profile"]);
  const [countries, setCountries] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [barangays, setBarangays] = useState([]);
  const country = useSelector(countryValue);
  const province = useSelector(provinceValue);
  const city = useSelector(cityValue);
  const barangay = useSelector(barangayValue);
  const [isProvinceDisabled, setProvinceDisabled] = useState(true);
  const [isCityDisabled, setCityDisabled] = useState(true);
  const [isBarangayDisabled, setBarangayDisabled] = useState(true);
  const { value } = route.params;

  const { mutateAsync: updateBirthplaceMutation } = useMutation({
    mutationFn: updateBirthplace,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });

  const { mutateAsync: updateHometownMutation } = useMutation({
    mutationFn: updateHometown,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });

  const { mutateAsync: updateLivingAddressMutation } = useMutation({
    mutationFn: updateLivingAddress,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });

  const { mutateAsync: updateVotingAddressMutation } = useMutation({
    mutationFn: updateVotingAddress,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });

  const handleEditBirthplace = async () => {
    const params = {
      user_id: profile.user_id,
      city_id: city,
    };

    try {
      await updateBirthplaceMutation({ userToken, params });
      navigation.navigate("Profiles");
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  const handleEditHometown = async () => {
    const params = {
      user_id: profile.user_id,
      city_id: city,
      brgy_id: barangay,
    };

    try {
      await updateHometownMutation({ userToken, params });
      navigation.navigate("Profiles");
    } catch (e) {
      console.log(e);
    }
  };
  const handleEditLivingAddress = async () => {
    const params = {
      user_id: profile.user_id,
      brgy_id: barangay,
    };

    try {
      await updateLivingAddressMutation({ userToken, params });
      navigation.navigate("Profiles");
    } catch (e) {
      console.log(e);
    }
  };

  const handleEditVotingAddress = async () => {
    const params = {
      user_id: profile.user_id,
      brgy_id: barangay,
    };

    try {
      await updateVotingAddressMutation({ userToken, params });
      navigation.navigate("Profiles");
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
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

  const headerTitle = () => {
    if (value == "birthdate") {
      return "Edit Birthplace";
    }

    if (value == "hometown") {
      return "Edit Hometown";
    }

    if (value == "living_address") {
      return "Edit Living Address";
    }

    if (value == "voting_address") {
      return "Edit Voting Address";
    }

    return "";
  };

  const saveAddress = () => {
    switch (value) {
      case "birthdate":
        handleEditBirthplace();
        break;
      case "hometown":
        handleEditHometown();
        break;
      case "living_address":
        handleEditLivingAddress();
        break;
      case "voting_address":
        handleEditVotingAddress();
        break;
      default:
        break;
    }
  };

  const renderBarangayDropdown = () => {
    if (value !== "birthdate") {
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabelText}>Barangay</Text>
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
            placeholder="Select"
            searchPlaceholder="Search..."
            value={barangay}
            onChange={(item) => {
              dispatch(setBarangay(item.value));
            }}
            renderItem={renderItems}
          />
        </View>
      );
    }
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
      <Header
        navigation={navigation}
        save={saveAddress}
        title={headerTitle()}
      />
      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabelText}>Country</Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={countries}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select"
            searchPlaceholder="Search..."
            value={country}
            onChange={(item) => {
              dispatch(setCountry(item.value));
              handleFetchProvinces(item.value);
            }}
            renderItem={renderItems}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabelText}>Province</Text>
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
            placeholder="Select"
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
          <Text style={styles.inputLabelText}>City/Municipality</Text>
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
            placeholder="Select"
            searchPlaceholder="Search..."
            value={city}
            onChange={(item) => {
              dispatch(setCity(item.value));
              handleFetchBarangays(item.value);
            }}
            renderItem={renderItems}
          />
        </View>
        {renderBarangayDropdown()}
      </View>
    </SafeAreaView>
  );
};

export default EditAddressScreen;
