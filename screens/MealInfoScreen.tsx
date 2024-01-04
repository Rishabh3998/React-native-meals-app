import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const MealInfo = ({ route }: any) => {
  const { displayMeals } = route.params;
  return (
    <View style={styles.rootScreen}>
      <Image
        source={{ uri: displayMeals.imageUrl }}
        width={250}
        height={250}
        style={styles.imageContainer}
      />
      <Text style={styles.title}>{displayMeals.title}</Text>
      <Text style={styles.subTitles}>Ingredients: </Text>
      <View>
        <FlatList
          data={displayMeals.ingredients}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => (
            <Text style={styles.subList}>{itemData.item}</Text>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <Text style={styles.subTitles}>Steps to cook:</Text>
      <View>
        <FlatList
          data={displayMeals.steps}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => (
            <Text style={styles.subList}>{itemData.item}</Text>
          )}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
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
    backgroundColor: "#f5d142",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
