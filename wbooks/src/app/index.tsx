/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BookList from '@app/components/BookList';
import BookDetails from '@app/screens/BookDetails';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderContainer from '@components/Header';

declare global {
  interface Console {
    tron: any;
  }
}

const Stack = createStackNavigator();

const App = () => {
  const header = () => {
    return <HeaderContainer title={'BOOK DETAILS'} />;
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BookList">
        <Stack.Screen name="BookList" component={BookList} options={{ headerStyle: { height: 0 } }} />
        <Stack.Screen name="BookDetails" component={BookDetails} options={{ header }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
