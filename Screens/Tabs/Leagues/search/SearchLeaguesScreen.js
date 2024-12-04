import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useState, useEffect, useContext } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./searchLeagues.style";
import { BASE_URL } from "../../../../utils/config";
import { AuthContext } from "../../../../context/AuthContext";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePlayerDetails } from "../../../../api/userApi";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import SearchHeader from "../../../../components/header/searchHeader/SearchHeader";
import { Iconify } from "react-native-iconify";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchLeagues } from "../../../../api/leagueApi";
import { useDispatch } from "react-redux";
import { setSearch } from "../../../../features/leaguesFilter/leaguesFilterSlice";

const SearchLeaguesScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { userToken } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const [text, setText] = useState(null);
  const [data, setData] = useState([]);
  const [history, setHistory] = useState([]);
  const profile = queryClient.getQueryData(["profile"]);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [leagues, setLeagues] = useState([]);
  const [page, setPage] = useState(1);
  let timeout;

  const { mutateAsync: fetchLeaguesMutation } = useMutation({
    mutationFn: fetchLeagues,
    onSuccess: (data) => {
      setLeagues((prevData) => [...prevData, ...data.data]);
      setHasMore(data.next_page_url !== null);
      setRefreshing(false);
      setIsLoading(false);
    },
  });

  const recover = async () => {
    let history = await AsyncStorage.getItem("history");
    if (history) {
      setHistory(JSON.parse(history));
    }
  };

  const onChangeText = (text) => {
    clearTimeout(timeout); // Clear previous timeout
    setText(text);
    timeout = setTimeout(() => {
      handleSearchLeagues(text); // Call handleSearch after 500ms delay
    }, 500);
  };

  const handleSearchLeagues = async (text) => {
    const initialParams = {
      search: text,
    };

    const params = {
      ...initialParams,
    };

    try {
      await fetchLeaguesMutation({ params });
    } catch (e) {
      console.log(e.response);
    }
  };

  const handleSearch = (item) => {
    let historyArr = history;
    historyArr.push({ name: item.name });

    let result = history.reduce((unique, o) => {
      if (!unique.some((obj) => obj.name === o.name)) {
        unique.push(o);
      }
      return unique;
    }, []);

    dispatch(setSearch(item.name));
    navigation.navigate("Leagues");
    setHistory(result);
    AsyncStorage.setItem("history", JSON.stringify(result));
    setText(null);
  };

  const handleRemoveHistory = (item) => {
    let result = history.filter((history) => history.name !== item.name);

    setHistory(result);
    AsyncStorage.setItem("history", JSON.stringify(result));
  };

  useEffect(() => {
    recover();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <SearchHeader
        navigation={navigation}
        text={text}
        setText={onChangeText}
      />
      {text ? (
        <View style={styles.recentSearchesContainer}>
          {leagues?.map((item) => (
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
      ) : (
        <View style={styles.recentSearchesContainer}>
          <Text style={{ opacity: 0.5, marginBottom: 20 }}>Recent search</Text>
          {history?.map((item) => (
            <View
              key={item.name}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 15,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Iconify
                  icon="subway:refresh-time"
                  size={hp(3)}
                  style={{ opacity: 0.5, marginRight: 10 }}
                />
                <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity onPress={() => handleRemoveHistory(item)}>
                  <Iconify icon="heroicons-outline:x" size={hp(3)} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchLeaguesScreen;
