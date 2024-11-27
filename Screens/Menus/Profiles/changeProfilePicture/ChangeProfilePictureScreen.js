import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  Image,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import styles from "./changeProfilePicture.style";
import Header from "./header/Header";
import { useDispatch, useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthContext } from "../../../../context/AuthContext";
import LoadingOverlay from "../../../../components/loading/LoadingOverlay";
import {
  imageValue,
  newImageValue,
  existingImageValue,
  setImage,
  setExistingImage,
  setNewImage,
} from "../../../../features/profile/profileSlice";
import { updatePlayerProfilePic } from "../../../../api/profileApi";
import Toast from "react-native-toast-message";

const ChangeProfilePictureScreen = ({ navigation }) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { userToken } = useContext(AuthContext);
  const [isBusy, setBusy] = useState(false);
  const image = useSelector(imageValue);
  const newImage = useSelector(newImageValue);
  const existingImage = useSelector(existingImageValue);

  const { mutateAsync: updatePlayerProfilePicMutation } = useMutation({
    mutationFn: updatePlayerProfilePic,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });

  const handleSelectProfilePicture = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      dispatch(setExistingImage({}));
      dispatch(setNewImage(result.assets[0]));
      dispatch(setImage(result.assets[0].uri));
    }
  };

  const handleOpenChooseFromProfilePictureUploads = () => {
    navigation.navigate("ChooseFromProfilePictureUploads");
  };

  const handleChangeProfile = async () => {
    setLoading(true);
    const formData = new FormData();

    if (JSON.stringify(newImage) !== "{}") {
      formData.append("image", {
        uri: newImage.uri,
        type: newImage.mimeType,
        name: newImage.fileName,
        contentType: newImage.mimeType,
      });
    }

    if (JSON.stringify(existingImage) !== "{}") {
      formData.append("profile_pic_id", existingImage.id);
    }

    try {
      await updatePlayerProfilePicMutation({ userToken, formData });
      setLoading(false);
      dispatch(setImage(null));
      dispatch(setExistingImage({}));
      dispatch(setNewImage({}));
      navigation.goBack();
    } catch (error) {
      setLoading(false);

      Toast.show({
        type: "customErrorToast",
        text1: "Oh snap!",
        text2: error.response.data.message,
      });
      console.log(error.response);
      console.error("Axios Error:", error);
    }
  };

  return (
    <>
      {isBusy ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            zIndex: 20,
          }}
        >
          <ActivityIndicator size="large" color="#9b001c" />
        </View>
      ) : (
        <View style={styles.container}>
          <Header navigation={navigation} />
          <View style={styles.uploadImageTextContainer}>
            <Text style={styles.uploadImageText}>Upload Image</Text>
          </View>
          <View style={styles.uploadImageDescriptionoTextContainer}>
            <Text style={styles.uploadImageDescriptionText}>
              Upload images by selecting a file from
            </Text>
            <Text style={styles.uploadImageDescriptionText}>your device.</Text>
          </View>
          <TouchableOpacity onPress={() => handleSelectProfilePicture()}>
            <View style={styles.imageContainer}>
              {image ? (
                <Image
                  source={{ uri: image }}
                  style={styles.image}
                  resizeMode="cover"
                />
              ) : (
                <Text style={styles.selectPhotoText}>
                  Select photo from device
                </Text>
              )}
            </View>
          </TouchableOpacity>
          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.chooseUploadsContainer}
              onPress={() => handleOpenChooseFromProfilePictureUploads()}
            >
              <Text style={styles.chooseUploadsText}>Choose from Uploads</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.changeProfileContainer}
              onPress={() => handleChangeProfile()}
            >
              <Text style={styles.changeProfileText}>Change Profile</Text>
            </TouchableOpacity>
          </View>
          <LoadingOverlay visible={loading} />
        </View>
      )}
    </>
  );
};

export default ChangeProfilePictureScreen;
