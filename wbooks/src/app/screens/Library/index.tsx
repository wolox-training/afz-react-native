import React from 'react';
import Dummy from '@app/screens/Dummy';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import icLibrary from '@assets/ic_library.png';
import icLibraryActive from '@assets/ic_library_active.png';
import icSettings from '@assets/ic_settings.png';
import icSettingsActive from '@assets/ic_settings_active.png';
import Colors from '@constants/Colors';
import BookList from '@components/BookList';

import styles from './styles';

const Tab = createBottomTabNavigator();

function Library() {
  const tabBarOptions = ({ route }: any) => ({
    tabBarIcon: ({ focused }: any) => {
      let iconName = focused ? icSettingsActive : icSettings;
      const tintColor = focused ? Colors.secondary : Colors.opacityColor;
      if (route.name === 'BookList') {
        iconName = focused ? icLibraryActive : icLibrary;
      }
      return <Image source={iconName} style={[styles.iconTabBar, { tintColor }]} />;
    }
  });
  return (
    <Tab.Navigator screenOptions={tabBarOptions}>
      <Tab.Screen name="BookList" component={BookList} />
      <Tab.Screen name="Dummy" component={Dummy} />
    </Tab.Navigator>
  );
}

export default Library;
