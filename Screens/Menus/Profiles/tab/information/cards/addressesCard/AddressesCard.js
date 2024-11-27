import { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './addressesCard.style';
import { useQueryClient } from '@tanstack/react-query';
import { AuthContext } from '../../../../../../../context/AuthContext';
import { useProfileData } from '../../../../../../../hooks/useProfileData';
import { useDispatch } from 'react-redux';
import { resetAll, setBarangay, setCity, setCountry, setProvince } from '../../../../../../../features/profile/editAddress/editAddressSlice';

const AddressesCard = ({ navigation }) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { userToken,logout } = useContext(AuthContext);
  
  const { data: profile, isLoading, isError, error } = useProfileData(userToken);

  const handleEditBirthplace = () => {
    dispatch(resetAll());

    if (profile.birthplace) {
      dispatch(setCountry(profile.birthplace_city.province.countryID));
      dispatch(setProvince(profile.birthplace_city.province.id));
      dispatch(setCity(profile.birthplace));
    } else {
      dispatch(setCountry(11));
    }
    

    navigation.navigate('EditAddress', {
      value: 'birthdate'
    })
  }

  const handleEditHometown = () => {
    dispatch(resetAll());

    if (profile.hometown_brgy) {
      dispatch(setCountry(profile.hometown_city.province.countryID));
      dispatch(setProvince(profile.hometown_city.province.id));
      dispatch(setCity(profile.hometown_city.id));
      dispatch(setBarangay(profile.hometown_brgy));
    } else {
      dispatch(setCountry(11));
    }
    
    
    navigation.navigate('EditAddress', {
      value: 'hometown'
    })
  }

  const handleEditLivingAddress = () => {
    dispatch(resetAll());

    if (profile.living_address) {
      dispatch(setCountry(profile.living_address_barangay.city.province.countryID));
      dispatch(setProvince(profile.living_address_barangay.city.province.id));
      dispatch(setCity(profile.living_address_barangay.city.id));
      dispatch(setBarangay(profile.living_address));
    } else {
      dispatch(setCountry(11));
    }
    
    navigation.navigate('EditAddress', {
      value: 'living_address'
    })
  }
  
  const handleEditVotingAddress = () => {
    dispatch(resetAll());
    
    if (profile.voting_address) {
      dispatch(setCountry(profile.voting_address_barangay.city.province.countryID));
      dispatch(setProvince(profile.voting_address_barangay.city.province.id));
      dispatch(setCity(profile.voting_address_barangay.city.id));
      dispatch(setBarangay(profile.voting_address));
    } else {
      dispatch(setCountry(11));
    }
    
    navigation.navigate('EditAddress', {
      value: 'voting_address'
    })

  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.playerDetailsText}>Addresses</Text>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.details}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={styles.detailsLabelText}>Birthplace</Text>
              <Text 
                style={(profile.birthplace_city == null) ? styles.nullDetailsText : styles.detailsText}
              >
                {profile.birthplace_city == null ? 'no birthplace' : profile.birthplace_city.city}
              </Text>
            </View>
            <View>
              <View style={styles.editContainer}>
                <TouchableOpacity 
                  onPress={() => handleEditBirthplace()}
                >
                  <Text style={styles.editText}>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.details}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={styles.detailsLabelText}>Hometown</Text>
              <Text 
                style={(profile.hometown_city == null) ? styles.nullDetailsText : styles.detailsText}
              >
                {profile.hometown_city == null ? 'no hometown' : profile.hometown_city.city}
              </Text>
            </View>
            <View>
              <View style={styles.editContainer}>
                <TouchableOpacity 
                  onPress={() => handleEditHometown()}
                >
                  <Text style={styles.editText}>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.details}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={styles.detailsLabelText}>Living Address</Text>
              <Text 
                style={(profile.living_address_barangay == null) ? styles.nullDetailsText : styles.detailsText}
              >
                {profile.living_address_barangay == null ? 'no living address' : profile.living_address_barangay.name}
              </Text>
            </View>
            <View>
              <View style={styles.editContainer}>
                <TouchableOpacity 
                  onPress={() => handleEditLivingAddress()}
                >
                  <Text style={styles.editText}>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={{marginTop: 12}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={styles.detailsLabelText}>Voting Address</Text>
              <Text 
                style={(profile.voting_address_barangay == null) ? styles.nullDetailsText : styles.detailsText}
              >
                {profile.voting_address_barangay == null ? 'no voting address' : profile.voting_address_barangay.name}
              </Text>
            </View>
            <View>
              <View style={styles.editContainer}>
                <TouchableOpacity 
                  onPress={() => handleEditVotingAddress()}
                >
                  <Text style={styles.editText}>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default AddressesCard