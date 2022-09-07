import { useState } from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  Button,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([])

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals,
    { text: enteredGoalText, id: Math.random().toString() }
    ])
  }

  const deleteGoalHandler = (id) => {
    setCourseGoals(currentCourseGoals => currentCourseGoals.filter(goal => goal.id !== id))
  }

  const startAddGoalHandler = () => {
    setIsModalVisible(true)
  }

  const endAddGoalHandler = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color='#b180f8'
          onPress={startAddGoalHandler}
        />
        {isModalVisible && <GoalInput showModal={isModalVisible} hideModal={endAddGoalHandler} onGoalAdd={addGoalHandler} />}
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },
  goalsContainer: {
    flex: 5,
    marginTop: 10,
  },
});
