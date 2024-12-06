import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";

import styles from "./leagueContent.style";
import { useState } from "react";
import { COLORS } from "../../../constants/theme";
import Division from "./tab/division/Division";
import GameAndSchedule from "./tab/gameAndSchedule/GameAndSchedule";
import Details from "./tab/details/Details";
import { isOwnerValue } from "../../../features/league/leagueSlice";
import { useSelector } from "react-redux";

const tab = [
  {
    name: "DETAILS",
  },
  {
    name: "PARTICIPANTS",
    stat: "APG",
  },
  {
    name: "GAME & SCHEDULE",
    stat: "RPG",
  },
];

const LeagueContent = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [activeTab, setActiveTab] = useState("DETAILS");
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const isOwner = useSelector(isOwnerValue);

  const displayTabContent = () => {
    switch (activeTab) {
      case "DETAILS":
        return <Details navigation={navigation} />;
      case "PARTICIPANTS":
        return <Division navigation={navigation} />;
      case "GAME & SCHEDULE":
        return <GameAndSchedule navigation={navigation} />;
    }
  };

  const renderTabs = ({ item }) => (
    <View style={styles.tabButtonContainer}>
      <TouchableOpacity onPress={() => setActiveTab(item.name)}>
        <Text
          style={[
            styles.tabButtonText,
            styles.activeTabButtonText(item.name, activeTab, isOwner),
          ]}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabsButtonContainer}>
        <FlatList
          horizontal
          data={tab}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderTabs}
          showsHorizontalScrollIndicator={false}
        ></FlatList>
      </View>

      {displayTabContent()}
    </View>
  );
};

export default LeagueContent;
