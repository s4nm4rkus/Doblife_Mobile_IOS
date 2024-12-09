import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./ballFeedCard.style";
import { COLORS, FONT, SIZES } from "../../../../constants/theme";

import { checkImageUrl } from "../../../../utils/utils";
import * as ScreenOrientation from "expo-screen-orientation";

const BallFeedCard = ({ data }) => {
  ScreenOrientation.unlockAsync();
  return (
    <View style={styles.container}>
      <View style={styles.feedContentContainer}>
        <View style={styles.feedContentLeft}>
          <Text style={styles.leagueTitleText}>{data.league_name}</Text>
          <Text style={styles.leagueQuarterText}>
            {data.date ? `${data.date} | ${data.time}` : "4th Quarter"}
          </Text>
        </View>
        <View style={styles.feedContentRight}>
          <View style={styles.feedContentRightUpper}>
            <Image
              source={{
                uri: checkImageUrl(data.team_a.image)
                  ? data.team_a.image
                  : data.team_a.image,
              }}
              resizeMode="contain"
              style={styles.teamImage}
            />
            <View style={styles.teamStatsContainer}>
              {data.team_a.score ? (
                <Text style={styles.teamScore}>{data.team_a.score}</Text>
              ) : (
                <></>
              )}

              {data.team_a.score ? (
                <Text style={styles.teamName}>
                  {data.team_a.name.length > 17
                    ? data.team_a.name.substring(0, 17 - 3) + "..."
                    : data.team_a.name}
                </Text>
              ) : (
                <Text
                  style={{
                    fontFamily: FONT.medium,
                    fontSize: SIZES.medium,
                    color: COLORS.clr_light_white,
                  }}
                >
                  {data.team_a.name.length > 17
                    ? data.team_a.name.substring(0, 17 - 3) + "..."
                    : data.team_a.name}
                </Text>
              )}
            </View>
          </View>
          <View style={styles.feedContentRightDivider}>
            <View style={styles.dividerLeft} />
            <Text style={styles.dividerText}>VS</Text>
            <View style={styles.dividerRight} />
          </View>
          <View style={styles.feedContentRightLower}>
            <Image
              source={{
                uri: checkImageUrl(data.team_b.image)
                  ? data.team_b.image
                  : data.team_b.image,
              }}
              resizeMode="cover"
              style={styles.teamImage}
            />
            <View style={styles.teamStatsContainer}>
              {data.team_b.score ? (
                <Text style={styles.teamScore}>{data.team_b.score}</Text>
              ) : (
                <></>
              )}

              {data.team_b.score ? (
                <Text style={styles.teamName}>
                  {data.team_b.name.length > 17
                    ? data.team_b.name.substring(0, 17 - 3) + "..."
                    : data.team_b.name}
                </Text>
              ) : (
                <Text
                  style={{
                    fontFamily: FONT.medium,
                    fontSize: SIZES.medium,
                    color: COLORS.clr_light_white,
                  }}
                >
                  {data.team_b.name.length > 17
                    ? data.team_b.name.substring(0, 17 - 3) + "..."
                    : data.team_b.name}
                </Text>
              )}
            </View>
          </View>
        </View>
      </View>
      <View style={styles.feedInfoContainer}>
        <Image
          source={{
            uri: checkImageUrl(data.sponsor_image)
              ? data.sponsor_image
              : data.sponsor_image,
          }}
          resizeMode="contain"
          style={styles.sponsorImage}
        />
        <View style={styles.sponsorInfo}>
          <Text style={styles.footerLeagueInfoText}>
            {data.league_name.length > 10
              ? data.league_name.substring(0, 14 - 3) + "..."
              : data.league_name}{" "}
            |{" "}
            {data.team_a.name.length > 10
              ? data.team_a.name.substring(0, 10 - 3) + "..."
              : data.team_a.name}{" "}
            vs{" "}
            {data.team_b.name.length > 10
              ? data.team_b.name.substring(0, 10 - 3) + "..."
              : data.team_b.name}
          </Text>
          <Text style={styles.footerSponsorInfoText}>
            {data.sponsor} | {data.posted_date_duration} days ago
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BallFeedCard;
