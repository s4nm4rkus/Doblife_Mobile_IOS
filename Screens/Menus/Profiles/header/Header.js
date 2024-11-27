import { Text, View, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../../../../constants/theme";
import styles from "./header.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowLeft,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { setIsDeleteProfileModalVisible } from "../../../../features/profile/profileSlice";

const Header = ({ navigation, bottomSheetModalRef }) => {
  const handleOpenBottomSheetOptions = () => {
    bottomSheetModalRef.current?.present();
  };

  return (
    <View style={styles.container}>
      <View style={styles.arrowLeftContainer}>
        <TouchableOpacity
          style={styles.arrowLeftButton}
          onPress={() => navigation.navigate("Menu")}
        >
          <FontAwesomeIcon icon={faArrowLeft} size={hp(2.8)} color="white" />
        </TouchableOpacity>
        <Text style={styles.backText}>Back</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.moreVerticalButton}
          onPress={() => handleOpenBottomSheetOptions()}
        >
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            size={hp(2.65)}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
