import { View, Text } from "react-native";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import LottieView from "lottie-react-native";
import styles from "./error.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const toastConfig = {
  customErrorToast: ({ text1, text2 }) => (
    <View style={styles.toastContainer}>
      <View style={styles.lottieContainer}>
        <LottieView
          autoPlay
          style={styles.lottieStyle}
          loop={true}
          source={require("../../../../assets/lottie/error.json")}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.toastHeaderText}>{text1}</Text>
        <Text style={styles.toastMessageText}>{text2}</Text>
      </View>
    </View>
  ),

  customToast: ({ text1 }) => (
    <View style={styles.customToastContainer}>
      <FontAwesomeIcon icon={faCircleCheck} size={hp(5)} color="#c42414" />
      <Text style={styles.text1}>{text1}</Text>
    </View>
  ),

  playerBanToast: ({ text1, props }) => (
    <View style={styles.customToastContainer}>
      <FontAwesomeIcon icon={faCircleCheck} size={hp(5)} color="#c42414" />
      <Text style={styles.text1}>
        <Text style={styles.name}>{props.name}</Text>
        {text1}
      </Text>
    </View>
  ),
};

const Error = () => {
  return (
    <>
      <Toast config={toastConfig} />
    </>
  );
};

export default Error;
