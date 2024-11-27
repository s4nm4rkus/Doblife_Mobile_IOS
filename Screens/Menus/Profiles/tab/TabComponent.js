import { View, Text, TouchableOpacity, FlatList, Button } from "react-native";

import styles from "./tabComponent.style";
import { SIZES } from "../../../../constants/theme";

const TabButton = ({ name, activeTab, onHandleSearchType }) => (
  <TouchableOpacity
    style={styles.btn(name, activeTab)}
    onPress={onHandleSearchType}
  >
    <Text style={styles.btnText(name, activeTab)}>{name}</Text>
  </TouchableOpacity>
);

const TabComponent = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      {tabs?.map((item) => (
        <TabButton
          key={item}
          name={item}
          activeTab={activeTab}
          onHandleSearchType={() => setActiveTab(item)}
        />
      ))}
      {/* <FlatList
				data={tabs}
				renderItem={({ item }) => (
					<TabButton
						name={item}
						activeTab={activeTab}
						onHandleSearchType={() => setActiveTab(item)}
					/>
				)}
				horizontal
				showsHorizontalScrollIndicator={false}
				keyExtractor={item => item}
			/> */}
    </View>
  );
};

export default TabComponent;
