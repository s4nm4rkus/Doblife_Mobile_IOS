import { View, TouchableOpacity, Text, FlatList } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import styles from "./bottomSheetSortByParticipants.style";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGlobe, faPen, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useCallback } from "react";
import {
  leagueSeasonCategoriesValue,
  setLeagueSeasonCategory,
} from "../../../../features/selectDivision/selectDivisionSlice";
import { setSortBy } from "../../../../features/sortParticipants/sortParticipantsSlice";

const metrics = ["Rank", "Wins", "Loses", "Standing", "Bracket"];

const BottomSheetSortByParticipants = ({ bottomSheetModalRef, navigation }) => {
  const dispatch = useDispatch();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.buttonStyle}
      onPress={() => handleSelectSortBy(item)}
    >
      <Text style={styles.buttonText}>{item}</Text>
    </TouchableOpacity>
  );

  const handleSelectSortBy = (item) => {
    // dispatch(setSortBy(item))
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
      snapPoints={["30%", "50%"]}
      backdropComponent={renderBackdrop}
    >
      <BottomSheetView style={{ flex: 1, paddingBottom: hp(10) }}>
        <View style={styles.container}>
          <FlatList
            data={metrics}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          ></FlatList>
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default BottomSheetSortByParticipants;
