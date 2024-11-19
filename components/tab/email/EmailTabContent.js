import { Text, TextInput, View } from 'react-native';
import styles from './emailTabContent.style';

const EmailTabContent = ({ value, onChangeText, onCheckEmail }) => {

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (text) => {
    onChangeText(text);
    const isValid = isValidEmail(text);
    onCheckEmail(isValid);
  };
  
  return (
    <View style={styles.textInputsContainer}>
      <View style={styles.textInputContainer}>
				<Text style={styles.textLabel}>Email Address</Text>
				<View style={styles.inputContainer}>
					<View style={styles.inputWrapper}>
            <TextInput
              style={styles.inInput}
              value={value}
              placeholder='e.g. example@gmail.com'
              onChangeText={handleEmailChange}
              keyboardType={'email-address'}
            />
					</View>
				</View>
			</View>
    </View>
  )
}

export default EmailTabContent