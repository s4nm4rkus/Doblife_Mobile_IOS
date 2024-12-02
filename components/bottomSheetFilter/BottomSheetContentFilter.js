import { useCallback, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import CheckBox from "@react-native-community/checkbox";

import styles from "./bottomSheetFilter.style";
import { useDispatch, useSelector } from "react-redux";
import {
  floatingCheckedValue,
  ownedTeamCheckedValue,
  playedInCheckedValue,
  setIsFloatingChecked,
  setIsOwnedTeamChecked,
  setIsPlayedInChecked,
  uncheckAll,
} from "../../features/myTeamsFilter/myTeamsFilterSlice";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBasketball,
  faBriefcase,
  faClipboardList,
  faClockRotateLeft,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";

const BottomSheetContentFilter = ({ bottomSheetModalRef, navigation }) => {
  const dispatch = useDispatch();
  const isPlayedInChecked = useSelector(playedInCheckedValue);
  const isOwnedTeamChecked = useSelector(ownedTeamCheckedValue);
  const isFloatingChecked = useSelector(floatingCheckedValue);

  const handlePlayedInCheckboxChange = () => {
    dispatch(setIsPlayedInChecked(!isPlayedInChecked));
  };

  const handleOwnedTeamCheckboxChange = () => {
    dispatch(setIsOwnedTeamChecked(!isOwnedTeamChecked));
  };

  const handleFloatingCheckboxChange = () => {
    dispatch(setIsFloatingChecked(!isFloatingChecked));
  };

  const handleUncheckAll = () => {
    dispatch(uncheckAll());
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
      snapPoints={["35%"]}
      backdropComponent={renderBackdrop}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => handleUncheckAll()}
        >
          <FontAwesomeIcon icon={faGlobe} size={30} />
          <Text style={styles.buttonText}>All Teams</Text>
        </TouchableOpacity>
        <View style={styles.itemContainer}>
          <View style={styles.textContainer}>
            <FontAwesomeIcon icon={faBasketball} size={30} />
            <View>
              <Text style={styles.buttonText}>Played In</Text>
              <Text style={styles.textDescription}>
                Filter for teams you have currently played for
              </Text>
            </View>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isPlayedInChecked}
              onChange={handlePlayedInCheckboxChange}
            />
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.textContainer}>
            <FontAwesomeIcon icon={faBriefcase} size={30} />
            <View>
              <Text style={styles.buttonText}>Owned Teams</Text>
              <Text style={styles.textDescription}>
                Filter for teams you have owned
              </Text>
            </View>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isOwnedTeamChecked}
              onChange={handleOwnedTeamCheckboxChange}
            />
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.textContainer}>
            <FontAwesomeIcon icon={faClockRotateLeft} size={30} />
            <View>
              <Text style={styles.buttonText}>Floating</Text>
              <Text style={styles.textDescription}>
                Filter teams which are not yet accepted in a league
              </Text>
            </View>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isFloatingChecked}
              onChange={handleFloatingCheckboxChange}
            />
          </View>
        </View>
        {/* <View style={styles.itemContainer}>
					<View style={styles.textContainer}>
						<FontAwesomeIcon 
							icon={faClipboardList}
							size={30}
						/>
						<View>
							<Text style={styles.buttonText}>Coached Team</Text>
							<Text style={styles.textDescription}>Filter for teams you have currently coaching</Text>
						</View>
					</View>
					<View style={styles.checkboxContainer}>
						<CheckBox
							value={isFloatingChecked}
							onChange={handleFloatingCheckboxChange}
						/>
					</View>
				</View> */}
      </View>
    </BottomSheetModal>
  );
};

export default BottomSheetContentFilter;
