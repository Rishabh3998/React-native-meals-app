import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealInfo from "./screens/MealInfoScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <SafeAreaView style={styles.container}>
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Categories"
          screenOptions={{
            headerStyle: { backgroundColor: "#000" },
            headerTintColor: "#fff",
            contentStyle: { backgroundColor: "#fff" },
          }}
        >
          <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
              title: "Categories",
            }}
          />
          <Stack.Screen
            name="Meals"
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const name = (route.params as { name?: string })?.name;
            //   return {
            //     title: name || "",
            //   };
            // }}
          />
          <Stack.Screen
            name="Meal Info"
            component={MealInfo}
            options={{
              title: "Meal details",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
    // </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24180ff",
  },
});
