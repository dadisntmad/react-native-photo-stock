/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { MaterialIcons, Ionicons, Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Image } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import NotFoundScreen from '../screens/NotFoundScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { BrowseScreen } from '../screens/BrowseScreen';
import { RootStackParamList, RootTabParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { DetailedPictureScreen } from '../screens/DetailedPictureScreen';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import { ProfileScreen } from '../screens/ProfileScreen';
import { BrowseDetailedScreen } from '../screens/BrowseDetailedScreen';
import { FoundByCategoryScreen } from '../screens/FoundByCategoryScreen';
import { SearchResultScreen } from '../screens/SearchResultScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const author = useSelector(({ photos }: RootState) => photos.selectedImage);
  const owner = useSelector(({ categories }: RootState) => categories.selectedImage);
  const categoryTitle = useSelector(({ categories }: RootState) => categories.categoryTitle);
  const searchValue = useSelector(({ categories }: RootState) => categories.searchValue);

  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen
        name="Detailed"
        component={DetailedPictureScreen}
        options={{
          title: author.user?.name,
        }}
      />
      <Stack.Screen
        name="BrowseDetailed"
        component={BrowseDetailedScreen}
        options={{ title: owner.user?.name }}
      />
      <Stack.Screen
        name="FoundByCategory"
        component={FoundByCategoryScreen}
        options={{ title: categoryTitle }}
      />
      <Stack.Screen
        name="SearchResult"
        component={SearchResultScreen}
        options={{ title: searchValue }}
      />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <Image
              source={require('../assets/images/logo.png')}
              style={{ width: 75, height: 75, resizeMode: 'contain' }}
            />
          ),
          headerLeftContainerStyle: {
            paddingLeft: 14,
          },
          title: '',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <MaterialIcons name="image" size={30} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={BrowseScreen}
        options={{
          title: '',
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <Ionicons name="md-search-sharp" size={30} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={ProfileScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <Feather name="user" size={30} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
