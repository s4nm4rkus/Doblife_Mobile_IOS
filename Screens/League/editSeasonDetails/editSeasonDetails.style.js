import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS, FONT, FONTSIZE, SIZES } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  inputLabelText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoCondensedBold",
    marginLeft: wp(5.2),
    marginTop: hp(4.55),
    marginBottom: hp(3.6),
  },

  openingDateText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoCondensedBold",
    marginLeft: wp(5.2),
    marginTop: hp(2.75),
    marginBottom: hp(2.61),
  },

  addressContainerLine: {
    marginTop: hp(0.65),
    borderBottomColor: "#aaa",
    borderBottomWidth: 2,
    marginHorizontal: wp(5.7),
  },
  openingDateContainer: {},
  inputContainer: {
    marginHorizontal: wp(5.7),
    marginBottom: hp(3.373),
  },

  dropdown: {
    height: hp(4.95),
    backgroundColor: "white",
    borderRadius: 11,
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

  descriptionInput: {
    maxHeight: 120,
    borderWidth: 1,
    borderColor: "#aaaaaa",
    lineHeight: 20,
    borderRadius: 5,
    paddingTop: 10,
    paddingHorizontal: 16,
    textAlignVertical: "top",
    backgroundColor: "white",
  },

  popoverContainer: {
    height: hp(4.95),
    backgroundColor: "white",
    borderRadius: 12,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    flexDirection: "row",
  },

  popoverText: {
    fontSize: 14,
    paddingLeft: 6,
  },

  popoverPlaceholderText: {
    fontSize: 14,
    paddingLeft: 6,
    opacity: 0.5,
  },

  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: 10,
  },

  chevronDownIcon: {
    color: "rgba(0, 0, 0, 0.5)",
  },
});

export default styles;
