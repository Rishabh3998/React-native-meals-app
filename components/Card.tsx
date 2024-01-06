import { Pressable, StyleSheet, Text, View, Platform } from "react-native";

// Notes:
// Since this is not a screen component hence we will not get props like route and navigation
// from navigator therefore we have to use useNavigation() hook to do the navigation via name
// of the navigator and passing params, and we can setOptions too.

// import { useNavigation } from "@react-navigation/native";
// const navigate = useNavigation();
// onPress={() =>
//   navigate.navigate("Meal Info", {
//     displayMeals: displayMeals,
//   })
// }

// we can use this hook if we want to navigate from a nested component which is not a screen

const Card = ({ title, color, onPress }: any) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: color }}
        style={({ pressed }) => [
          styles.button,
          pressed
            ? [styles.buttonPressedIOS, { backgroundColor: color }]
            : null,
        ]}
        onPress={onPress}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    margin: 16,
    borderRadius: 30,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 4, height: 8 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  buttonPressedIOS: {
    opacity: 0.25,
    overflow: "hidden",
    borderRadius: 30,
  },
});
