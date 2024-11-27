import { Text, View, TouchableOpacity } from "react-native";
import { useState, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./searchLeagues.style";
import { AuthContext } from "../../../../context/AuthContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import SearchHeader from "../../../../components/header/searchHeader/SearchHeader";
import { Iconify } from "react-native-iconify";
import { useDispatch } from "react-redux";
import { setSearch } from "../../../../features/leaguesFilter/leaguesFilterSlice";
import { fetchTeams } from "../../../../api/teamApi";

const SearchMyTeamsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { userToken } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const [text, setText] = useState(null);
  const [data, setData] = useState([]);
  const profile = queryClient.getQueryData(["profile"]);
  let timeout;

  const { mutateAsync: fetchTeamsMutation } = useMutation({
    mutationFn: fetchTeams,
    onSuccess: (data) => {
      setData(data);
    },
  });

  const onChangeText = (text) => {
    clearTimeout(timeout); // Clear previous timeout
    setText(text);
    timeout = setTimeout(() => {
      handleSearchTeams(text); // Call handleSearch after 500ms delay
    }, 500);
  };

  const handleSearchTeams = async (text) => {
    const initialParams = {
      search: text,
    };

    const params = {
      ...initialParams,
    };

    try {
      await fetchTeamsMutation({ params });
    } catch (e) {
      console.log(e.response);
    }
  };

  const handleSearch = (item) => {
    dispatch(setSearch(item.name));
    navigation.navigate("Leagues");
    setText(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchHeader
        navigation={navigation}
        text={text}
        setText={onChangeText}
      />
      <View style={styles.recentSearchesContainer}>
        {data?.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => handleSearch(item)}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 15,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
              <Iconify
                icon="heroicons-outline:search"
                size={hp(3)}
                style={{ opacity: 0.5 }}
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default SearchMyTeamsScreen;
