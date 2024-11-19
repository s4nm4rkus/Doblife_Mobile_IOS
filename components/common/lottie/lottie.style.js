import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../../constants/theme";

const styles = StyleSheet.create({
    lottieContainer:{
        alignSelf: 'center',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    lottieStyle:{
        width: 200,
        height: 200
    }, 
    messageText:{
        fontFamily: FONT.bold,
        fontSize: SIZES.large
    }
});

export default styles;
