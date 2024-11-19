import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: SIZES.xxxLarge
    },
    otpContainer: {
        width: '80%',
        marginHorizontal: 20,
        marginBottom: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    otpBox: {
        borderRadius: 5,
        borderColor: COLORS.primary,
        borderWidth: 0.5,
    },
    otpText: {
        fontFamily: FONT.bold,
        fontSize: 25,
        color: COLORS.primary,
        padding: 0,
        textAlign: 'center',
        paddingHorizontal: 18,
        paddingVertical: 10,
    },
});

export default styles;
