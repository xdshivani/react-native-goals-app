import { Pressable, StyleSheet } from "react-native";
import { View, Text } from "react-native";

function GoalItem(props) {
  return (
    <Pressable
      onPress={() => props.deleteGoal(props.id)}
      style={styles.inputText}
    >
      <View style={styles.inputText}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  inputText: {
    fontSize: 20,
    margin: 8,
    borderRadius: 15,
    backgroundColor: "blue",
    overflow: "hidden", // 🔥 REQUIRED'
  },
  goalText: {
    color: "white",
    padding: 10,
  },
});
