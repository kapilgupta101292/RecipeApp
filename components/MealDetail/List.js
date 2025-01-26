import { Text, View, StyleSheet } from "react-native";

export default function List({ data }) {
  return (
    <View style={styles.listContainer}>
      {data.map((dataPoint) => (
        <View style={styles.listItem} key={dataPoint}>
          <Text style={styles.itemText}>{dataPoint}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    marginHorizontal: 24,
    marginVertical: 4,
    borderRadius: 6,
    backgroundColor: "#e2b497",
    color: "#351401",
    padding: 8,
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
