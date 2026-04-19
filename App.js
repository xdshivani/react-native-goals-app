import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, Keyboard } from "react-native";
import {
  StyleSheet,
  View,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";


export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function modalHandler(){
    setModalIsVisible(true)
  }
  function endModalHandler(){
    setModalIsVisible(false)
  }
  function addGoalHandler(enteredText) {
    if (!enteredText.trim()) {
      return;
    }
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredText, id: Math.random().toString() },
    ]); // recommended way
    // removes previous input value
    Keyboard.dismiss();
  }
  function deleteGoals(id){
    setGoals(currentGoals =>{
      return currentGoals.filter((goal)=>goal.id!==id)
    })
    console.log("DELETE")
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.modalStyle} >
      <Button 
      title="Add New Goal" 
      color='blue' 
      onPress={modalHandler} 
      />
      </View>
      <GoalInput 
      addGoal={addGoalHandler} 
      visible={modalIsVisible} 
      onCancel={endModalHandler}/>
    
      <View style={styles.goalsContainer}>
        {/* <ScrollView 
        >
        <Text>List of goals...</Text>
        {goals.map((goal,index)=><Text style={styles.inputText} key={index}>{goal}</Text>)}
        </ScrollView> */}

        {/*  FlatList more optimised, only renders what is required */}
        {/* <FlatList
          data={goals}
          renderItem={(itemData) => (
            <View style={styles.inputText}>
              <Text style={styles.inputText}>{itemData.item.text}</Text>
            </View>
          )} */}

        <FlatList
          data={goals}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => 
          <GoalItem 
          text={itemData.item.text} 
          deleteGoal={deleteGoals} 
          id={itemData.item.id}/>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  goalsContainer: {
    flex: 5,
  },
  modalStyle:{
  // backgroundColor: 'blue',
  padding: 10,
  borderRadius: 8,
  alignItems: 'center',
  marginTop:20,
  }
});
