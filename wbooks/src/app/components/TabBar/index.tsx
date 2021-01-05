import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Library from '@app/screens/Library';
import Dummy from '@app/screens/Dummy';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import icLibrary from '@assets/ic_library.png';
import icLibraryActive from '@assets/ic_library_active.png';
import icSettings from '@assets/ic_settings.png';
import icSettingsActive from '@assets/ic_settings_active.png';
import Colors from '@constants/Colors';

import styles from './styles';

const Tab = createBottomTabNavigator();

function TabBar() {
  const tabBarOptions = ({ route }: any) => ({
    tabBarIcon: ({ focused }: any) => {
      let iconName = focused ? icSettingsActive : icSettings;
      const tintColor = focused ? Colors.secondary : Colors.opacityColor;
      if (route.name === 'Library') {
        iconName = focused ? icLibraryActive : icLibrary;
      }
      return <Image source={iconName} style={[styles.iconTabBar, { tintColor }]} />;
    }
  });
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={tabBarOptions}>
        <Tab.Screen name="Library" component={Library} />
        <Tab.Screen name="Dummy" component={Dummy} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabBar;
