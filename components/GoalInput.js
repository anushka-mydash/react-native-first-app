import { useState } from 'react'
import { View, TextInput, StyleSheet, Button, Modal, Image } from 'react-native'

export default function GoalInput({ onGoalAdd, showModal, hideModal }) {
  const [enteredGoalText, setEnteredGoalText] = useState("")

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    onGoalAdd(enteredGoalText)
    setEnteredGoalText('')
  }

  return (
    <Modal visible={showModal} animationType={'slide'}>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          value={enteredGoalText}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button
              title="Back"
              onPress={hideModal}
              color='#f31282'
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addGoalHandler}
              color='#b180f8'
            />
          </View>
        </View >
      </View >
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    width: '100%',
    marginRight: 8,
    padding: 8,
    borderRadius: 6
  },
  buttonsContainer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center"
  },
  button: {
    width: 100,
    marginHorizontal: 8
  },
  image: {
    width: 100,
    height: 100,
    margin: 8
  }
})