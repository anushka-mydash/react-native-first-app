import { View, Text, StyleSheet, Pressable } from 'react-native'

export default function GoalItem({ itemData, onItemDelete }) {

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={onItemDelete.bind(this, itemData.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{itemData.text}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 4,
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },
  pressedItem: {
    opacity: 0.5
  },
  goalText: {
    color: 'white',
    padding: 8,
  }
})
