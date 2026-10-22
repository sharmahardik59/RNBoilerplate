import {WrapperContainer} from '@components/atoms';
import EmptyComp from '@components/molecules/EmptyComp';
import HomeHeader from '@components/molecules/HomeHeader';
import HomeListHeader from '@components/molecules/HomeListHeader';
import HomeListItems from '@components/molecules/HomeListItems';
import type {ModalSheetRef} from '@components/molecules/ModalSheet';
import ModalSheet from '@components/molecules/ModalSheet';
import constants from '@constants/index';
import type {HomeStackParamList} from '@navigations/MainStack';
import type {NavigationProp} from '@react-navigation/native';
import { useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from '@redux/hooks';
import {moderateScale} from '@utils/scaling';
import React, {useCallback, useEffect, useRef} from 'react';
import {FlatList, View} from 'react-native';
import {getProduct} from 'src/services/productService';

const ItemSeparatorComponent = (): React.JSX.Element => (
  <View style={{height: moderateScale(20)}} />
);

const Home = (): React.JSX.Element => {
  // Navigation state variables
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();
  const modalSheetRef = useRef<ModalSheetRef>(null);

  // Redux global variables
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.common.isLoading);
  const productList = useSelector(state => state.product.productList);

  // Callbacks
  const handleToggleSheet = useCallback(() => {
    if (modalSheetRef.current) {
      modalSheetRef.current.toggleSheet();
    }
  }, []);

  // Effects
  useEffect(() => {
    dispatch(getProduct(constants.DATA_LIMIT));
  }, [dispatch]);

  // Renders
  return (
    <WrapperContainer>
      <View style={{marginHorizontal: moderateScale(20)}}>
        <HomeHeader onPress={handleToggleSheet} title="BLOGS_POT" />
      </View>
      <FlatList
        data={productList}
        ItemSeparatorComponent={ItemSeparatorComponent}
        keyExtractor={(item, index) => String(item?.id || index)}
        ListEmptyComponent={<EmptyComp isError={true} isLoading={isLoading} />}
        ListHeaderComponent={<HomeListHeader />}
        renderItem={props => <HomeListItems {...props} navigation={navigation} />}
      />

      {/* Bottom Modal Sheet */}
      <ModalSheet ref={modalSheetRef} />
    </WrapperContainer>
  );
};

export default Home;
