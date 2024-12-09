import { View, Text, Image } from "react-native";
import styles from "./nameCard.stye";

import { checkImageUrl } from "../../../../utils/utils";

const NameCard = ({ profileImageUrl, textSize, name, haveInfo, info }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: checkImageUrl(profileImageUrl)
            ? profileImageUrl
            : profileImageUrl,
        }}
        resizeMode="contain"
        style={styles.teamImage}
      />
      <View>
        <Text style={[styles.nameText, { fontSize: textSize }]}>{name}</Text>
        {haveInfo && <Text style={styles.infoText}>{info}</Text>}
      </View>
    </View>
  );
};

export default NameCard;
