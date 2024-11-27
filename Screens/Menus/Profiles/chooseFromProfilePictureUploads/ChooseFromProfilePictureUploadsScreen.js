import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  Image,
  FlatList,
} from "react-native";
import React, { useCallback, useContext, useEffect, useState } from "react";
import styles from "./chooseFromProfilePictureUploads.style";
import Header from "./header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { AuthContext } from "../../../../context/AuthContext";
import {
  setExistingImage,
  setImage,
  setNewImage,
} from "../../../../features/profile/profileSlice";
import { fetchPlayerProfilePics } from "../../../../api/profileApi";

const ChooseFromProfilePictureUploadsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { userToken } = useContext(AuthContext);
  const [isBusy, setBusy] = useState(false);
  const [images, setImages] = useState([]);

  const { mutateAsync: fetchTeamProfilePicsMutation } = useMutation({
    mutationFn: fetchPlayerProfilePics,
    onSuccess: (data) => {
      const rows = [];
      for (let i = 0; i < data.length; i += 4) {
        rows.push(data.slice(i, i + 4));
      }
      setImages(rows);
    },
  });

  const handleFetchTeamProfilePics = async () => {
    const params = {};

    try {
      await fetchTeamProfilePicsMutation({ params, userToken });
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  const handleSelectExistingImage = (item) => {
    dispatch(setNewImage({}));
    dispatch(setExistingImage(item));
    dispatch(setImage(item.image));
    navigation.goBack();
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.teamLogoContainer}
      onPress={() => handleSelectExistingImage(item)}
    >
      <Image
        source={{ uri: item?.image }}
        resizeMode="contain"
        style={styles.teamImage}
      />
    </TouchableOpacity>
  );

  const renderRow = ({ item }) => (
    <View style={styles.row}>
      {item.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
          {renderItem({ item })}
        </View>
      ))}
    </View>
  );

  useFocusEffect(
    useCallback(() => {
      handleFetchTeamProfilePics();
    }, [])
  );

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
          <View style={styles.imagesTextContainer}>
            <Text style={styles.imagesText}>Images</Text>
          </View>
          <FlatList
            data={images}
            renderItem={renderRow}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.scrollView}
          />
        </View>
      )}
    </>
  );
};

export default ChooseFromProfilePictureUploadsScreen;
