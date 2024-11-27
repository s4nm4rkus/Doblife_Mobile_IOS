import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./playerProfile.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleExclamation, faStar } from "@fortawesome/free-solid-svg-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useContext, useEffect, useRef, useState } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import BottomSheetDobCoinsInfo from "./bottomSheet/BottomSheetDobCoinsInfo";
import { useMutation } from "@tanstack/react-query";
import { fetchPlayerDobcoins } from "../../../../api/profileApi";
import { AuthContext } from "../../../../context/AuthContext";
import { setIsChangeProfileImageModalVisible } from "../../../../features/profile/profileSlice";
import { useDispatch } from "react-redux";

const PlayerProfile = ({ name, navigation, image }) => {
  const dispatch = useDispatch();
  const [dobcoins, setDobcoins] = useState(0);
  const { userToken } = useContext(AuthContext);

  const bottomSheetModalRef = useRef(BottomSheetModal);

  const { mutateAsync: fetchPlayerDobcoinsMutation } = useMutation({
    mutationFn: fetchPlayerDobcoins,
    onSuccess: (data) => {
      // setDobcoins(data);
    },
  });

  const handleFetchPlayerDobcoins = async () => {
    const params = {};

    try {
      await fetchPlayerDobcoinsMutation({ params, userToken });
    } catch (e) {}
  };

  const handleOpenBottomSheet = () => {
    bottomSheetModalRef.current?.present();
  };

  const goToDobCoinsPage = () => {
    navigation.navigate("DobCoins");
  };

  const handleOpenChangeProfileImageModal = () => {
    dispatch(setIsChangeProfileImageModalVisible(true));
  };

  useEffect(() => {
    handleFetchPlayerDobcoins();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleOpenChangeProfileImageModal()}>
        {image ? (
          <Image
            source={{ uri: image }}
            resizeMode="contain"
            style={styles.teamImage}
          />
        ) : (
          <Image
            source={require("../../../../assets/playerPlaceholders/player-placeholder-02.png")}
            resizeMode="contain"
            style={styles.teamImage}
          />
        )}
      </TouchableOpacity>
      <View style={styles.nameAndPointsContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <View style={styles.pointsContainer}>
          <TouchableOpacity
            style={styles.outerPoints}
            onPress={() => goToDobCoinsPage()}
          >
            <View style={styles.innerPoints}>
              <FontAwesomeIcon icon={faStar} color="#f18805" size={hp(1.4)} />
            </View>
            <Text style={styles.pointsText}>{dobcoins}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.infoContainer}
            onPress={() => handleOpenBottomSheet()}
          >
            <FontAwesomeIcon
              icon={faCircleExclamation}
              color="white"
              size={hp(2.1)}
            />
          </TouchableOpacity>
        </View>
      </View>
      <BottomSheetDobCoinsInfo bottomSheetModalRef={bottomSheetModalRef} />
    </View>
  );
};

export default PlayerProfile;
