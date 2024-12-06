import { View, TouchableOpacity, Text, FlatList } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import styles from "./bottomSheetBrackets.style";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faGlobe,
  faPen,
  faPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import {
  hasMatchSummaryValue,
  setIsModalVisible,
} from "../../../../features/dropPlayer/dropPlayerSlice";
import { useCallback } from "react";
import {
  leagueSeasonCategoriesValue,
  setLeagueSeasonCategory,
} from "../../../../features/selectDivision/selectDivisionSlice";
import {
  bracketsValue,
  setBracket,
} from "../../../../features/selectBracket/selectBracketSlice";
import { removeAllSelectedTeamParticipant } from "../../../../features/addBracket/addBracketSlice";

const BottomSheetBrackets = ({ bottomSheetModalRef, navigation }) => {
  const dispatch = useDispatch();
  const brackets = useSelector(bracketsValue);
  const hasMatchSummary = useSelector(hasMatchSummaryValue);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.buttonStyle}
      onPress={() => handleSelectbracket(item)}
    >
      <Text style={styles.buttonText}>
        {item && item.name ? item.name : ""}
      </Text>
    </TouchableOpacity>
  );

  const handleSelectbracket = (item) => {
    dispatch(setBracket(item));
    bottomSheetModalRef.current?.dismiss();
  };

  const handleAddBracket = () => {
    dispatch(removeAllSelectedTeamParticipant());
    bottomSheetModalRef.current?.dismiss();
    navigation.navigate("AddBracket");
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
      snapPoints={["20%", "50%"]}
      backdropComponent={renderBackdrop}
    >
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.buttonText}>Select Bracket</Text>
          <View style={styles.addBracketContainer}>
            <TouchableOpacity
              onPress={() => handleAddBracket()}
              style={styles.addBracketButton}
            >
              <FontAwesomeIcon
                icon={faPlus}
                size={hp(1.5)}
                style={styles.plusIcon}
              />
              <Text style={styles.addBracketText}>Add Bracket</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={brackets}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        ></FlatList>
      </View>
    </BottomSheetModal>
  );
};

export default BottomSheetBrackets;
