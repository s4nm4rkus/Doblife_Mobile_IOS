import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
// import CheckBox from "@react-native-community/checkbox";
import { Checkbox } from "react-native-paper";

import styles from "./bottomSheetContentFilterMyLeagues.style";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBasketball,
  faBriefcase,
  faClipboardList,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import {
  ownedLeagueCheckedValue,
  playedInCheckedValue,
  setIsOwnedLeagueChecked,
  setIsPlayedInChecked,
  uncheckAll,
} from "../../../../../features/myLeaguesFilter/myLeaguesFilterSlice";
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
      <BottomSheetView style={{ flex: 1 }}>
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
              <Checkbox
                value={isPlayedInChecked}
                onPress={handlePlayedInCheckboxChange}
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
              <Checkbox
                value={isOwnedLeagueChecked}
                onPress={handleOwnedLeagueCheckboxChange}
              />
            </View>
          </View>
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default BottomSheetContentFilterMyLeagues;
