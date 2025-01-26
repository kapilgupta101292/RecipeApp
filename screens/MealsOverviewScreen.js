import { MEALS } from "../data/dummy-data";
import { FlatList, View, Text, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";
import { CATEGORIES } from "../data/dummy-data";

function renderMealItem(itemData) {
  const { id, title, imageUrl, duration, complexity, affordability } =
    itemData.item;
  return (
    <MealItem
      id={id}
      title={title}
      imageUrl={imageUrl}
      duration={duration}
      complexity={complexity}
      affordability={affordability}
    />
  );
}

function MealsOverviewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  const categoryTitle = CATEGORIES.find(
    (category) => category.id === categoryId
  ).title;

  useLayoutEffect(() => {
    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
