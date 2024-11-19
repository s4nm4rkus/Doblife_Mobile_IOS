import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: '100%',
    // alignItems: 'center',
    gap: SIZES.xxxLarge,
  },
  headerContainer: {
    marginTop: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  headerTextBold: {
    width: "50%",
    textAlign: "center",
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
  },
  headerTextRegular: {
    width: "50%",
    textAlign: "center",
    fontFamily: FONT.regular,
    fontSize: SIZES.semi_small,
  },
  temporaryStyle: {
    fontFamily: FONT.bold,
    color: COLORS.clr_red,
  },

  bottomImageContainer: {
    flex: 1,
  },

  bottomImage: {
    width: "100%",
    height: "150%",
    resizeMode: "stretch",
  },
});

export default styles;
