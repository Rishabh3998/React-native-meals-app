import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealInfo from "./screens/MealInfoScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import FavoritesContextProvider from "./store/context/favorites-context";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#332941" },
        headerTintColor: "#fff",
        sceneContainerStyle: { backgroundColor: "#E5D4FF" },
        drawerContentStyle: { backgroundColor: "#332941" },
        drawerInactiveTintColor: "#fff",
        drawerActiveTintColor: "#C499F3",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: { backgroundColor: "#332941" },
        headerTintColor: "#fff",
        contentStyle: { backgroundColor: "#E5D4FF" },
      }}
    >
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Meals" component={MealsOverviewScreen} />
      <Stack.Screen name="Meal Info" component={MealInfo} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
};

export default App;
