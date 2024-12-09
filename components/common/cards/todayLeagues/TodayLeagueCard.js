import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./todayLeagueCard.style";

import { checkImageUrl } from "../../../../utils/utils";

const TodayLeagueCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(0,0,0,0.5)", "transparent"]}
        style={styles.todayContentContainer}
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0.5, y: 0 }}
      >
        <View style={styles.leagueNameContainer}>
          <Text style={styles.leagueNameText}>
            {item.league_name.length > 8
              ? item.league_name.substring(0, 18 - 3) + "..."
              : item.league_name}
          </Text>
        </View>
        <View style={styles.matchContainer}>
          <View style={styles.teamAContainer}>
            <Image
              source={{
                uri: checkImageUrl(item.team_a.image)
                  ? item.team_a.image
                  : item.team_a.image,
              }}
              resizeMode="contain"
              style={styles.teamImage}
            />
            <Text style={styles.teamScore}>{item.team_a.score}</Text>
          </View>
          <View style={styles.dividerContainer}>
            <Text style={styles.dividerQuarterNumberText}>
              {item.quarter}th
            </Text>
            <Text style={styles.dividerQuarterText}>QTR</Text>
          </View>
          <View style={styles.teamBContainer}>
            <Image
              source={{
                uri: checkImageUrl(item.team_b.image)
                  ? item.team_b.image
                  : item.team_b.image,
              }}
              resizeMode="contain"
              style={styles.teamImage}
            />
            <Text style={styles.teamScore}>{item.team_b.score}</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default TodayLeagueCard;
