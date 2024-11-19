import { StyleSheet } from "react-native";
import { FONT, FONTSIZE, HEIGHT, MARGIN } from "../../../constants/theme";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  textInputsContainer:{
    paddingHorizontal: MARGIN.m1,
    marginTop: hp(3.5),
    marginBottom: hp(6),
  },

  textInputContainer: {
    flexDirection: "column",
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: HEIGHT.medium_height,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    borderColor: '#bcbcbc',
    borderWidth: 1,
    height: "100%",
    borderRadius: 5,
  },
  inInput: {
    fontFamily: 'RobotoRegular',
    fontSize: FONTSIZE.large,
    width: "100%",
    height: "100%",
    position: 'absolute',
    paddingHorizontal: wp(3.7),
  },
  textLabel: {
    fontFamily: 'RobotoRegular',
    fontSize: FONTSIZE.medium,
    marginBottom: hp(0.6),
  },
});

export default styles;
