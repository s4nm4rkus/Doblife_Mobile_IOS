import {
  Image,
  Keyboard,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useState, useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// import { Iconify } from "react-native-iconify";

import { IconButton } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import styles from "./createTeam.style";
import Header from "./header/Header";
import { COLORS } from "../../constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-gesture-handler";
import ModalComponent from "./modal/ModalComponent";
import { AuthContext } from "../../context/AuthContext";
import { createTeam } from "../../api/teamApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as ImagePicker from "expo-image-picker";
import LoadingOverlay from "../../components/loading/LoadingOverlay";
import Toast from "react-native-toast-message";
import { setSelectedTeams } from "../../features/selectTeam/selectTeamSlice";
import { useDispatch, useSelector } from "react-redux";
import { formValue, setFormData } from "../../features/team/createTeamSlice";
import { setIsJoin } from "../../features/league/leagueSlice";

const CreateTeamScreen = ({ route, navigation }) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { userToken, userProfile } = useContext(AuthContext);
  const [teamName, setTeamName] = useState(null);
  const [acronym, setAcronym] = useState(null);
  const [logo, setLogo] = useState(null);
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [image, setImage] = useState(null);
  const [imageObject, setImageObject] = useState(null);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const formData = useSelector(formValue);

  const handleContinue = () => {
    let errors = {};

    if (!teamName) errors.team_name = "Team Name is required";
    if (!acronym) errors.acronym = "Acronym is required";

    setErrors(errors);

    if (Object.keys(errors).length !== 0) return;

    setData({ team_name: teamName, acronym: acronym });

    if (route.params != undefined) {
      if (imageObject != undefined) {
        dispatch(
          setFormData({
            teamName: teamName,
            acronym: acronym,
            profile_id: formData.profile_id,
            uri: imageObject.uri,
            type: imageObject.mimeType,
            name: imageObject.fileName,
            contentType: imageObject.mimeType,
            league_name: formData.league_name,
            league_acronym: formData.league_acronym,
            division_name: formData.division_name,
            division_id: formData.division_id,
            division_opening_date: formData.division_opening_date,
          })
        );
      } else {
        dispatch(
          setFormData({
            teamName: teamName,
            acronym: acronym,
            profile_id: formData.profile_id,
            league_name: formData.league_name,
            league_acronym: formData.league_acronym,
            division_name: formData.division_name,
            division_id: formData.division_id,
            division_opening_date: formData.division_opening_date,
          })
        );
      }
      navigation.navigate("ConfirmCreateTeam");
      return;
    }

    if (imageObject) {
      dispatch(
        setFormData({
          teamName,
          acronym,
          profile_id: userProfile.id,
          uri: imageObject.uri,
          type: imageObject.mimeType,
          name: imageObject.fileName,
          contentType: imageObject.mimeType,
        })
      );
    } else {
      dispatch(
        setFormData({
          teamName,
          acronym,
          profile_id: userProfile.id,
        })
      );
    }

    navigation.navigate({
      name: "SelectLeague",
      params: { is_join: true },
      merge: true,
    });
  };

  const removeTeamNameError = () => {
    let errorsObj = errors;

    if (errorsObj["team_name"] === undefined) return;

    delete errorsObj.team_name;

    setErrors((error) => {
      const { team_name, ...errors } = error;

      return errors;
    });
  };

  const handleSelectTeamLogo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImageObject(result.assets[0]);
      setImage(result.assets[0].uri);
    }
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

  const { mutateAsync: createTeamMutation } = useMutation({
    mutationFn: createTeam,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["teams"] });
      dispatch(setSelectedTeams(data));
      setShowCancelModal(false);
      setLoading(false);
      navigation.navigate("SelectLeague");
    },
  });

  const handleConfirm = async () => {
    const formData = new FormData();
    // setLoading(true);
    if (imageObject) {
      formData.append("image", {
        uri: imageObject.uri,
        type: imageObject.mimeType,
        name: imageObject.fileName,
        contentType: imageObject.mimeType,
      });
    }

    formData.append("team_name", teamName);
    formData.append("acronym", acronym);
    formData.append("profile_id", userProfile.id);

    dispatch(setFormData(formData));

    // try {
    //   await createTeamMutation({userToken, formData});
    // } catch (error) {
    //   console.log(error);
    //   setLoading(false);

    //   let errors = {};

    //   if (error.response.data.errors.acronym) {
    //     errors.acronym = error.response.data.errors.acronym;
    //   }

    //   if (error.response.data.errors.team_name) {
    //     errors.team_name = error.response.data.errors.team_name;
    //   }

    //   setErrors(errors);
    //   setShowCancelModal(false);

    //   if (Object.keys(errors).length === 0) {
    //     Toast.show({
    //       type: 'customErrorToast',
    //       text1: 'Oh snap!',
    //       text2: error.response.data.message
    //     });
    //   }
    // }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
          <View onStartShouldSetResponder={() => true}>
            <Header navigation={navigation} />
            <View
              style={styles.inputsContainer}
              onStartShouldSetResponder={() => true}
            >
              <View style={styles.teamNameInputContainer}>
                <Text style={styles.inputLabelText}>Team Name *</Text>
                <View style={styles.textInputContainer}>
                  <View style={styles.inputWrapper}>
                    <TextInput
                      style={styles.inInput}
                      value={teamName}
                      onChangeText={(text) => setTeamName(text)}
                      onFocus={() => removeTeamNameError()}
                    />
                  </View>
                </View>
                {errors.team_name ? (
                  <Text style={styles.errorText}>{errors.team_name}</Text>
                ) : null}
              </View>
              <View style={styles.acronymInputContainer}>
                <Text style={styles.inputLabelText}>Acronym *</Text>
                <View style={styles.textInputContainer}>
                  <View style={styles.inputWrapper}>
                    <TextInput
                      style={styles.inInput}
                      value={acronym}
                      onChangeText={(text) => setAcronym(text)}
                      onFocus={() => removeAcronymError()}
                    />
                  </View>
                </View>
                {errors.acronym ? (
                  <Text style={styles.errorText}>{errors.acronym}</Text>
                ) : null}
              </View>
              <View style={styles.teamLogoContainer}>
                <Text style={styles.teamLogoText}>Team Logo</Text>
                <TouchableOpacity onPress={() => handleSelectTeamLogo()}>
                  <View style={styles.cardContainer}>
                    {image ? (
                      <Image
                        source={{ uri: image }}
                        style={styles.image}
                        resizeMode="cover"
                      />
                    ) : (
                      <IconButton
                        icon="image-outline"
                        size={hp(5)}
                        iconColor="#cccccc"
                      />
                    )}
                  </View>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => handleContinue()}
                style={styles.submitButtonContainer}
              >
                <LinearGradient
                  colors={["#ca0024", "#9b001c", "#33020b"]}
                  locations={[0, 0.5, 1]}
                  style={[styles.modalButton, styles.submitButton]}
                >
                  <Text style={styles.submitButtonText}>Continue</Text>
                </LinearGradient>
              </TouchableOpacity>
              {/* <View style={styles.submitButtonContainer}>
              
            </View> */}
              <View style={styles.backButtonContainer}>
                <TouchableOpacity
                  style={[styles.modalButton, styles.backButton]}
                  onPress={() => navigation.navigate("JoinALeague")}
                >
                  <Text style={styles.backButtonText}>BACK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
        <ModalComponent
          isVisible={showCancelModal}
          isCanceled={() => setShowCancelModal(false)}
          handleContinue={handleConfirm}
          data={data}
        />
        <LoadingOverlay visible={loading} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreateTeamScreen;
