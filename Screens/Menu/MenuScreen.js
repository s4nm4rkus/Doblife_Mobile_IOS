import { useCallback, useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  Animated,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useFocusEffect } from "@react-navigation/native";
import styles from "./menu.style";

import MenuNavigationButton from "../../components/common/buttons/MenuNavButton/MenuNavigationButton";
import { AuthContext } from "../../context/AuthContext";
import { useProfileData } from "../../hooks/useProfileData";
import {
  faArrowRightFromBracket,
  faBell,
  faGear,
  faPeopleGroup,
  faStar,
  faTrophy,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useMutation } from "@tanstack/react-query";
import { fetchPlayerDobcoins } from "../../api/profileApi";
import { capitalize } from "../../utils/helpers";
import {
  fetchTeamRequests,
  readProfileNotifications,
} from "../../api/requestApi";

const useFadeAnimation = (duration) => {
  const animatedValue = new Animated.Value(0);
  animatedValue.duration = duration;
  return animatedValue;
};

const buttonsData = [
  {
    title: "Profile",
    icon: faUser,
  },
  {
    title: "My Teams",
    icon: faPeopleGroup,
  },
  {
    title: "My League",
    icon: faTrophy,
  },
  {
    title: "Notifications",
    icon: faBell,
  },
  {
    title: "Account Settings",
    icon: faGear,
  },
];

const MenuScreen = ({ navigation }) => {
  const { logout, userToken } = useContext(AuthContext);
  const fadeAnimationShort = useFadeAnimation(500);
  const fadeAnimationLong = useFadeAnimation(1500);
  const [dobcoins, setDobcoins] = useState(0);
  const [notificationCount, setNotificationCount] = useState(0);

  const {
    data: profile,

    isError,
    error,
  } = useProfileData(userToken);

  const goToDobCoinsPage = () => {
    navigation.navigate("DobCoins");
  };

  const { mutateAsync: fetchTeamRequestsMutation } = useMutation({
    mutationFn: fetchTeamRequests,
    onSuccess: (data) => {
      setNotificationCount(data.length);
    },
  });

  const { mutateAsync: fetchPlayerDobcoinsMutation } = useMutation({
    mutationFn: fetchPlayerDobcoins,
    onSuccess: (data) => {
      setDobcoins(data);
    },
  });

  const { mutateAsync: readProfileNotificationsMutation } = useMutation({
    mutationFn: readProfileNotifications,
    onSuccess: (data) => {},
  });

  const handleFetchPlayerDobcoins = async () => {
    const params = {};

    try {
      await fetchPlayerDobcoinsMutation({ params, userToken });
    } catch (e) {}
  };

  const handleFetchTeamRequests = async () => {
    const params = {
      unread: true,
    };

    try {
      await fetchTeamRequestsMutation({ params, userToken });
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  const handleNotifications = () => {
    const params = {};

    try {
      readProfileNotificationsMutation({ params, userToken });
      navigation.navigate("Notifications");
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  useEffect(() => {
    handleFetchPlayerDobcoins();
  }, []);

  useFocusEffect(
    useCallback(() => {
      handleFetchTeamRequests();
    }, [])
  );

  useFocusEffect(() => {
    startFadeAnimation(fadeAnimationShort);
    startFadeAnimation(fadeAnimationLong);
  });

  const startFadeAnimation = (animation) => {
    Animated.timing(animation, {
      toValue: 1,
      duration: animation.duration,
      useNativeDriver: true,
    }).start();
  };

  const navigate = (item) => {
    switch (item.title) {
      case "Profile":
        navigation.navigate("Profiles");
        break;
      case "My Teams":
        navigation.navigate("MyTeams");
        break;
      case "My League":
        navigation.navigate("MyLeagues");
        break;
      case "Notifications":
        handleNotifications();
        break;
      case "Account Settings":
        navigation.navigate("AccountSettings");
        break;
      case "Logout":
        logout();
        break;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.closeIconContainer}
        onPress={() => navigation.navigate("Main")}
      >
        <FontAwesomeIcon icon={faXmark} size={hp(3.5)} />
      </TouchableOpacity>
      <View style={styles.profileContainer}>
        {profile.default_profile_pic ? (
          <Image
            source={{ uri: profile.default_profile_pic.image }}
            resizeMode="contain"
            style={styles.teamImage}
          />
        ) : (
          <Image
            source={require("../../assets/playerPlaceholders/player-placeholder-02.png")}
            resizeMode="contain"
            style={styles.teamImage}
          />
        )}
        <View style={styles.nameAndPointsContainer}>
          <Text style={[styles.nameText]}>{`${capitalize(
            profile?.lastname
          )}, ${capitalize(profile?.firstname)}`}</Text>
          <View style={styles.pointsContainer}>
            <TouchableOpacity
              style={styles.outerPoints}
              onPress={() => goToDobCoinsPage()}
            >
              <View style={styles.innerPoints}>
                <FontAwesomeIcon icon={faStar} color="#f18805" size={hp(1.4)} />
              </View>
              <Text style={styles.pointsText}>{dobcoins}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        {buttonsData.map((item, index) => (
          <MenuNavigationButton
            onPress={() => navigate(item)}
            key={index}
            icon={item.icon}
            title={item.title}
            iconColor={"#c42414"}
            notificationCount={notificationCount}
          />
        ))}
      </View>
      <View style={styles.logoutContainer}>
        <TouchableOpacity
          style={[styles.logoutButtonContainer]}
          onPress={() => logout()}
        >
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            size={hp(2.8)}
            style={styles.icon}
          />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <LinearGradient
        colors={["#c42414", "#7c0b00"]}
        style={styles.footer}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <Text style={styles.copyrightText}>DOBLIFE • Copyright 2023</Text>
      </LinearGradient>
    </View>
  );
};

export default MenuScreen;
