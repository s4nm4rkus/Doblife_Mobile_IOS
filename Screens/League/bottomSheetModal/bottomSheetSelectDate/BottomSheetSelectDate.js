import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  ScrollView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import styles from "./bottomSheetSelectDate.style";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { useCallback, useState } from "react";
import DateTimePicker from "react-native-ui-datepicker";
import DatePicker from "react-native-date-picker";
import { LinearGradient } from "expo-linear-gradient";
import moment from "moment/moment";
import { useDispatch, useSelector } from "react-redux";
import {
  activeGameNumberValue,
  addLeagueMatchup,
  leagueMatchupsValue,
  setDateAndTime,
  updateDateAndTime,
} from "../../../../features/selectMatchups/selectMatchupsSlice";

const themes = [{ mainColor: "#c42414", activeTextColor: "#fff" }];

const BottomSheetSelectDate = ({ bottomSheetModalRef }) => {
  const dispatch = useDispatch();
  const [newDate, setNewDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const activeGameNumber = useSelector(activeGameNumberValue);
  const leagueMatchups = useSelector(leagueMatchupsValue);

  const handleDateChange = (params) => {
    setNewDate(params.date);
  };

  const handleTimeChange = (dateTime) => {
    setTime(dateTime);
  };

  const handleSetDate = () => {
    const parsedDate = moment(time);
    const hours = parsedDate.hour();
    const minutes = parsedDate.minute();

    let newDateAndTime = moment(`${newDate}`)
      .set({ hours: hours, minutes: minutes })
      .toISOString();

    if (leagueMatchups.hasOwnProperty(activeGameNumber)) {
      const matchup = dispatch(
        updateDateAndTime({
          key: activeGameNumber,
          date_and_time: newDateAndTime,
        })
      );
    } else {
      dispatch(
        addLeagueMatchup({
          [activeGameNumber]: {
            date_and_time: newDateAndTime,
            matchup: null,
          },
        })
      );
    }
    bottomSheetModalRef.current?.dismiss();
  };

  const handleCancel = () => {
    setNewDate(new Date());
    setTime(new Date());
    bottomSheetModalRef.current?.dismiss();
  };

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={1}
        animatedIndex={{
          value: 1,
        }}
      />
    ),
    []
  );

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      snapPoints={["100%"]}
      backdropComponent={renderBackdrop}
    >
      <BottomSheetScrollView>
        <View style={styles.selectDateContainer}>
          <Text style={styles.selectDateText}>Select Date</Text>
          <View style={styles.datePickerContainer}>
            <View style={styles.datePicker}>
              <DateTimePicker
                mode={"single"}
                date={newDate}
                locale={"en"}
                displayFullDays
                onChange={(params) => handleDateChange(params)}
                headerButtonColor={themes[0].mainColor}
                selectedItemColor={themes[0].mainColor}
                selectedTextStyle={{
                  fontWeight: "bold",
                  color: themes[0].activeTextColor,
                }}
                height={hp(35.65)}
                // eslint-disable-next-line react-native/no-inline-styles
                todayContainerStyle={{
                  borderWidth: 1,
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.selectTimeContainer}>
          <Text style={styles.selectTimeText}>Select Time</Text>
          <View style={styles.datePickerTimeContainer}>
            <DatePicker
              date={time}
              mode="time"
              onDateChange={(time) => handleTimeChange(time)}
            />
          </View>
        </View>
        <View style={[styles.buttonsContainer]}>
          <View style={styles.cancelButtonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={() => handleCancel()}
            >
              <Text style={styles.cancelButtonText}>CANCEL</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.submitButtonContainer}>
            <TouchableOpacity
              style={styles.yesButton}
              onPress={() => handleSetDate()}
            >
              <LinearGradient
                colors={["#c42414", "#7c0b00"]}
                style={styles.button}
              >
                <Text style={styles.buttonText}>SET DATE</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheetScrollView>
    </BottomSheetModal>
  );
};

export default BottomSheetSelectDate;
