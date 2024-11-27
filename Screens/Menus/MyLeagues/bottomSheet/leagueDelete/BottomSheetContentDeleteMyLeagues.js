import { View, TouchableOpacity, Text } from "react-native";
import styles from "./bottomSheetContentDeleteMyLeagues.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const BottomSheetContentDeleteMyLeagues = ({
  bottomSheetModalRef,
  deleteLeague,
}) => {
  return (
    <BottomSheetModal ref={bottomSheetModalRef} snapPoints={["15%", "100%"]}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonStyle} onPress={deleteLeague}>
          <View style={styles.textContainer}>
            <FontAwesomeIcon
              icon={faXmark}
              size={hp(3.15)}
              color="red"
              style={styles.icon}
            />
            <View style={styles.textDescriptionContainer}>
              <Text style={styles.buttonText}>Delete League</Text>
              <Text style={styles.textDescription}>
                By clicking 'X', you will permanently delete league name and all
                its associated data. This action cannot be undone.
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  );
};

export default BottomSheetContentDeleteMyLeagues;
