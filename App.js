import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer'
import CategoriesScreen from './screens/CategoriesScreen';
import MealsScreen from './screens/MealsScreen';
import MealDetailScreen from './screens/MealDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import FavoriteContextProvider from './store/context/favorite-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const BottonTabs = () => {

  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle: { backgroundColor: '#590b60' },
        headerTintColor: '#fff',
        contentStyle: { backgroundColor: '#ead9eb' },
      }}>
      <Tab.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name='star' />
          ),
          tabBarActiveTintColor: '#590b60'
        }} />
      <Tab.Screen
        name="Home"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name='home' />
          ),
          tabBarActiveTintColor: '#590b60'
        }} />

    </Tab.Navigator>
  )
};

// const Drawer = createDrawerNavigator();
// const DrawerNavigator = () => {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name='test' component={CategoriesScreen} />
//       <Drawer.Screen name='test2' component={FavoritesScreen} />
//     </Drawer.Navigator>
//   )
// }
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoriteContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#590b60' },
              headerTintColor: '#fff',
              contentStyle: { backgroundColor: '#ead9eb' },

            }}
          >
            <Stack.Screen
              name='MealsCategories'
              component={BottonTabs}
              options={{ title: 'All Categories', headerShown: false }}
            />
            <Stack.Screen
              name='MealsOverview'
              component={MealsScreen} />
            <Stack.Screen
              name='MealDetails'
              component={MealDetailScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoriteContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootScreen: {
    flex: 1,

  },
});
