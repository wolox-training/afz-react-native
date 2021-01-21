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
import { createStackNavigator } from '@react-navigation/stack';
import BookDetails from '@screens/BookDetails';
import HeaderContainer from '@components/Header';
import ListSearch from '@components/ListSearch';
import { Header } from '@interfaces/Header';
import { Provider } from 'react-redux';
import store from '@redux/store';
import Login from '@screens/Login';
import Library from '@screens/Library';
import { NavigationContainer } from '@react-navigation/native';

declare global {
  interface Console {
    tron: any;
  }
}

const Stack = createStackNavigator();

const App = () => {
  const header = ({ route, title }: Header) => {
    return <HeaderContainer title={title} route={route} />;
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{ title: '', headerStyle: { height: 0 } }} />
          <Stack.Screen
            name="Library"
            component={Library}
            options={{ title: '', headerStyle: { height: 0 }, headerShown: false }}
          />
          <Stack.Screen
            name="BookDetails"
            component={BookDetails}
            options={{ header: route => header({ route: route.scene.route, title: 'BOOK DETAILS' }) }}
          />
          <Stack.Screen
            name="ListSearch"
            component={ListSearch}
            options={{ header: route => header({ route, title: '' }) }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
