import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/data";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import MealsList from "../components/MealsList";
import { useSelector } from "react-redux";

const FavoritesScreen = () => {
  // const favoriteMealCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state: any) => state.favoriteMeals.ids);
  // const favorites = favoriteMealCtx.ids; // From react context API
  const favorites = favoriteMealIds; // From redux store

  const displayMeals = MEALS.filter((meal) => favorites?.includes(meal.id));

  if (displayMeals.length === 0) {
    return (
      <View style={styles.rootScreen}>
        <Text style={styles.title}>You have no favorite meals yet.</Text>
      </View>
    );
  }

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

export default FavoritesScreen;

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
  title: {
    fontSize: 20,
    fontWeight: "600",
    flexWrap: "wrap",
  },
});
