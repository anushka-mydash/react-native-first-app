import { useState } from 'react'
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals,
    { text: enteredGoalText, id: Math.random().toString() }
    ])
  }

  const deleteGoalHandler = (id) => {
    console.log("Delete goal", id)
    setCourseGoals(currentCourseGoals => currentCourseGoals.filter(goal => goal.id !== id))
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput onGoalAdd={addGoalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData =>
            <GoalItem
              itemData={itemData.item}
              id={itemData.item.id}
              onItemDelete={deleteGoalHandler}
            />}
          keyExtractor={(item, index) => {
            return item.id
          }}
        />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50
  },
  goalsContainer: {
    flex: 5
  },
});
