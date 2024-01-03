import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import Card from "../components/Card";
import { CATEGORIES } from "../data/data";

const CategoriesScreen = ({ navigation }: any) => {
  const handlePress = (id: string) => {
    navigation.navigate("Meals", {
      categoryId: id,
    });
  };

  return (
    <View style={styles.rootScreen}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            color={item.color}
            onPress={() => handlePress(item.id)}
          />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
