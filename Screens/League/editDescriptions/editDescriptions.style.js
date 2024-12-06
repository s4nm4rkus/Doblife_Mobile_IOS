import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONTSIZE } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  inputContainer: {
    marginTop: hp(2.2),
  },

  inputLabelText: {
    fontSize: FONTSIZE.description,
    fontFamily: "RobotoCondensed",
    marginLeft: wp(7.1),
    marginBottom: hp(1.65),
  },

  descriptionInput: {
    maxHeight: hp(14.2),
    borderWidth: 1,
    borderColor: "#aaaaaa",
    fontFamily: "RobotoRegular",
    fontSize: FONTSIZE.small_7,
    borderRadius: 5.5,
    paddingVertical: hp(1.38),
    paddingHorizontal: wp(4),
    marginHorizontal: wp(5.5),
    textAlignVertical: "top",
    backgroundColor: "white",
  },
});

export default styles;
