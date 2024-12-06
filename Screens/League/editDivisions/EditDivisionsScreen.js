import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useContext, useEffect, useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./editDivisions.style";
import { useMutation } from "@tanstack/react-query";
import { AuthContext } from "../../../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { updateDescriptions } from "../../../api/leagueApi";
import Header from "./header/Header";
import { leagueSeasonCategoryValue } from "../../../features/selectDivision/selectDivisionSlice";
import {
  divisionDatasValue,
  divisionNameValue,
  divisionYearsValue,
  setDivisionDatas,
  setDivisionName,
  setDivisionYears,
  setYearBornFrom,
  setYearBornTo,
  yearBornFromValue,
  yearBornToValue,
} from "../../../features/leaguesEditDivisions/leaguesEditDivisionsSlice";
import { Feather } from "@expo/vector-icons";
import { updateDivisions } from "../../../api/leagueSeasonCategoryApi";
import { LinearGradient } from "expo-linear-gradient";

const EditDivisionsScreen = ({ navigation }) => {
  const { userToken } = useContext(AuthContext);
  const dispatch = useDispatch();
  const leagueSeasonCategory = useSelector(leagueSeasonCategoryValue);
  const divisionName = useSelector(divisionNameValue);
  const years = useSelector(divisionYearsValue);
  const from = useSelector(yearBornFromValue);
  const to = useSelector(yearBornToValue);
  const datas = useSelector(divisionDatasValue);
  const [errors, setErrors] = useState({});

  const { mutateAsync: updateDivisionsMutation } = useMutation({
    mutationFn: updateDivisions,
    onSuccess: (data) => {},
  });

  const handleUpdateDivisions = async () => {
    const params = {
      datas: JSON.stringify(datas),
    };

    try {
      await updateDivisionsMutation({ userToken, params });
      navigation.navigate("League");
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  const removeDivisionNameError = () => {
    let errorsObj = errors;

    if (errorsObj["division_name"] === undefined) return;

    delete errorsObj.division_name;

    setErrors((error) => {
      const { division_name, ...errors } = error;

      return errors;
    });
  };

  const handleCancel = (item, index) => {
    let newDatas = [...datas];

    const objectIndex = datas.findIndex((item) => item.is_editing === true);

    if (objectIndex !== -1) {
      newDatas[objectIndex] = {
        ...newDatas[objectIndex],
        id: newDatas[objectIndex].id,
        division_name: newDatas[objectIndex].division_name,
        from: newDatas[objectIndex].from,
        to: newDatas[objectIndex].to,
        is_editing: false,
        is_new: false,
      };
      dispatch(setDivisionDatas(newDatas));
    }
  };

  const handleDone = (item, index) => {
    let errors = {};

    if (!divisionName) errors.division_name = "Division Name is required";

    setErrors(errors);

    if (Object.keys(errors).length !== 0) return;

    if (item.is_editing) {
      let newDatas = [...datas];
      newDatas[index] = {
        ...newDatas[index],
        id: newDatas[index].id,
        division_name: divisionName,
        from: from,
        to: to,
        is_editing: false,
        is_new: false,
      };
      dispatch(setDivisionDatas(newDatas));
    }
  };

  const handleEditDivision = (item, index) => {
    let newDatas = [...datas];

    const objectIndex = datas.findIndex((item) => item.is_editing === true);

    if (objectIndex !== -1) {
      newDatas[objectIndex] = {
        ...newDatas[objectIndex],
        id: newDatas[objectIndex].id,
        division_name: newDatas[objectIndex].division_name,
        from: newDatas[objectIndex].from,
        to: newDatas[objectIndex].to,
        is_editing: false,
        is_new: false,
      };
      dispatch(setDivisionDatas(newDatas));
    }

    newDatas[index] = {
      ...newDatas[index],
      id: newDatas[index].id,
      division_name: item.division_name,
      from: item.from,
      to: item.to,
      is_editing: true,
      is_new: false,
    };

    dispatch(setDivisionName(item.division_name));
    dispatch(setYearBornFrom(item.from));
    dispatch(setYearBornTo(item.to));
    dispatch(setDivisionDatas(newDatas));
  };

  const getYears = () => {
    const d = new Date();
    let years = [];
    for (var i = 1930; i <= d.getFullYear(); i++) {
      years.push({ label: i.toString(), value: i });
    }
    years.reverse();
    dispatch(setDivisionYears(years));
  };

  useEffect(() => {
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
    <SafeAreaView style={styles.container}>
      <Header
        navigation={navigation}
        save={handleUpdateDivisions}
        title="Back"
      />
      <View style={styles.divisionsTextContainer}>
        <Text style={styles.divisionsText}>Divisions</Text>
      </View>
      <View
        style={styles.divisionsContainer}
        onStartShouldSetResponder={() => true}
      >
        {datas?.map((item, index) =>
          item.is_editing ? (
            <View style={styles.cardFormContainer} key={index}>
              <View style={styles.feedContentContainer}>
                <View style={styles.inputsContainer}>
                  <View style={styles.inputContainer}>
                    <Text style={styles.inputLabelText}>Division Name</Text>
                    <View style={styles.textInputContainer}>
                      <View style={styles.inputWrapper}>
                        <TextInput
                          style={styles.inInput}
                          value={divisionName}
                          onChangeText={(text) =>
                            dispatch(setDivisionName(text))
                          }
                          onFocus={() => removeDivisionNameError()}
                        />
                      </View>
                    </View>
                    {errors.division_name ? (
                      <Text style={styles.errorText}>
                        {errors.division_name}
                      </Text>
                    ) : null}
                  </View>
                  <View style={styles.yearBornDropdownContainer}>
                    <Text style={[styles.inputLabelText]}>Year Born</Text>
                    <View style={styles.yearBornDropdownsWrapper}>
                      <View style={{ flex: 1 }}>
                        <Dropdown
                          style={styles.dropdown}
                          placeholderStyle={styles.placeholderStyle}
                          selectedTextStyle={styles.selectedTextStyle}
                          inputSearchStyle={styles.inputSearchStyle}
                          iconStyle={styles.iconStyle}
                          data={years}
                          maxHeight={300}
                          placeholder="From"
                          labelField="label"
                          valueField="value"
                          value={from}
                          onChange={(item) => {
                            dispatch(setYearBornFrom(item.value));
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
                          placeholder="To"
                          labelField="label"
                          valueField="value"
                          value={to}
                          onChange={(item) => {
                            dispatch(setYearBornTo(item.value));
                          }}
                          renderItem={renderItems}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.inputContainer}>
                    <View style={[styles.buttonsContainer]}>
                      <View style={styles.backButtonContainer}>
                        <TouchableOpacity
                          style={[styles.modalButton, styles.backButton]}
                          onPress={() => handleCancel(item, index)}
                        >
                          <Text style={styles.backButtonText}>CANCEL</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.submitButtonContainer}>
                        <TouchableOpacity
                          style={styles.yesButton}
                          onPress={() => handleDone(item, index)}
                        >
                          <LinearGradient
                            colors={["#c42414", "#7c0b00"]}
                            style={styles.modalButton}
                          >
                            <Text style={styles.buttonText}>DONE</Text>
                          </LinearGradient>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ) : (
            <TouchableOpacity
              style={styles.cardContainer}
              key={index}
              onPress={() => handleEditDivision(item, index)}
            >
              <View style={styles.detailsContainer}>
                <View style={styles.divisionNameContainer}>
                  <Text style={styles.labelText}>Division Name</Text>
                  <Text style={styles.valueText}>{item.division_name}</Text>
                </View>
                <View style={styles.yearBornContainer}>
                  <Text style={styles.labelText}>Year Born</Text>
                  <Text style={styles.valueText}>
                    {item.from} - {item.to}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )
        )}
      </View>
    </SafeAreaView>
  );
};

export default EditDivisionsScreen;
