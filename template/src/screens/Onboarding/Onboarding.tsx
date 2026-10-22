import {TextContainer, WrapperContainer} from '@components/atoms';
import fontFamily from '@constants/fontFamily';
import type {AuthStackParamList} from '@navigations/AuthStack';
import type {NavigationProp} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {height, moderateScale, scale, verticalScale, width} from '@utils/scaling';
import React, {useRef, useState} from 'react';
import type {NativeScrollEvent, NativeSyntheticEvent, ScrollViewInstance} from 'react-native';
import {Image, ScrollView, View} from 'react-native';
import {useStyles} from 'react-native-unistyles';
import stylesheet from './styles';

const onBoardData = [{id: 1}, {id: 2}, {id: 3}];

const Onboarding = (): React.JSX.Element => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const [index, setIndex] = useState<number>(0);
  const {styles} = useStyles(stylesheet);
  const scrollRef = useRef<null | ScrollViewInstance>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const newIndex = Number((event.nativeEvent.contentOffset.x / (width - 20)).toFixed(0));
    setIndex(newIndex);
  };

  return (
    <WrapperContainer>
      <View style={styles.container}>
        <ScrollView
          horizontal
          onMomentumScrollEnd={handleScroll}
          pagingEnabled
          ref={scrollRef}
          showsHorizontalScrollIndicator={false}>
          {onBoardData.map(val => (
            <View
              key={String(val.id)}
              style={{
                paddingHorizontal: moderateScale(16),
                width,
              }}>
              <Image
                resizeMode="contain"
                source={{
                  uri: 'https://img.freepik.com/free-vector/onboarding-concept-illustration_114360-1085.jpg',
                }}
                style={{
                  height: height / 2.1,
                  width: '100%',
                }}
              />
              <TextContainer
                isDynamicText
                style={{
                  fontSize: scale(32),
                  lineHeight: scale(42),
                  marginVertical: verticalScale(16),
                }}
                text="Connect people around the world"
              />
              <TextContainer
                isDynamicText
                style={{
                  fontFamily: fontFamily.regular,
                  fontSize: scale(14),
                }}
                text="Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
              />
            </View>
          ))}
        </ScrollView>
        <View style={styles.flexView}>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            {onBoardData.map((val, i) => (
              <View key={String(val.id)} style={styles.dotStyle(i === index)} />
            ))}
          </View>
          <View>
            <TextContainer onPress={() => navigation.navigate('Login')} text="SKIP" />
          </View>
        </View>
      </View>
    </WrapperContainer>
  );
};

export default Onboarding;
