import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { COLORS, FONT, FONTSIZE, SIZES } from "../../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  headerContainer: {
    height: hp(7),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
    backgroundColor: 'white',
  },

  arrowLeftContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowLeftButton: {
    marginLeft: 15
  },
  filterText: {
    fontSize: FONTSIZE.x_large,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  headerButton: {
    marginRight: 20
  },
  headerText: {
    fontSize: FONTSIZE.x_large,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  inputsContainer: {
    marginHorizontal: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputLabelText: {
    fontWeight: 'bold',
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
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    borderColor: '#bcbcbc',
    borderWidth: 1,
    height: "100%",
    borderRadius: 5,
  },
  inInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    position: 'absolute',
    paddingHorizontal: SIZES.medium
  },
  measureText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    color: 'rgba(0, 0, 0, 0.5)',
    marginRight: 20
  },
  dropdown: {
    height: 40,
    backgroundColor: 'white',
    borderColor: '#bcbcbc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 16,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 14,
  },
  placeholderStyle: {
    color: 'rgba(0, 0, 0, 0.5)',
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

  inputMinMaxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  testinputGroup: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  testinputGroupPrepend: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 50,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#bcbcbc',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  testinputGroupText: {
    color: '#ced4da',
    fontSize: 16,
  },
  testinput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#bcbcbc',
    paddingHorizontal: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  toText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#495057',
    alignSelf: 'center',
  },
});

export default styles;
