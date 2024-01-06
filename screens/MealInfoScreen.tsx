import { useContext, useLayoutEffect, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FavoritesContext } from "../store/context/favorites-context";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

const MealInfo = ({ route, navigation }: any) => {
  // const favoriteMealCtx = useContext(FavoritesContext);
  const favoriteMealsIds = useSelector((state: any) => state.favoriteMeals.ids);
  const dispatch = useDispatch();
  const { displayMeals } = route.params;
  const mealId: string = displayMeals?.id;

  // const isFavorite: boolean = favoriteMealCtx.ids.includes(mealId);
  const isFavorite: boolean = favoriteMealsIds.includes(mealId);

  const handleFavorite = () => {
    if (isFavorite) {
      // favoriteMealCtx.removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // favoriteMealCtx.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Meal details",
      headerRight: () => {
        return (
          <Pressable onPress={handleFavorite}>
            <Ionicons
              name="heart"
              size={24}
              color={isFavorite ? "red" : "white"}
            />
          </Pressable>
        );
      },
    });
  }, [isFavorite, navigation]);

  return (
    <View style={styles.rootScreen}>
      <View>
        <Image
          source={{ uri: displayMeals.imageUrl }}
          width={250}
          height={250}
          style={styles.imageContainer}
        />
        <Text style={[styles.title, styles.textShadow]}>
          {displayMeals.title}
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        <Text style={styles.subTitles}>Ingredients: </Text>
        <View>
          {displayMeals.ingredients.map((item: string) => (
            <Text key={item} style={styles.subList}>
              {item}
            </Text>
          ))}
        </View>
        <Text style={styles.subTitles}>Steps to cook:</Text>
        <View>
          {displayMeals.steps.map((item: string) => (
            <Text key={item} style={styles.subList}>
              {item}
            </Text>
          ))}
        </View>
        <Text
          style={styles.subTitles}
        >{`Budget: ${displayMeals.affordability}`}</Text>
        <Text
          style={styles.subTitles}
        >{`Cooking effort: ${displayMeals.complexity}`}</Text>
        <Text style={styles.subTitles}>
          {displayMeals.isVegetarian ? "Vegetarian" : "Non-vegetarian"}
        </Text>
      </ScrollView>
    </View>
  );
};

export default MealInfo;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imageContainer: {
    margin: 20,
    alignSelf: "center",
    borderColor: "#000",
    borderWidth: 5,
    borderRadius: 20,
    overflow: "hidden",
  },
  title: {
    fontSize: 24,
    paddingBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  subTitles: {
    fontSize: 18,
    paddingVertical: 10,
    fontWeight: "500",
    paddingHorizontal: 10,
  },
  subList: {
    flex: 1,
    fontSize: 15,
    backgroundColor: "#BEADFA",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  scrollContainer: {
    marginBottom: 10,
  },
  textShadow: {
    padding: 15,
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 10 },
    textShadowRadius: 100,
  },
});
