import { useContext } from "react";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList/MealList";
// import { FavoritesContext } from "../store/context/favorites-context";
import { View, Text, StyleSheet } from "react-native";
function FavoritesScreen() {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return <View style={styles.rootScreen}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
    </View>
  }
  return <MealList items={favoriteMeals}/>;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
