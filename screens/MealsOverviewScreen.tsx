import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/data";
import MealsList from "../components/MealsList";
import { useLayoutEffect } from "react";

const MealsOverviewScreen = ({ route, navigation }: any) => {
  const { categoryId, name } = route.params;

  // setting options for this screen
  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation, name]);

  const displayMeals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(categoryId);
  });

  return (
    <View style={styles.rootScreen}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <MealsList displayMeals={itemData.item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    borderColor: "#000",
    borderWidth: 1,
    marginVertical: 20,
    marginHorizontal: 15,
  },
});
