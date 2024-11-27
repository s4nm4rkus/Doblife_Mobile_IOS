import { Text, TextInput, View } from "react-native";
import { useState, useContext, useEffect } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./editBasicInfo.style";
import Header from "../editHeader/Header";
import { AuthContext } from "../../../../context/AuthContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBasicInfo } from "../../../../api/userApi";

const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const genders = [
  {
    label: "Male",
    value: "Male",
  },
  {
    label: "Female",
    value: "Female",
  },
];

const EditBasicInfoScreen = ({ navigation }) => {
  const queryClient = useQueryClient();
  const { userToken } = useContext(AuthContext);
  const profile = queryClient.getQueryData(["profile"]);
  const [days, setDays] = useState([]);
  const [months, setMonths] = useState([]);
  const [years, setYears] = useState([]);
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const [gender, setGender] = useState(profile.gender);
  const [firstname, setFirstname] = useState(profile.firstname);
  const [middlename, setMiddlename] = useState(profile.middlename);
  const [lastname, setLastname] = useState(profile.lastname);

  const { mutateAsync: updateBasicInfoMutation } = useMutation({
    mutationFn: updateBasicInfo,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });

  const handleEditBasicInfo = async () => {
    const params = {
      user_id: profile.user_id,
      gender: gender,
      firstname: firstname,
      middlename: middlename,
      lastname: lastname,
      birthday: getFullBirthday(),
    };

    try {
      await updateBasicInfoMutation({ userToken, params });
      navigation.navigate("Profiles");
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  const getFullBirthday = () => {
    if (year == null || month == null || day == null) {
      return null;
    }
    return `${year}-${month}-${day}`;
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
    for (var i = 1930; i <= d.getFullYear(); i++) {
      years.push({ label: i.toString(), value: i });
    }
    years.reverse();
    setYears(years);
  };

  const setBirthdate = () => {
    if (profile.birthday == null) return;
    const date = new Date(profile.birthday);

    const year = date.getFullYear();
    setYear(year);

    const month = date.getMonth() + 1;
    setMonth(month);

    const day = String(date.getDate()).padStart(2, "0");
    setDay(day);
  };

  useEffect(() => {
    getDefaultDays();
    getMonths();
    getYears();
    setBirthdate();
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
        save={handleEditBasicInfo}
        title="Edit Basic Info"
      />
      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabelText}>Firstname</Text>
          <View style={styles.textInputContainer}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.inInput}
                placeholderTextColor="#aaa"
                placeholder="Firstname"
                value={firstname}
                onChangeText={(text) => setFirstname(text)}
              />
            </View>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabelText}>Middlename</Text>
          <View style={styles.textInputContainer}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.inInput}
                placeholderTextColor="#aaa"
                placeholder="Middlename"
                value={middlename}
                onChangeText={(text) => setMiddlename(text)}
              />
            </View>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabelText}>Lastname</Text>
          <View style={styles.textInputContainer}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.inInput}
                placeholderTextColor="#aaa"
                placeholder="Lastname"
                value={lastname}
                onChangeText={(text) => setLastname(text)}
              />
            </View>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabelText}>Gender</Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={genders}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select"
            searchPlaceholder="Search..."
            value={gender}
            onChange={(item) => {
              setGender(item.value);
            }}
            renderItem={renderItems}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabelText}>Birthdate</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginRight: 10, flex: 1 }}>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={months}
                maxHeight={300}
                placeholder="MM"
                labelField="label"
                valueField="value"
                value={month}
                onChange={(item) => {
                  setMonth(item.value);
                }}
                renderItem={renderItems}
              />
            </View>
            <View style={{ marginRight: 10, flex: 1 }}>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={days}
                maxHeight={300}
                placeholder="DD"
                labelField="label"
                valueField="value"
                value={day}
                onChange={(item) => {
                  setDay(item.value);
                }}
                renderItem={renderItems}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={years}
                maxHeight={300}
                placeholder="YYYY"
                labelField="label"
                valueField="value"
                value={year}
                onChange={(item) => {
                  setYear(item.value);
                }}
                renderItem={renderItems}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditBasicInfoScreen;
