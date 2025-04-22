
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { useRouter } from "expo-router";
import { useHabits } from "../components/HabitsContext";

export default function AddHabitScreen() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { addHabit } = useHabits();
  const router = useRouter();

  const handleAdd = () => {
    if (name.trim().length === 0) return;
    addHabit({ name, description });
    setName("");
    setDescription("");
    router.replace("/home");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ ios: "padding", android: undefined })}
    >
      <Text style={styles.title}>Add New Habit</Text>
      <TextInput
        style={styles.input}
        placeholder="Habit name"
        placeholderTextColor="#BDBDBD"
        value={name}
        onChangeText={setName}
        maxLength={32}
      />
      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="Description (optional)"
        placeholderTextColor="#BDBDBD"
        value={description}
        onChangeText={setDescription}
        multiline
        maxLength={80}
      />
      <TouchableOpacity
        style={[styles.button, { opacity: name.trim().length === 0 ? 0.5 : 1 }]}
        onPress={handleAdd}
        disabled={name.trim().length === 0}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Add Habit</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FB",
    paddingHorizontal: 24,
    justifyContent: "center",
  },
  title: {
    fontFamily: "Nunito_700Bold",
    fontSize: 26,
    color: "#22223B",
    marginBottom: 32,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    fontFamily: "Nunito_400Regular",
    fontSize: 16,
    color: "#22223B",
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  button: {
    backgroundColor: "#5E60CE",
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 8,
    shadowColor: "#5E60CE",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  buttonText: {
    fontFamily: "Nunito_700Bold",
    fontSize: 18,
    color: "#fff",
  },
});