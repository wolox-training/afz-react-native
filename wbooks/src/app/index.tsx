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
import CommentsList from '@app/components/CommentsList';
import { createStackNavigator } from '@react-navigation/stack';

declare global {
  interface Console {
    tron: any;
  }
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CommentsList">
        <Stack.Screen name="CommentsList" component={CommentsList} />
        <Stack.Screen name="BookList" component={BookList} options={{ headerShown: false }} />
        <Stack.Screen name="BookDetails" component={BookDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
