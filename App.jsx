import React from 'react';
import Navigators from './src/navigators';
import 'react-native-gesture-handler';
import {UserLocationProvider} from './src/contexts/userLocationContext';
export default function App() {
  return (
    <UserLocationProvider>
      <Navigators />
    </UserLocationProvider>
  );
}
