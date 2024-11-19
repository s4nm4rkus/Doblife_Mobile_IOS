import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, ScrollView, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Separator from '../../utils/separator';
import styles from './otp.style';

const OtpBox = ({ onOtpChange }) => {

	const firstInput = useRef();
	const secondInput = useRef();
	const thirdInput = useRef();
	const fourthInput = useRef();
	const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: ''});
	
	useEffect(() => {
			const completeOtp = Object.values(otp).join('');
			onOtpChange(completeOtp);
	}, [otp, onOtpChange]);

	return (
		<View style={styles.container}>
			<View style={styles.otpContainer}>
				<View style={styles.otpBox}>
					<TextInput
						style={styles.otpText}
						maxLength={1}
						ref={firstInput}
						onChangeText={text => {
							setOtp({...otp, 1: text});
							text && secondInput.current.focus();
						}}
					/>
				</View>
				<View style={styles.otpBox}>
				<TextInput
					style={styles.otpText}
					maxLength={1}
					ref={secondInput}
					onChangeText={text => {
						setOtp({...otp, 2: text});
						text ? thirdInput.current.focus() : firstInput.current.focus();
					}}
				/>
				</View>
				<View style={styles.otpBox}>
					<TextInput
						style={styles.otpText}
						maxLength={1}
						ref={thirdInput}
						onChangeText={text => {
							setOtp({...otp, 3: text});
							text ? fourthInput.current.focus() : secondInput.current.focus();
						}}
					/>
				</View>
				<View style={styles.otpBox}>
					<TextInput
						style={styles.otpText}
						maxLength={1}
						ref={fourthInput}
						onChangeText={text => {
							setOtp({...otp, 4: text});
							!text && thirdInput.current.focus();
						}}
					/>
				</View>
			</View>
		</View>
	)
}

export default OtpBox