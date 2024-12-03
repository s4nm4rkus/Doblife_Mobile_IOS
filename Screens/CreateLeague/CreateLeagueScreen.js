import {
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useState, useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Iconify } from "react-native-iconify";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import styles from "./createLeague.style";
import Header from "./header/Header";
import { COLORS } from "../../constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-gesture-handler";
import ModalComponent from "./modal/ModalComponent";
import { AuthContext } from "../../context/AuthContext";
import { createTeam } from "../../api/teamApi";
import { Dropdown } from "react-native-element-dropdown";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  acronymValue,
  barangayValue,
  cityValue,
  countryValue,
  dayValue,
  descriptionValue,
  divisionDatasValue,
  leagueNameValue,
  leagueTypeValue,
  monthValue,
  provinceValue,
  resetAll,
  seasonDescriptionValue,
  setCountry,
  setStep,
  stepValue,
  yearValue,
} from "../../features/createLeague/createLeagueSlice";
import { useDispatch, useSelector } from "react-redux";
import LeagueForm from "./leagueForm/LeagueForm";
import SeasonDetailsForm from "./seasonDetailsForm/SeasonDetailsForm";
import DivisionsForm from "./divisionsForm/DivisionsForm";
import ConfirmHeader from "./confirmHeader/ConfirmHeader";
import DoneHeader from "./doneHeader/DoneHeader";
import ConfirmLeague from "./confirmLeague/ConfirmLeague";
import DoneCreateLeague from "./doneCreateLeague/DoneCreateLeague";
import axios from "axios";
import { BASE_URL } from "../../utils/config";

