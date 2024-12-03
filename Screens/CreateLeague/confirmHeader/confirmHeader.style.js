import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS, FONT, FONTSIZE } from "../../../constants/theme";
const styles = StyleSheet.create({
  container: {
    height: hp(30),
    paddingTop: 15,
    paddingHorizontal: 25,
    marginBottom: 30,
    backgroundColor: "#a71a0c",
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
  },

  titleTextContainer: {
    flex: 1,
    paddingHorizontal: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  text: {
    fontSize: FONTSIZE.large_5,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
