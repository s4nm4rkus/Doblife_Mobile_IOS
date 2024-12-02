import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
// import CheckBox from "@react-native-community/checkbox";

import styles from "./bottomSheetContentFilterMyLeagues.style";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBasketball,
  faBriefcase,
  faClipboardList,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
// import {
//   ownedLeagueCheckedValue,
//   playedInCheckedValue,
//   setIsOwnedLeagueChecked,
//   setIsPlayedInChecked,
//   uncheckAll,
// } from "../../../../../features/myLeaguesFilter/myLeaguesFilterSlice";
import { useCallback } from "react";

const BottomSheetContentFilterMyLeagues = ({ bottomSheetModalRef }) => {
  const dispatch = useDispatch();
  const isPlayedInChecked = useSelector(playedInCheckedValue);
  const isOwnedLeagueChecked = useSelector(ownedLeagueCheckedValue);

  const handlePlayedInCheckboxChange = () => {
    dispatch(setIsPlayedInChecked(!isPlayedInChecked));
    bottomSheetModalRef.current?.dismiss();
  };

  const handleOwnedLeagueCheckboxChange = () => {
    dispatch(setIsOwnedLeagueChecked(!isOwnedLeagueChecked));
    bottomSheetModalRef.current?.dismiss();
  };

  const handleUncheckAll = () => {
    dispatch(uncheckAll());
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
      snapPoints={["28%", "100%"]}
      backdropComponent={renderBackdrop}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => handleUncheckAll()}
        >
          <FontAwesomeIcon icon={faGlobe} size={30} />
          <Text style={styles.buttonText}>All Leagues</Text>
        </TouchableOpacity>
        <View style={styles.itemContainer}>
          <View style={styles.textContainer}>
            <FontAwesomeIcon icon={faBasketball} size={30} />
            <View>
              <Text style={styles.buttonText}>Played In</Text>
              <Text style={styles.textDescription}>
                Filter for leagues you have currently playing.
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
              <Text style={styles.buttonText}>Owned Leagues</Text>
              <Text style={styles.textDescription}>
                Filter for leagues you have owned
              </Text>
            </View>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isOwnedLeagueChecked}
              onChange={handleOwnedLeagueCheckboxChange}
            />
          </View>
        </View>
      </View>
    </BottomSheetModal>
  );
};

export default BottomSheetContentFilterMyLeagues;
