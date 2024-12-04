import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS, FONT, FONTSIZE, SIZES } from "../../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.clr_light_white,
  },
  recentSearchesContainer: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputLabelText: {
    fontWeight: "bold",
    fontSize: FONTSIZE.label,
    marginBottom: 10,
  },
  heightInputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 40,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.small,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    height: "100%",
  },
  inInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    position: "absolute",
    paddingHorizontal: SIZES.medium,
  },
  measureText: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    color: "rgba(0, 0, 0, 0.5)",
    marginRight: 20,
  },
  dropdown: {
    height: 40,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 14,
  },
  placeholderStyle: {
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
  },
});

export default styles;
