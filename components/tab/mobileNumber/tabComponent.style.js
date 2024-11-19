import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: 40,
    marginBottom: SIZES.xxxLarge,
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  btn: (name, activeTab) => ({
    height: "100%",
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: name === activeTab ? COLORS.clr_minestrone : "white",
    borderRadius: 10,
  }),
  btnText: (name, activeTab) => ({
    fontFamily: FONT.medium,
    fontSize: SIZES.xSmall,
    color: name === activeTab ? COLORS.clr_light_white : "black",
  }),
});

export default styles;
