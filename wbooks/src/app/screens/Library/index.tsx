import React from 'react';
import BookList from '@app/components/BookList';
import { createStackNavigator } from '@react-navigation/stack';
import BookDetails from '@app/screens/BookDetails';

const Stack = createStackNavigator();

function Library() {
  return (
    <Stack.Navigator initialRouteName="BookList">
      <Stack.Screen name="BookList" component={BookList} options={{ headerShown: false }} />
      <Stack.Screen name="BookDetails" component={BookDetails} />
    </Stack.Navigator>
  );
}

export default Library;
