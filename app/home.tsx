
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Animated } from "react-native";
import { useHabits } from "../components/HabitsContext";
import { CheckCircle, Circle } from "lucide-react-native";
import { useState } from "react";

export default function HomeScreen() {
  const { habits, toggleHabitDone } = useHabits();

  if (habits.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>No habits yet</Text>
        <Text style={styles.emptySubtitle}>Tap the + tab to add your first habit!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Habits</Text>
      <FlatList
        data={habits}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 32 }}
        renderItem={({ item }) => <HabitCard habit={item} onToggle={() => toggleHabitDone(item.id)} />}
      />
    </View>
  );
}

function HabitCard({ habit, onToggle }: any) {
  const [scale] = useState(new Animated.Value(1));

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(scale, { toValue: 1.1, duration: 100, useNativeDriver: true }),
      Animated.timing(scale, { toValue: 1, duration: 100, useNativeDriver: true }),
    ]).start();
    onToggle();
  };

  return (
    <Animated.View style={[styles.card, { transform: [{ scale }] }]}>
      <TouchableOpacity style={styles.checkButton} onPress={handlePress} activeOpacity={0.7}>
        {habit.doneToday ? (
          <CheckCircle color="#5E60CE" size={28} />
        ) : (
          <Circle color="#BDBDBD" size={28} />
        )}
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <Text style={styles.habitName}>{habit.name}</Text>
        <Text style={styles.habitDesc}>{habit.description}</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FB",
    paddingHorizontal: 20,
    paddingTop: 32,
  },
  title: {
    fontFamily: "Nunito_700Bold",
    fontSize: 28,
    color: "#22223B",
    marginBottom: 24,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    shadowColor: "#5E60CE",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  checkButton: {
    marginRight: 18,
  },
  habitName: {
    fontFamily: "Nunito_700Bold",
    fontSize: 18,
    color: "#5E60CE",
    marginBottom: 2,
  },
  habitDesc: {
    fontFamily: "Nunito_400Regular",
    fontSize: 14,
    color: "#6C6C80",
  },
  emptyContainer: {
    flex: 1,
    backgroundColor: "#F8F9FB",
    alignItems: "center",
    justifyContent: "center",
  },
  emptyTitle: {
    fontFamily: "Nunito_700Bold",
    fontSize: 24,
    color: "#5E60CE",
    marginBottom: 8,
  },
  emptySubtitle: {
    fontFamily: "Nunito_400Regular",
    fontSize: 16,
    color: "#6C6C80",
  },
});