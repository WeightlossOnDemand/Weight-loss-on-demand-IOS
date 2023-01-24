import React, {useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {CustomTextFiel} from '../../component/textFiled';
import {colors, sizes, fontSize} from '../../services';
import {WebView} from 'react-native-webview';

export const BeyondScreen = ({navigation}) => {
  
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header
          title={'Our Website'}
          skip={true}
          onPress={() => navigation.navigate('')}
        />
      </View>

      <WebView
        startInLoadingState={true}
        javaScriptEnabled
        domStorageEnabled
        allowFileAccessFromFileURLs
        originWhitelist={['*']}
        mixedContentMode="compatibility"
        source={{uri:'https://weightlossondemand.com/'}}
        />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  map: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },
  container1: {
    padding: sizes.screenWidth * 0.05,
  },
  hedtext: {
    fontSize: fontSize.h3,
    color: colors.black,
    fontWeight: 'bold',
  },
  hedtext1: {
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight: 'bold',
  },
  hedtext2: {
    fontSize: fontSize.medium,
    color: colors.black,
    fontWeight: 'bold',
  },
  hedtext2: {
    top: sizes.screenHeight * 0.02,
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight: 'bold',
  },
  hedtextcon: {
    marginTop: sizes.screenHeight * 0.05,
  },
  buttnView: {
    // marginRight:sizes.screenWidth*0.06,
    marginTop: sizes.screenHeight * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.h6,
    fontWeight: 'bold',
  },
  buttonView: {
    marginTop: sizes.screenHeight * 0.02,
    backgroundColor: colors.secondary,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.92,
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: sizes.screenWidth * 0.2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inonecon: {
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    width: sizes.screenWidth * 0.94,
  },
  twoitem: {
    right: sizes.screenWidth * 0.03,
    marginBottom: sizes.screenHeight * 0.03,
    width: sizes.screenWidth * 0.9,
  },
  lstyle: {
    fontSize: fontSize.h6,
    color: colors.black,
    fontWeight: '400',
    lineHeight: sizes.screenHeight * 0.05,
  },

  te: {
    top: sizes.screenHeight * 0.02,
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight: 'bold',
  },
  addanother: {
    fontSize: fontSize.large,
    color: colors.secondary,
    fontWeight: 'bold',
  },
  fieldleft: {
    right: sizes.screenWidth * 0.04,
  },

  filedcon: {
    marginBottom: sizes.screenHeight * 0.03,
  },
});
