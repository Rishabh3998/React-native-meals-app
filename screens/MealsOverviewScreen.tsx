import { Image, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/data";

const MealsOverviewScreen = ({ route }: any) => {
  const { categoryId } = route.params;
  const displayMeals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(categoryId);
  });

  console.log(displayMeals);

  return (
    <View style={styles.rootScreen}>
      <Image
        source={{ uri: displayMeals[0].imageUrl }}
        width={300}
        height={300}
      />
      <Text>{displayMeals[0].title}</Text>
      <Text>{displayMeals[0].affordability}</Text>
      <Text>{displayMeals[0].complexity}</Text>
      <Text>
        {displayMeals[0].isVegetarian ? "Vegetarian" : "Non-vegetarian"}
      </Text>
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
});
