import React from 'react';
import BookList from '@app/components/BookList';
import { createStackNavigator } from '@react-navigation/stack';
import BookDetails from '@app/screens/BookDetails';
import Header from '@components/Header';

const Stack = createStackNavigator();

function Library() {
  const header = () => {
    return <Header title={'BOOK DETAILS'} />;
  };
  return (
    <Stack.Navigator initialRouteName="BookList">
      <Stack.Screen name="BookList" component={BookList} options={{ headerStyle: { height: 0 } }} />
      <Stack.Screen name="BookDetails" component={BookDetails} options={{ header }} />
    </Stack.Navigator>
  );
}

export default Library;
