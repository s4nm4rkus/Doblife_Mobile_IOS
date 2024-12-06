import { View, TouchableOpacity, Text, FlatList } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import styles from "./bottomSheetDivisions.style";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGlobe, faPen, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import {
  hasMatchSummaryValue,
  setIsModalVisible,
} from "../../../../features/dropPlayer/dropPlayerSlice";
import { useCallback } from "react";
import {
  leagueSeasonCategoriesValue,
  setLeagueSeasonCategory,
} from "../../../../features/selectDivision/selectDivisionSlice";

const BottomSheetDivisions = ({ bottomSheetModalRef, navigation }) => {
  const dispatch = useDispatch();
  const leagueSeasonCategories = useSelector(leagueSeasonCategoriesValue);
  const hasMatchSummary = useSelector(hasMatchSummaryValue);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.buttonStyle}
      onPress={() => handleSelectDivision(item)}
    >
      <Text style={styles.buttonText}>
        {item && item.label ? item.label : ""}
      </Text>
    </TouchableOpacity>
  );

  const handleSelectDivision = (item) => {
    dispatch(setLeagueSeasonCategory(item));
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
      snapPoints={["20%", "50%"]}
      backdropComponent={renderBackdrop}
    >
      <BottomSheetView style={{ flex: 1, paddingBottom: 50 }}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.buttonText}>Select Division</Text>
          </View>
          <FlatList
            data={leagueSeasonCategories}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          ></FlatList>
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default BottomSheetDivisions;
