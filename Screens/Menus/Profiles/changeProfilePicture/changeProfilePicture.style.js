import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONTSIZE } from "../../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: wp(5.4),
  },

  uploadImageTextContainer: {
    marginTop: hp(4.78),
  },

  uploadImageText: {
    fontSize: FONTSIZE.large_2,
    fontFamily: "RobotoBold",
  },

  uploadImageDescriptionoTextContainer: {
    marginTop: hp(1),
  },

  uploadImageDescriptionText: {
    fontSize: FONTSIZE.button,
    fontFamily: "RobotoRegular",
  },

  imageContainer: {
    marginTop: hp(4),
    height: hp(25.25),
    borderRadius: 16.5,
    borderWidth: 1.1,
    borderStyle: "dashed",
    borderColor: "#aaaaaa",
    backgroundColor: "#d9d9d9",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  selectPhotoText: {
    fontSize: FONTSIZE.button,
    fontFamily: "RobotoRegular",
  },

  orContainer: {
    marginVertical: hp(2.25),
    flexDirection: "row",
    alignItems: "center",
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "black",
  },

  orText: {
    marginHorizontal: wp(2.8),
    fontSize: FONTSIZE.button,
    fontFamily: "RobotoRegular",
  },

  buttonContainer: {
    flexDirection: "row",
  },

  chooseUploadsContainer: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#c42414",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: hp(1.25),
  },

  chooseUploadsText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoBold",
    color: "#c42414",
  },

  changeProfileContainer: {
    flex: 1,
    borderRadius: 5,
    marginTop: hp(22.6),
    backgroundColor: "#c42414",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: hp(1.2),
  },

  changeProfileText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoBold",
    color: "#fff",
  },
});

export default styles;
