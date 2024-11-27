import { View, ActivityIndicator } from "react-native";
import React, { useContext, useRef, useState } from "react";
import styles from "./profiles.style";
import PlayerContent from "./tab/player/PlayerContent";
import Header from "./header/Header";
import PlayerProfile from "./playerProfile/PlayerProfile";
import { useQueryClient } from "@tanstack/react-query";
import { useFocusEffect } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useProfileData } from "../../../hooks/useProfileData";
import { AuthContext } from "../../../context/AuthContext";
import ChangeProfileImageModal from "./modal/changeProfileImage/ChangeProfileImageModal";
import { useDispatch, useSelector } from "react-redux";
import {
  isChangeProfileImageModalVisibleValue,
  isDeleteProfileModalVisibleValue,
  setIsChangeProfileImageModalVisible,
  setIsDeleteProfileModalVisible,
} from "../../../features/profile/profileSlice";
import BottomSheetDeleteProfile from "./bottomSheet/BottomSheetDeleteProfile";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import DeleteProfileModal from "../AccountSettings/modal/DeleteProfileModal";
import { capitalize } from "../../../utils/helpers";

const ProfilesScreen = ({ route, navigation }) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { userToken } = useContext(AuthContext);
  const [isBusy, setBusy] = useState(false);
  const [routeState, setRouteState] = useState({});
  const bottomSheetModalRef = useRef(BottomSheetModal);
  const isChangeProfileImageModalVisible = useSelector(
    isChangeProfileImageModalVisibleValue
  );
  const isDeleteProfileModalVisible = useSelector(
    isDeleteProfileModalVisibleValue
  );

  const {
    data: profile,
    isLoading,
    isError,
    error,
  } = useProfileData(userToken);

  React.useEffect(() => {
    if (route.params) {
      setRouteState({ ...route.params });
    }
  }, [route.params]);

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
          <LinearGradient
            colors={["#c42414", "#7c0b00"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.headerContainer}
          >
            <Header
              navigation={navigation}
              bottomSheetModalRef={bottomSheetModalRef}
            />
            <PlayerProfile
              image={profile?.default_profile_pic?.image}
              name={`${capitalize(profile?.lastname)}, ${capitalize(
                profile?.firstname
              )}`}
              navigation={navigation}
            />
          </LinearGradient>
          <PlayerContent navigation={navigation} routeState={routeState} />
          <ChangeProfileImageModal
            image={profile?.default_profile_pic?.image}
            navigation={navigation}
            isVisible={isChangeProfileImageModalVisible}
            isCanceled={() =>
              dispatch(setIsChangeProfileImageModalVisible(false))
            }
          />
          <BottomSheetDeleteProfile
            navigation={navigation}
            bottomSheetModalRef={bottomSheetModalRef}
          />
          <DeleteProfileModal
            isVisible={isDeleteProfileModalVisible}
            isCanceled={() => dispatch(setIsDeleteProfileModalVisible(false))}
            navigation={navigation}
          />
        </View>
      )}
    </>
  );
};

export default ProfilesScreen;