const CreateLeagueScreen = ({ route, navigation }) => {
  const queryClient = useQueryClient();
  const profile = queryClient.getQueryData(["profile"]);
  const dispatch = useDispatch();
  const leagueName = useSelector(leagueNameValue);
  const acronym = useSelector(acronymValue);
  const description = useSelector(descriptionValue);
  const leagueType = useSelector(leagueTypeValue);
  const seasonDescription = useSelector(seasonDescriptionValue);
  const country = useSelector(countryValue);
  const province = useSelector(provinceValue);
  const city = useSelector(cityValue);
  const barangay = useSelector(barangayValue);
  const day = useSelector(dayValue);
  const year = useSelector(yearValue);
  const month = useSelector(monthValue);
  const datas = useSelector(divisionDatasValue);
  const { userToken } = useContext(AuthContext);
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [showCancelModal, setShowCancelModal] = useState(false);
  const step = useSelector(stepValue);

  const handleNext = () => {
    switch (step) {
      case 0:
        if (Object.keys(country).length == 0) {
          dispatch(
            setCountry({
              value: 11,
              label: "Philippines",
            })
          );
        }
        dispatch(setStep(1));
        break;
      case 1:
        dispatch(setStep(2));
        break;
      case 2:
        dispatch(setStep(3));
        break;
      case 3:
        dispatch(setStep(4));
        break;
      default:
        break;
    }
    // let errors = {};

    // if (!leagueName) errors.league_name = "League Name is required";
    // if (!acronym) errors.acronym = "Acronym is required";

    // setErrors(errors);

    // if (Object.keys(errors).length !== 0) return;
    // dispatch(setStep(1));
  };

  const handleDisabled = () => {
    if (step == 0) {
      if (leagueName && acronym && leagueType) {
        return false;
      }

      return true;
    }

    if (step == 1) {
      if (seasonDescription && day && year && month) {
        return false;
      }

      return true;
    }

    if (step == 2) {
      const divisionNameNotNull = checkDivisionNameNotNull();

      if (divisionNameNotNull) {
        return false;
      }

      return true;
    }

    return false;
    // let errors = {};

    // if (!leagueName) errors.league_name = "League Name is required";
    // if (!acronym) errors.acronym = "Acronym is required";

    // setErrors(errors);

    // if (Object.keys(errors).length !== 0) return;
    // dispatch(setStep(1));
  };

  const checkDivisionNameNotNull = () => {
    for (let i = 0; i < datas.length; i++) {
      if (datas[i].division_name !== null) {
        return true;
      }
    }
    return false;
  };

  const handleDone = () => {
    navigation.navigate("Main");
    dispatch(resetAll());
  };

  const handleConfirmDone = async () => {
    try {
      const response = await axios.post(
        BASE_URL + "/leagues",
        {
          league_name: leagueName,
          league_description: description,
          league_acronym: acronym,
          league_type_id: leagueType.value,
          season_description: seasonDescription,
          opening_date: `${year}-${month}-${day}`,
          location_brgy: barangay?.value,
          location_city: city?.value,
          location_province: province?.value,
          location_country: country?.value,
          division_data: JSON.stringify(datas),
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      dispatch(setStep(4));
      return;
    } catch (error) {
      console.log("Error", error.response.data);
      throw error;
    }
  };

  const removeLeagueNameError = () => {
    let errorsObj = errors;

    if (errorsObj["league_name"] === undefined) return;

    delete errorsObj.league_name;

    setErrors((error) => {
      const { league_name, ...errors } = error;

      return errors;
    });
  };

  const removeAcronymError = () => {
    let errorsObj = errors;

    if (errorsObj["acronym"] === undefined) return;

    delete errorsObj.acronym;

    setErrors((error) => {
      const { acronym, ...errors } = error;

      return errors;
    });
  };

  const renderItems = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  const handleBack = () => {
    switch (step) {
      case 0:
        navigation.navigate("Main");
        break;
      case 1:
        if (!country) {
          dispatch(setCountry(11));
        }
        dispatch(setStep(0));
        break;
      case 2:
        dispatch(setStep(1));
        break;
      case 3:
        dispatch(setStep(2));
        break;
      case 4:
        dispatch(setStep(3));
        break;

      default:
        break;
    }
  };

  const renderHeader = () => {
    switch (step) {
      case 3:
        return <ConfirmHeader></ConfirmHeader>;
      case 4:
        return <DoneHeader></DoneHeader>;
      default:
        return <Header navigation={navigation} />;
    }
  };

  const renderForm = () => {
    switch (step) {
      case 0:
        return <LeagueForm></LeagueForm>;
      case 1:
        return <SeasonDetailsForm></SeasonDetailsForm>;
      case 2:
        return <DivisionsForm></DivisionsForm>;
      case 3:
        return <ConfirmLeague></ConfirmLeague>;
      case 4:
        return <DoneCreateLeague></DoneCreateLeague>;
      default:
        break;
    }
  };

  const renderButton = () => {
    switch (step) {
      case 3:
        return (
          <View style={styles.buttonsContainer}>
            <View style={styles.backButtonContainer}>
              <TouchableOpacity
                style={[styles.modalButton, styles.backButton]}
                onPress={() => handleBack()}
              >
                <Text style={styles.backButtonText}>
                  {step == 0 ? "Cancel" : "Back"}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.submitButtonContainer}>
              <TouchableOpacity
                style={[styles.modalButton, styles.yesButton]}
                onPress={() => handleConfirmDone()}
              >
                <Text style={styles.buttonText}>DONE</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      case 4:
        return (
          <View style={styles.buttonsContainer}>
            <View style={styles.submitButtonContainer}>
              <TouchableOpacity
                style={[styles.modalButton, styles.yesButton]}
                onPress={() => handleDone()}
              >
                <Text style={styles.buttonText}>DONE</Text>
              </TouchableOpacity>
            </View>
          </View>
        );

      default:
        return (
          <View style={styles.buttonsContainer}>
            <View style={styles.backButtonContainer}>
              <TouchableOpacity
                style={[styles.modalButton, styles.backButton]}
                onPress={() => handleBack()}
              >
                <Text style={styles.backButtonText}>
                  {step == 0 ? "Cancel" : "Back"}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.submitButtonContainer}>
              <TouchableOpacity
                style={[styles.modalButton, styles.yesButton]}
                onPress={() => handleNext()}
                disabled={handleDisabled()}
              >
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={0}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container(step)}>
          <ScrollView>
            <View onStartShouldSetResponder={() => true}>
              {renderHeader()}
              {renderForm()}
              {renderButton()}
            </View>
          </ScrollView>
          <ModalComponent
            isVisible={showCancelModal}
            isCanceled={() => setShowCancelModal(false)}
            handleContinue={() => console.log("test")}
            data={data}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default CreateLeagueScreen;
