import { Text, TouchableOpacity, View } from "react-native";
import { useState, useContext, useEffect } from "react";
import styles from "./divisionsForm.style";
import { TextInput } from "react-native-gesture-handler";
import { Dropdown } from "react-native-element-dropdown";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { Feather } from "@expo/vector-icons";
import {
  addDivisionData,
  deleteDivisionData,
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
} from "../../../features/createLeague/createLeagueSlice";

const DivisionsForm = ({ route, navigation }) => {
  const queryClient = useQueryClient();
  const profile = queryClient.getQueryData(["profile"]);
  const dispatch = useDispatch();
  const divisionName = useSelector(divisionNameValue);
  const years = useSelector(divisionYearsValue);
  const from = useSelector(yearBornFromValue);
  const to = useSelector(yearBornToValue);
  const datas = useSelector(divisionDatasValue);
  const [errors, setErrors] = useState({});

  const removeDivisionNameError = () => {
    let errorsObj = errors;

    if (errorsObj["division_name"] === undefined) return;

    delete errorsObj.division_name;

    setErrors((error) => {
      const { division_name, ...errors } = error;

      return errors;
    });
  };
  // const [datas, setDatas] = useState([
  //   {
  //     division_name: '',
  //     from: '',
  //     to: '',
  //     is_editing: false,
  //     is_new: true,
  //   }
  // ]);

  const getYears = () => {
    const d = new Date();
    let years = [];
    for (var i = 1930; i <= d.getFullYear(); i++) {
      years.push({ label: i.toString(), value: i });
    }
    years.reverse();
    dispatch(setDivisionYears(years));
  };

  const handleDeleteOrCancel = (item, index) => {
    if (item.is_new || item.is_editing) {
      dispatch(deleteDivisionData(index));
    }
  };

  const handleAddOrDone = (item, index) => {
    let errors = {};

    if (!divisionName) errors.division_name = "Division Name is required";
    if (!from) errors.year_born_from = "Year Born From is required";

    setErrors(errors);

    if (Object.keys(errors).length !== 0) return;

    if (item.is_new || item.is_editing) {
      let newDatas = [...datas];
      newDatas[index] = {
        ...newDatas[index],
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

  const handleAddDivision = () => {
    dispatch(setDivisionName(null));
    dispatch(setYearBornFrom(null));
    dispatch(setYearBornTo(null));
    dispatch(addDivisionData());
  };

  const handleRemoveDivision = (index) => {
    dispatch(setDivisionDatas(datas.filter((_, i) => i !== index)));
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

  const renderAddDivision = () => {
    let found = false;
    for (let i = 0; i < datas.length; i++) {
      if (datas[i].is_editing == true || datas[i].is_new == true) {
        found = true;
        break;
      }
    }

    if (!found) {
      return (
        <View style={styles.cardContainer}>
          <View style={styles.addDivisionContainer}>
            <TouchableOpacity onPress={() => handleAddDivision()}>
              <Feather name={"plus-circle"} size={40} color={"black"} />
            </TouchableOpacity>
            <Text style={styles.addDivisionText}>Add Division</Text>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.container} onStartShouldSetResponder={() => true}>
      <Text style={styles.divisionsText}>Divisions</Text>
      {datas?.map((item, index) =>
        item.is_editing || item.is_new ? (
          <View style={styles.cardFormContainer} key={index}>
            <View style={styles.feedContentContainer}>
              <View style={styles.inputsContainer}>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabelText}>Division Name *</Text>
                  <View style={styles.textInputContainer}>
                    <View style={styles.inputWrapper}>
                      <TextInput
                        style={styles.inInput}
                        value={divisionName}
                        onChangeText={(text) => dispatch(setDivisionName(text))}
                        onFocus={() => removeDivisionNameError()}
                      />
                    </View>
                  </View>
                  {errors.division_name ? (
                    <Text style={styles.errorText}>{errors.division_name}</Text>
                  ) : null}
                </View>
                <View style={styles.inputContainer}>
                  <Text style={[styles.inputLabelText, { marginTop: 15 }]}>
                    Year Born
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ marginRight: 10, flex: 1 }}>
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
                  {errors.year_born_from ? (
                    <Text style={styles.errorText}>
                      {errors.year_born_from}
                    </Text>
                  ) : null}
                </View>
              </View>
            </View>
            <View style={styles.feedInfoContainer}>
              <View style={styles.buttonsContainer}>
                <View style={styles.backButtonContainer}>
                  <TouchableOpacity
                    style={[styles.modalButton, styles.backButton]}
                    onPress={() => handleDeleteOrCancel(item, index)}
                  >
                    <Text style={styles.backButtonText}>
                      {item.is_new ? "CANCEL" : "DELETE"}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.submitButtonContainer}>
                  <TouchableOpacity
                    style={[styles.modalButton, styles.yesButton]}
                    onPress={() => handleAddOrDone(item, index)}
                  >
                    <Text style={styles.buttonText}>
                      {item.is_new ? "ADD" : "DONE"}
                    </Text>
                  </TouchableOpacity>
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
              <View style={styles.removeContainer}>
                <TouchableOpacity onPress={() => handleRemoveDivision(index)}>
                  <Feather name={"x"} size={20} color={"black"} />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        )
      )}
      {renderAddDivision()}
    </View>
  );
};

export default DivisionsForm;
