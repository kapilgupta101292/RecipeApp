import MealItem from "./MealItem";
import { FlatList, View, StyleSheet } from "react-native";

function MealList({items}) {
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

    return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealList;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });