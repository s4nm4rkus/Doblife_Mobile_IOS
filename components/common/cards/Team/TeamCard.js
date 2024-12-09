import { View, Text, Image } from "react-native";
import styles from "./teamCard.style";

import { checkImageUrl } from "../../../../utils/utils";

const TeamCard = ({ data }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: checkImageUrl(data.team_logo) ? data.team_logo : data.team_logo,
        }}
        resizeMode="contain"
        style={styles.teamImage}
      />
      <Text style={styles.teamNameText}>{data.team_name}</Text>
    </View>
  );
};

export default TeamCard;
