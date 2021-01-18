import React from 'react';
import BookList from '@app/components/BookList';
import { createStackNavigator } from '@react-navigation/stack';
import BookDetails from '@app/screens/BookDetails';
import HeaderContainer from '@components/Header';
import ListSearch from '@components/ListSearch';
import { Header } from '@interfaces/Header';

const Stack = createStackNavigator();

function Library() {
  const header = ({ route, title }: Header) => {
    return <HeaderContainer title={title} route={route} />;
  };
  return (
    <Stack.Navigator initialRouteName="BookList">
      <Stack.Screen
        name="BookList"
        component={BookList}
        options={{ header: route => header({ route, title: 'LIBRARY' }) }}
      />
      <Stack.Screen
        name="BookDetails"
        component={BookDetails}
        options={{ header: route => header({ route, title: 'BOOK DETAILS' }) }}
      />
      <Stack.Screen
        name="ListSearch"
        component={ListSearch}
        options={{ header: route => header({ route, title: '' }) }}
      />
    </Stack.Navigator>
  );
}

export default Library;
