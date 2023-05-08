import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Images from '../constants/Images';
import {COLORS} from '../constants/Themes';

const {width, height} = Dimensions.get('window');

const OnboardingScreen = ({navigation}) => {
  const [slides, setSlides] = useState([
    {
      id: '1',
      image: Images.Carousel1,
      title: 'Silk cocoons',
      subtitle: 'Foc.io helps you boost your productivity on a different level',
    },
    {
      id: '2',
      image: Images.Carousel2,
      title: 'Yarn',
      subtitle: 'Foc.io helps you boost your productivity on a different level',
    },
    {
      id: '3',
      image: Images.Carousel3,
      title: 'Fabric',
      subtitle: 'Foc.io helps you boost your productivity on a different level',
    },
  ]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const flatListRef = useRef();

  const updateCurrentSlideIndex = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex < slides.length) {
      const offset = nextSlideIndex * width;
      flatListRef?.current.scrollToOffset({offset});
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.slideContent}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
      </View>
    );
3  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={flatListRef}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={styles.slideList}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        keyExtractor={item => item.id}
        pagingEnabled
        renderItem={renderItem}
      />
      <View style={styles.bottomBar}>
        {currentSlideIndex === slides.length - 1 ? (
          <TouchableOpacity
            style={styles.getStartedButton}
            onPress={() => navigation.replace('LoginScreen')}>
            <Text style={styles.buttonText}>GET STARTED</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={goToNextSlide}
            style={styles.nextButton}>
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        )}
        <View style={styles.indicatorContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex === index && styles.activeIndicator,
              ]}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  slideContent: {
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.black1,
  },

  subtitle: {
    color: 'black',
    marginTop: 10,
    width: width * 0.75,

    textAlign: 'center',
    alignSelf: 'center',
  },
  image: {
    height: height * 0.65,
    width,
  },
  bottomBar: {
    height: 150,
    paddingVertical: 20,
    backgroundColor: '#fff',

    alignItems: 'center',
  },
  nextButton: {
    width: '30%',
    backgroundColor: '#0070C0',
    borderRadius: 5,
    padding: 10,
  },
  getStartedButton: {
    width: '50%',
    backgroundColor: '#0070C0',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  indicatorContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  indicator: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#bbb',
    marginHorizontal: 3,
  },
  activeIndicator: {
    width: '5%',
    backgroundColor: '#0070C0',
  },
});

export default OnboardingScreen;
