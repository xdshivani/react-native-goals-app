import { Modal, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { View, Button, TextInput,Image } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredText, setEnteredText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredText(enteredText);
  }

  // data is sent from parent to child, here we can triggering parent's function with child's data

  function goalHandler() {
    props.addGoal(enteredText); //addGoalHandler(entererText)
    setEnteredText("");
    props.onCancel();
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <KeyboardAvoidingView  style={{ flex: 1 }}
    behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('/Users/shivanichauhan/Desktop/warp/React Native/learn/assets/images/targetWhite.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder="Add your goal"
          placeholderTextColor="white"
          onChangeText={goalInputHandler}
          value={enteredText}
        />
        <View style={styles.buttonStyle}>
          <View style={styles.addGoalButton}>
            <Button title="Add goal" color="black" onPress={goalHandler} />
          </View>
          <View style={styles.cancelButton}>
            <Button title="Cancel" color="black" onPress={props.onCancel} />
          </View>
        </View>
      </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"blue",
    // marginBottom: 24,
    // borderBottomWidth: 1,
    // borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "white",
    width: "70%",
    marginRight: 8,
    padding: 10,
    color:'white',
  },
  goalsContainer: {
    flex: 5,
  },
  buttonStyle: {
    marginBottom: 10,
    flexDirection: "row",
    marginTop: 10,
  },
  addGoalButton: {
    width: "30%",
    marginHorizontal: 8,
    backgroundColor:'#4caf50',
  },
  cancelButton: {
    width: "30%",
    marginHorizontal: 8,
    backgroundColor: '#D3D3D3'
  },
  image:{
    width:100,
    height:100,
    margin:20,
  }
});
