import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../../constants/theme";

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.large
    },
    modalContent: {
        width: '80%',
        height: 260,
        padding: 20,
        backgroundColor: COLORS.clr_light_white,
        borderRadius: 10,
        elevation: 5
    },
    lottieContainer:{
        alignSelf: 'center',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    lottieStyle:{
        width: 200,
        height: 200,
        marginTop: -30
    },
    modalText: {
        fontFamily: FONT.bold,
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    modalButton: {
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 5,
    },
    yesButton: {
        backgroundColor: COLORS.clr_light_white,
        borderWidth: 1,
        borderColor: COLORS.primary
    },
    yesButtonText:{
        color: COLORS.primary,
        fontFamily: FONT.regular
    },
    noButton: {
        backgroundColor: COLORS.tertiary,
    },
    modalButtonText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: FONT.regular,
    },
});

export default styles;
