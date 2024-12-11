import { StatusBar, Text, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./confirmCreateTeam.style";
import Header from "./header/Header";
import { formValue, setFormData } from "../../features/team/createTeamSlice";
import { useSelector } from "react-redux";
import moment from "moment/moment";
import Toast from "react-native-toast-message";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTeam } from "../../api/teamApi";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const ConfirmCreateTeamScreen = ({ route, navigation }) => {
  const queryClient = useQueryClient();
  const data = useSelector(formValue);
  const [errors, setErrors] = useState({});
  const { userToken } = useContext(AuthContext);

  const { mutateAsync: createTeamMutation } = useMutation({
    mutationFn: createTeam,
    onSuccess: (data) => {},
  });

  const handleEdit = () => {
    navigation.navigate({
      name: "CreateTeam",
      params: { is_edit: true },
      merge: true,
    });
  };

  const handleChange = () => {
    navigation.navigate({
      name: "SelectLeague",
      params: { is_join: true },
      merge: true,
    });
  };

  const getMimeType = (uri) => {
    const extension = uri.split(".").pop().toLowerCase();
    switch (extension) {
      case "jpg":
      case "jpeg":
        return "image/jpeg";
      case "png":
        return "image/png";
      default:
        return null;
    }
  };

  // const handleConfirm = async () => {
  //   const formData = new FormData();
  //   console.log("Form Data Inputs:", data);

  //   if (data.contentType != undefined) {
  //     formData.append("image", {
  //       uri: data.uri,
  //       type: data.mimeType,
  //       name: data.fileName || "image.jpg",
  //       contentType: data.mimeType,
  //     });
  //     console.log("Image MIME Type:", data.mimeType);
  //   }

  //   formData.append("team_name", data.teamName);
  //   formData.append("acronym", data.acronym);
  //   formData.append("profile_id", data.profile_id);
  //   formData.append("league_season_category_id", data.division_id);

  //   try {
  //     await createTeamMutation({ userToken, formData });
  //     queryClient.invalidateQueries({ queryKey: ["teams"] });
  //     navigation.navigate("BallFeed");
  //     Toast.show({
  //       type: "customToast",
  //       text1: `Successfully created a team. Wait for your team to be accepted.`,
  //     });
  //   } catch (error) {
  //     console.error("Error:", error.response?.data || error.message);

  //     let errors = {};

  //     if (error.response.data.errors.acronym) {
  //       errors.acronym = error.response.data.errors.acronym;
  //     }

  //     if (error.response.data.errors.team_name) {
  //       errors.team_name = error.response.data.errors.team_name;
  //     }

  //     setErrors(errors);

  //     if (Object.keys(errors).length === 0) {
  //       Toast.show({
  //         type: "customErrorToast",
  //         text1: "Oh snap!",
  //         text2: error.response.data.message,
  //       });
  //     }
  //   }
  // };

  const handleConfirm = async () => {
    const formData = new FormData();
    console.log("Form Data Inputs:", data);

    const mimeType = data.mimeType || getMimeType(data.uri);

    if (data.uri && mimeType) {
      formData.append("image", {
        uri: data.uri,
        type: mimeType,
        name: data.fileName || "image.jpg",
      });
    } else {
      console.error("Error: Invalid URI or MIME type.");
      return; // Exit early if the image is invalid
    }

    formData.append("team_name", data.teamName);
    formData.append("acronym", data.acronym);
    formData.append("profile_id", data.profile_id);
    formData.append("league_season_category_id", data.division_id);

    // Debugging FormData
    for (let pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    try {
      await createTeamMutation({ userToken, formData });
      queryClient.invalidateQueries({ queryKey: ["teams"] });
      navigation.navigate("BallFeed");
      Toast.show({
        type: "customToast",
        text1:
          "Successfully created a team. Wait for your team to be accepted.",
      });
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);

      let errors = {};

      if (error.response?.data?.errors?.acronym) {
        errors.acronym = error.response.data.errors.acronym;
      }

      if (error.response?.data?.errors?.team_name) {
        errors.team_name = error.response.data.errors.team_name;
      }

      setErrors(errors);

      if (Object.keys(errors).length === 0) {
        Toast.show({
          type: "customErrorToast",
          text1: "Oh snap!",
          text2: error.response?.data?.message || "Something went wrong.",
        });
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" />
      <Header navigation={navigation} />
      <View style={styles.yourTeamContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Your Team</Text>
          <TouchableOpacity onPress={() => handleEdit()}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.yourTeamCardContainer}>
          <View style={styles.yourTeamCardBodyContainer}>
            <View style={styles.teamLogoContainer}>
              {data.uri ? (
                <Image
                  source={{ uri: data.uri }}
                  style={styles.teamLogo}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={require("../../assets/teamPlaceholders/team-placeholder-04.png")}
                  style={styles.teamLogo}
                  resizeMode="contain"
                />
              )}
            </View>
            <View style={styles.teamDetailsContainer}>
              <Text style={styles.teamNameText}>{data.teamName}</Text>
              <Text style={styles.teamAcronymText}>{data.acronym}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.leagueSelectedContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>League Selected</Text>
          <TouchableOpacity onPress={() => handleChange()}>
            <Text style={styles.buttonText}>Change</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.leagueSelectedCardContainer}>
          <View style={styles.leagueSelectedCardBodyContainer}>
            <View style={styles.leagueDetailsContainer}>
              <Text style={styles.leagueAcronymText}>
                {data.league_acronym}
              </Text>
              <Text style={styles.leagueNameText}>{data.league_name}</Text>
            </View>
            <View style={styles.leagueDivisionDateContainer}>
              <View style={styles.divisionContainer}>
                <Text style={styles.divisionNameText}>
                  {data.division_name}
                </Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Text style={styles.switchButtonText}>Switch</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.dateContainer}>
                <Text style={styles.dateText}>
                  {moment(data.opening_date).format("MMM DD, YYYY")}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.confirmContainer}>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => handleConfirm()}
        >
          <Text style={styles.confirmText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmCreateTeamScreen;
