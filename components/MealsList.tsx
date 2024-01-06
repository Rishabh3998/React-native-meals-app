import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MealsList = ({ displayMeals }: any) => {
  const navigate: any = useNavigation();
  return (
    <View style={styles.rootScreen}>
      <View style={styles.itemContainer}>
        <Pressable
          android_ripple={{ color: "#fff" }}
          style={({ pressed }) => (pressed ? styles.iosPressed : null)}
          onPress={() =>
            navigate.navigate("Meal Info", {
              displayMeals: displayMeals,
            })
          }
        >
          <Image
            source={{ uri: displayMeals.imageUrl }}
            width={250}
            height={250}
            style={styles.imageContainer}
          />
          <Text style={styles.title}>{displayMeals.title}</Text>
          <Text
            style={styles.subTitle}
          >{`Duration: ${displayMeals.duration} min`}</Text>
          <Text
            style={styles.subTitle}
          >{`Difficulty level: ${displayMeals.complexity}`}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  iosPressed: {
    opacity: 0.75,
    color: "#756AB6",
  },
  itemContainer: {
    backgroundColor: "#756AB6",
    padding: 20,
    margin: 15,
    borderRadius: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  imageContainer: {
    flex: 1,
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
    color: "#fff",
  },
  subTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
  },
});
