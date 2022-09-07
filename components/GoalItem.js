import { View, Text, StyleSheet, Pressable } from 'react-native'

export default function GoalItem({ itemData, onItemDelete }) {

  return (
    <Pressable onPress={onItemDelete.bind(this, itemData.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{itemData.text}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 4,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },
  goalText: {
    color: 'white'
  }
})
