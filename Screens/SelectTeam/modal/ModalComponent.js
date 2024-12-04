import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import styles from './modal.style';
import { useSelector } from 'react-redux';
import { selectedTeamsValue } from '../../../features/selectTeam/selectTeamSlice';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FONTSIZE } from '../../../constants/theme';

const ModalComponent = ({ isVisible, isCanceled, handleContinue }) => {
	const selectedTeams = useSelector(selectedTeamsValue);
  return (
    <Modal
			visible={isVisible}
			transparent={true}
			animationType="fade"
    > 
			<View style={styles.overlay}/>
			<View style={styles.modalContainer}>
				<View style={styles.modalContent}>
					<View style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
						<TouchableOpacity 
							onPress={() => isCanceled()}
						>
							<FontAwesomeIcon 
								icon={faXmark} 
								size={hp(2.7)}
							/>
						</TouchableOpacity>
					</View>
					<View style={{justifyContent: 'center', alignItems: 'center'}}>
						<Text style={styles.modalText}>
							Confirmation
						</Text>
					</View>
					
					<View style={{justifyContent: 'center', alignItems: 'center', marginTop: 30, paddingHorizontal: 25}}>
						<Text style={{textAlign: 'center'}}>
							<Text style={{fontSize: FONTSIZE.large}}>Are you sure you want to entry </Text>
							{(
								selectedTeams?.map((data, index) => (
									<Text key={index}>
										{index + 1 === selectedTeams.length && selectedTeams.length >= 2 ? (<Text> and </Text>) : null}
										<Text style={{fontWeight: 'bold', fontSize: FONTSIZE.detail}}>{data.league_participant.team_profile.name}</Text>
										{index === selectedTeams.length - 2 || index + 1 === selectedTeams.length ? null : (<Text>, </Text>)}
									</Text>
								))
							)}
							<Text style={{fontSize: FONTSIZE.large}}> teams to a league?</Text>
						</Text>
					</View>
					
					<View style={styles.modalButtons}>
						<TouchableOpacity
							style={[styles.modalButton, styles.continueButton]}
							onPress={handleContinue}
						>
							<Text style={styles.continueButtonText}>CONTINUE</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
    </Modal>
  )
}

export default ModalComponent