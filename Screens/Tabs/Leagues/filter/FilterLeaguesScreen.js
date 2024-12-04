import { Text, View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Dropdown } from 'react-native-element-dropdown';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './filterLeagues.style';
import { fetchProvinces } from '../../../../api/provinceApi';
import { fetchCities } from '../../../../api/cityApi';
import { fetchBarangays } from '../../../../api/barangayApi';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { Menu, MenuOptions, MenuProvider, MenuTrigger } from 'react-native-popup-menu';
import DatePicker from 'react-native-date-picker';
import moment from 'moment/moment';
import { setBrgyID, setCityID, setLeagueDate, setProvinceID, setSortBy } from '../../../../features/leaguesFilter/leaguesFilterSlice';
import { FONTSIZE } from '../../../../constants/theme';

const sortData = [
  {
    label: 'None',
    value: null
  },
  {
    label: 'Ongoing',
    value: 'ongoing'
  },
  {
    label: 'Upcoming',
    value: 'upcoming'
  },
  {
    label: 'Completed',
    value: 'completed'
  },
];

const FilterLeaguesScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [barangays, setBarangays] = useState([]);
  const [province, setProvince] = useState(null);
  const [city, setCity] = useState(null);
  const [barangay, setBarangay] = useState(null);
  const [isProvinceDisabled, setProvinceDisabled] = useState(true);
  const [isCityDisabled, setCityDisabled] = useState(true);
  const [isBarangayDisabled, setBarangayDisabled] = useState(true);
  const [status, setStatus] = useState(null);
  const [date, setDate] = useState(null);
  const [placeName, setPlaceName] = useState(null);
  const [isDateOpened, setIsDateOpened] = useState(false);
  const [isLocationOpened, setIsLocationOpened] = useState(false);

  const optionsStyles = {
    optionsContainer: {
      width: wp(90),
      marginTop: 45,
      padding: 5,
    },
  };

  const handleFilterLeagues = () => {
    dispatch(setLeagueDate(date ? moment(date).format("YYYY-MM-DD") : null));
    dispatch(setSortBy(status));
    dispatch(setProvinceID(province ? province.value : null));
    dispatch(setCityID(city ? city.value : null));
    dispatch(setBrgyID(barangay ? barangay.value : null));
    navigation.navigate('Leagues');
  };

  const onBackdropPress = () => {
    setIsDateOpened(false)
  }

  const onTriggerPress = () => {
    setIsDateOpened(true)
  }

  const onBackdropPressLocation = () => {
    setIsLocationOpened(false)
  }

  const onTriggerPressLocation = () => {
    setIsLocationOpened(true)
  }

  const handleFetchCities = (provinceID) => {
    fetchCities(provinceID).then((data) => {
      var count = Object.keys(data).length;
      let citiesArr = [];
      for (var i = 0; i < count; i++) {
        citiesArr.push({
          value: data[i].id,
          label: data[i].city,
        });
      }
      setCities(citiesArr);
      setCityDisabled(false);
    });
  };
  
  const handleFetchBarangays = (cityID) => {
    fetchBarangays(cityID).then((data) => {
      var count = Object.keys(data).length;
      let barangaysArr = [];
      for (var i = 0; i < count; i++) {
        barangaysArr.push({
          value: data[i].id,
          label: data[i].name,
        });
      }
      setBarangays(barangaysArr);
      setBarangayDisabled(false);
    });
  };

  const handleDateChange = (date) => {
    setDate(date)
  };

  const handleCancelDate = () => {
    setDate(null)
    setIsDateOpened(false)
  };

  const handleOkDate = () => {
    setIsDateOpened(false)
  };
  
  const handleCancelLocation = () => {
    setProvince(null);
    setCity(null);
    setBarangay(null);
    setPlaceName(null);
    setIsLocationOpened(false);
  };

  const handleOkLocation = () => {
    setPlaceName(`${barangay.label} ${city.label}, ${province.label}`);
    setIsLocationOpened(false);
  };

  useEffect(() => {
    fetchProvinces(1).then((data) => {
      var count = Object.keys(data).length;
      let provincesArr = [];
      for (var i = 0; i < count; i++) {
        provincesArr.push({
          value: data[i].id,
          label: data[i].name,
        });
      }
      setProvinces(provincesArr);
      setProvinceDisabled(false);
    });
  }, []);

  const renderItems = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} // Adjust behavior based on platform
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 25}
      style={styles.container}
    >
    <SafeAreaView style={styles.container}>
      <MenuProvider>
      <View style={styles.headerContainer}>
        <View style={styles.arrowLeftContainer}>
          <TouchableOpacity style={styles.arrowLeftButton} onPress={() => navigation.navigate('Leagues')}>
            <FontAwesomeIcon icon={faArrowLeft}  size={hp(4)} color='red'/>
          </TouchableOpacity>
          <Text style={styles.filterText}>Filter</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.headerButton} onPress={() => handleFilterLeagues()}>
            <Text style={styles.headerText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.inputsContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabelText}>Sort by</Text>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={sortData}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="None"
              value={status}
              onChange={item => {
                setStatus(item.value);
              }}
              renderItem={renderItems}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabelText}>By Date</Text>
            <Menu 
              onBackdropPress={() => onBackdropPress()}
              opened={isDateOpened}
            >
              <MenuTrigger
                onPress={() => onTriggerPress()}
              >
                <View style={styles.popoverContainer}>
                  <Text style={(date) ? styles.popoverText : styles.popoverPlaceholderText}>
                    {date ? date.toLocaleDateString().replace(/\b(\d)\b/g, '0$1') : 'Pick Date'}
                  </Text>
                  <View style={styles.iconWrapper}>
                    <FontAwesomeIcon icon={faChevronDown} style={styles.chevronDownIcon} size={hp(1.6)}/>
                  </View>
                  
                </View>
              </MenuTrigger>
              <MenuOptions customStyles={optionsStyles}>
                <DatePicker
                  mode="date"
                  date={date ? date : new Date()}
                  onDateChange={(date) => handleDateChange(date)}
                />
                <View style={{marginVertical: 10}}>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginHorizontal: 20}}>
                    <TouchableOpacity
                      style={{marginRight: 20}}
                      onPress={handleCancelDate}
                    >
                      <Text style={{fontSize: FONTSIZE.semi_large}}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={handleOkDate}
                    >
                      <Text style={{fontWeight: 'bold', fontSize: FONTSIZE.semi_large}}>Ok</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </MenuOptions>
            </Menu>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabelText}>By Location</Text>
            <Menu 
              onBackdropPress={() => onBackdropPressLocation()}
              opened={isLocationOpened}
            >
              <MenuTrigger
                onPress={() => onTriggerPressLocation()}
              >
                <View style={styles.popoverContainer}>
                  <Text style={(placeName) ? styles.popoverText : styles.popoverPlaceholderText}>
                    {placeName ? placeName : 'Pick Location'}
                  </Text>
                  <View style={styles.iconWrapper}>
                    <FontAwesomeIcon icon={faChevronDown} style={styles.chevronDownIcon} size={hp(1.6)}/>
                  </View>
                </View>
              </MenuTrigger>
              <MenuOptions customStyles={optionsStyles}>
                <View style={{marginTop: 20, marginHorizontal: 20}}>
                  <View style={styles.inputContainer}>
                    <Text style={styles.inputLabelText}>Province</Text>
                    <Dropdown
                      style={styles.dropdown}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={styles.selectedTextStyle}
                      inputSearchStyle={styles.inputSearchStyle}
                      iconStyle={styles.iconStyle}
                      data={provinces}
                      search
                      disable={isProvinceDisabled}
                      maxHeight={300}
                      labelField="label"
                      valueField="value"
                      placeholder="Select"
                      searchPlaceholder="Search..."
                      value={province}
                      onChange={item => {
                        setProvince(item);
                        handleFetchCities(item.value);
                      }}
                      renderItem={renderItems}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.inputLabelText}>City/Municipality</Text>
                    <Dropdown
                      style={styles.dropdown}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={styles.selectedTextStyle}
                      inputSearchStyle={styles.inputSearchStyle}
                      iconStyle={styles.iconStyle}
                      data={cities}
                      search
                      disable={isCityDisabled}
                      maxHeight={300}
                      labelField="label"
                      valueField="value"
                      placeholder="Select"
                      searchPlaceholder="Search..."
                      value={city}
                      onChange={item => {
                        setCity(item);
                        handleFetchBarangays(item.value);
                      }}
                      renderItem={renderItems}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.inputLabelText}>Barangay</Text>
                    <Dropdown
                      style={styles.dropdown}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={styles.selectedTextStyle}
                      inputSearchStyle={styles.inputSearchStyle}
                      iconStyle={styles.iconStyle}
                      data={barangays}
                      search
                      disable={isBarangayDisabled}
                      maxHeight={300}
                      labelField="label"
                      valueField="value"
                      placeholder="Select"
                      searchPlaceholder="Search..."
                      value={barangay}
                      onChange={item => {
                        setBarangay(item);
                      }}
                      renderItem={renderItems}
                    />
                  </View>
                  <View style={{marginTop: 10, marginBottom: 10, marginRight: 15}}>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                      <TouchableOpacity
                        style={{marginRight: 20}}
                        onPress={handleCancelLocation}
                      >
                        <Text style={{fontSize: FONTSIZE.semi_large}}>Cancel</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={handleOkLocation}
                      >
                        <Text style={{fontWeight: 'bold', fontSize: FONTSIZE.semi_large}}>Ok</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </MenuOptions>
            </Menu>
          </View>
        </View>
      </ScrollView>
      </MenuProvider>
    </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default FilterLeaguesScreen