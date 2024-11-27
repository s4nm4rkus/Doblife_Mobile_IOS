import { View, TouchableOpacity, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import styles from "./bottomSheetDeleteProfile.style";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback } from "react";
// import { faCopy, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { setIsDeleteProfileModalVisible } from "../../../../features/profile/profileSlice";

const BottomSheetDeleteProfile = ({ bottomSheetModalRef, navigation }) => {
  const dispatch = useDispatch();

  const handleOpenDeleteProfileModal = () => {
    bottomSheetModalRef.current?.dismiss();
    dispatch(setIsDeleteProfileModalVisible(true));
  };

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={1}
        animatedIndex={{
          value: 1,
        }}
      />
    ),
    []
  );

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      snapPoints={["11%"]}
      backdropComponent={renderBackdrop}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => handleOpenDeleteProfileModal()}
        >
          <View style={styles.optionWrapper}>
            <FontAwesomeIcon icon={faXmark} size={hp(3)} />
            <View>
              <Text style={styles.deleteProfileText}>Delete Profile</Text>
              <Text style={styles.deleteProfileDescriptionText}>
                This fill permanently delete your profile
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  );
};

export default BottomSheetDeleteProfile;
