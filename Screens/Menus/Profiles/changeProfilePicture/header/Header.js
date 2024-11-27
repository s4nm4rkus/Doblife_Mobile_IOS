import { Text, View, TouchableOpacity, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import styles from "./header.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {
  setImage,
  setExistingImage,
  setNewImage,
} from "../../../../../features/profile/profileSlice";

const Header = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleGoBack = () => {
    dispatch(setImage(null));
    dispatch(setExistingImage({}));
    dispatch(setNewImage({}));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.arrowLeftContainer}>
          <TouchableOpacity
            style={styles.arrowLeftButton}
            onPress={() => handleGoBack()}
          >
            <FontAwesomeIcon icon={faArrowLeft} size={hp(3)} color="#c42414" />
          </TouchableOpacity>
          <Text style={styles.backText}>Back</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
