import React from 'react';
import {Text, View} from 'react-native';
import { Provider } from 'react-redux';
import { AddDescription } from './src/screens/AddDescription';
import MainNavigator from './src/services/config/navigation';
import {PersistGate} from 'redux-persist/integration/react';
import store from './src/store';
import {persistor} from './src/store';
import Videocalling from './src/screens/videocallingscreen';
import RateProvider from './src/screens/RateProvider';

export default function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MainNavigator/>
      {/* <Videocalling /> */}
    </PersistGate>
    </Provider>
  );
}
