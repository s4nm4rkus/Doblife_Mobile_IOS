import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const COLORS = {
  primary: "#0a1b3e",
  secondary: "#fbb158",
  tertiary: "#743e16",

  clr_blue: "#7474a9",
  clr_white: "#ffffff",
  clr_light_brown: "#c39c76",
  clr_dark_brown: "#594c39",
  clr_red: "#9B001C",
  clr_pale_red: "#db3056",
  clr_light_green: "#d3f5bc",
  clr_light_white: "#fbfafa",
  clr_orange: "#fe8b03",
  clr_gray: "#787276",
  clr_light_gray: "#edeff1",
  clr_xmas_candy: "#9b001c",
  clr_dark_red: "#0b0b0b",
  clr_whisper: "#ebeded",
  clr_minestrone: "#c42414",

  clr_opac_dark_red: "rgba(11, 11, 11, 0.4)",
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const FONTSIZE = {
  description: hp(2.07),
  screen_title: hp(4.5), // hp(4.2) = 34.5
  // small: hp(1.7), // hp(1.5) = 12.2
  semi_medium: hp(1.82), // hp(1.6) = 13.1
  button: hp(2), // hp(1.85) = 15.42
  // medium: hp(1.95), // hp(1.7) = 14
  label: hp(2.05), // hp(1.8) = 14.85
  modal_button: hp(2.15), // hp(1.9) = 15.7
  semi_large: hp(2.25), // hp(2) = 16.5
  // large: hp(2.35), // hp(2.15) = 17.7
  detail: hp(2.45), // hp(2.2) = 18.2
  semi_x_large: hp(2.6), // hp(2.35) = 19.4
  x_large: hp(2.72), // hp(2.5) = 20.5
  small_1: hp(1.26), // hp(1) = 8.28
  small_2: hp(1.45), // hp(1.2) = 10
  small_3: hp(1.55), // hp(1.3) = 10.85
  small_4: hp(1.6), // hp(1.35) = 11.14
  small_5: hp(1.62), // hp(1.4) = 11.42
  small_6: hp(1.7), // hp(1.45) = 12
  small_7: hp(1.8), // hp(1.57) = 12.85
  medium_1: hp(2.34), // hp(2.11) = 17.42
  medium_2: hp(2.6), // hp(2.34) = 19.42
  medium_3: hp(2.62), // hp(2.37) = 19.71
  medium_4: hp(2.82), // hp(2.6) = 21.42
  medium_5: hp(2.93), // hp(2.7) = 22.2
  medium_6: hp(3.05), // hp(2.8) = 23.14
  medium_7: hp(3.07), // hp(2.85) = 23.42
  large_1: hp(3.25), // hp(3) = 24.85
  large_2: hp(3.4), // hp(3.15) = 26
  large_3: hp(3.75), // hp(3.5) = 28.85
  large_4: hp(4.26), // hp(4) = 33.1
  large_5: hp(4.72), // hp(4.5) = 37.1
  large_6: hp(5.22), // hp(5) = 41.42
  large_7: hp(5.73), // hp(5.5) = 45.42
  super_large: hp(9.65), // hp(9.4) = 77.71
  xx_large: hp(4.4), // hp(4.15) = 34.2
  old_descrption: hp(1.84),
  old_input_label: hp(1.83),
  old_screen_title: hp(4.2),
  small: hp(1.7), //14
  medium: hp(1.95), //16
  large: hp(2.17), //18
  xLarge: hp(2.42), //20
  xxLarge: hp(2.9), //24
  xxxLarge: hp(3.15), //26
  xxxxLarge: hp(3.4), //28
  huge: hp(3.87), //32
};
const SIZES = {
  xSmall: 10,
  small: 12,
  semi_small: 14,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
  xxxLarge: 35,
};

const MARGIN = {
  m1: wp(9.9),
};

const HEIGHT = {
  medium_height: hp(4.38),
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
  large: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8.84,
    elevation: 8,
  },

  iosSmall: {
    shadowColor: "#444444",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
};

export { COLORS, FONT, SIZES, SHADOWS, FONTSIZE, HEIGHT, MARGIN };
