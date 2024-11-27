import { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  ImageBackground,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import styles from "./carousel.style";
import Carousel from "react-native-reanimated-carousel";

const { width: screenWidth } = Dimensions.get("window");

const Carousels = ({ data }) => {
  const flatListRef = useRef(null);
  const ref = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event) => {
    const offset = event.nativeEvent.contentOffset.x;
    const newCurrentIndex = Math.round(offset / screenWidth);
    setCurrentIndex(newCurrentIndex);
  };

  const renderItem = ({ item }) => (
    <ImageBackground
      source={item.imgUrl}
      style={[styles.card, { flex: 1 }]}
      imageStyle={styles.imageBackground}
    >
      <View style={styles.overlay} />
      <Text style={styles.cardTitleText}>{item.title}</Text>
      <Text style={styles.cardBodyText}>{item.body}</Text>
    </ImageBackground>
  );

  const renderPaginationDots = () => {
    return (
      <View style={styles.paginationContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              { opacity: index === currentIndex ? 1 : 0.3 },
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <>
      <Carousel
        loop
        ref={ref}
        width={wp(90)}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={500}
        renderItem={renderItem}
        onSnapToItem={(index) => setCurrentIndex(index)}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
      />
      {renderPaginationDots()}
    </>
  );
};

export default Carousels;
