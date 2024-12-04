import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONTSIZE } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebeded",
  },

  inputsContainer: {},

  inputContainer: {
    marginTop: hp(2.8),
    marginBottom: hp(1.9),
    paddingHorizontal: wp(5.3),
  },

  errorText: {
    fontSize: FONTSIZE.label,
    color: "red",
  },

  textInputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: hp(4.3),
  },

  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 11,
    borderWidth: 1,
    borderColor: "#aaaaaa",
    height: "100%",
    paddingHorizontal: wp(3.7),
  },

  inInput: {
    fontFamily: "RobotoRegular",
    fontSize: FONTSIZE.label,
    width: "100%",
    height: "100%",
    position: "absolute",
  },

  teamsContainer: {
    paddingHorizontal: wp(5.3),
  },

  selectedTeamsContainer: {},

  submitButtonContainer: {
    flex: 1,
    justifyContent: "center",
  },

  cancelButtonContainer: {
    flex: 1,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
  },

  modalButton: {
    borderRadius: 5,
    height: hp(4.55),
    justifyContent: "center",
    alignItems: "center",
  },
  selectButton: {
    width: "100%",
    backgroundColor: "#c42414",
    borderWidth: 1.1,
    borderColor: "#fff",
    borderRadius: 5,
  },
  cancelButton: {
    width: "100%",
    borderWidth: 1.1,
    borderColor: "#c42414",
    backgroundColor: "white",
    borderRadius: 5,
  },
  selectButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: FONTSIZE.label,
    fontFamily: "RobotoCondensedBold",
  },
  cancelButtonText: {
    color: "#c42414",
    textAlign: "center",
    fontSize: FONTSIZE.label,
    fontFamily: "RobotoCondensedBold",
  },

  searchIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
  },

  buttonsContainer: {
    marginTop: hp(3.65),
    paddingHorizontal: wp(5.3),
    flexDirection: "row",
    gap: wp(4.3),
  },
});

export default styles;
