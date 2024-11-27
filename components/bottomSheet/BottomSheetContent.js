import { View, TouchableOpacity, Text } from "react-native";

import styles from "./bottomSheet.style";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { faBasketball, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const BottomSheetContent = ({ navigation, bottomSheetModalRef }) => {
  const handleJoinALeague = () => {
    bottomSheetModalRef.current?.dismiss();
    navigation.navigate("JoinALeague");
  };

  const handleCreateALeague = () => {
    bottomSheetModalRef.current?.dismiss();
    navigation.navigate("CreateLeague");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => handleCreateALeague()}
      >
        <FontAwesomeIcon icon={faBasketball} size={hp(3)} />
        <Text style={styles.buttonText}>Create League</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => handleJoinALeague()}
      >
        <FontAwesomeIcon icon={faPeopleGroup} size={hp(3)} />
        <Text style={styles.buttonText}>Join League</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomSheetContent;
