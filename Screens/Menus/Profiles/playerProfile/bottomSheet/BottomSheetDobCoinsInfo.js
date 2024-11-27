import { View, TouchableOpacity, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import styles from "./bottomSheetDobCoinsInfo.style";
import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const BottomSheetDobCoinsInfo = ({ bottomSheetModalRef }) => {
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
      snapPoints={["36%"]}
      backdropComponent={renderBackdrop}
    >
      <View style={styles.container}>
        <View style={styles.dobCoinsContainer}>
          <View style={styles.starContainer}>
            <FontAwesomeIcon icon={faStar} color="#f18805" size={hp(3.5)} />
          </View>
          <Text style={styles.dobCoinsText}>Dob Coins</Text>
        </View>
        <View style={styles.dobCoinsQuestionContainer}>
          <Text style={styles.dobCoinsQuestionText}>What is Dobcoins?</Text>
        </View>
        <View style={styles.dobCoinsDescriptionContainer}>
          <Text style={styles.dobCoinsDescriptionText}>
            <Text style={styles.dobCoinsQuestionText}>Dobcoins</Text> are a form
            of in-app currency that users can earn by participating in games.
            These DobCoins can then be redeemed for various rewards, upgrades,
            or exclusive offers within the app. The availability and nature of
            these services may change without prior notice.
          </Text>
        </View>
      </View>
    </BottomSheetModal>
  );
};

export default BottomSheetDobCoinsInfo;
