
import { View, Text, StyleSheet } from "react-native";
import { useHabits } from "../components/HabitsContext";

export default function HistoryScreen() {
  const { habits } = useHabits();

  // For now, just show a placeholder. Later, can add calendar/streaks.
  return (
    <View style={styles.container}>
      <Text style={styles.title}>History</Text>
      <Text style={styles.subtitle}>Coming soon: streaks & calendar view!</Text>
      <View style={{ marginTop: 32 }}>
        <Text style={styles.sectionTitle}>Your Habits</Text>
        {habits.length === 0 ? (
          <Text style={styles.empty}>No habits yet.</Text>
        ) : (
          habits.map((h) => (
            <View key={h.id} style={styles.habitRow}>
              <Text style={styles.habitName}>{h.name}</Text>
              <Text style={styles.habitDesc}>{h.description}</Text>
            </View>
          ))
        )}
      </View>
    </View>
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
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: "Nunito_400Regular",
    fontSize: 16,
    color: "#6C6C80",
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: "Nunito_700Bold",
    fontSize: 18,
    color: "#5E60CE",
    marginBottom: 8,
  },
  empty: {
    fontFamily: "Nunito_400Regular",
    fontSize: 16,
    color: "#BDBDBD",
    marginTop: 8,
  },
  habitRow: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    shadowColor: "#5E60CE",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
  habitName: {
    fontFamily: "Nunito_700Bold",
    fontSize: 16,
    color: "#22223B",
  },
  habitDesc: {
    fontFamily: "Nunito_400Regular",
    fontSize: 13,
    color: "#6C6C80",
  },
});