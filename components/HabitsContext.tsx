
import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Habit = {
  id: string;
  name: string;
  description: string;
  doneToday: boolean;
};

type HabitsContextType = {
  habits: Habit[];
  addHabit: (data: { name: string; description: string }) => void;
  toggleHabitDone: (id: string) => void;
};

const HabitsContext = createContext<HabitsContextType | undefined>(undefined);

export function HabitsProvider({ children }: { children: React.ReactNode }) {
  const [habits, setHabits] = useState<Habit[]>([]);

  const addHabit = ({ name, description }: { name: string; description: string }) => {
    setHabits((prev) => [
      ...prev,
      {
        id: uuidv4(),
        name,
        description,
        doneToday: false,
      },
    ]);
  };

  const toggleHabitDone = (id: string) => {
    setHabits((prev) =>
      prev.map((h) =>
        h.id === id ? { ...h, doneToday: !h.doneToday } : h
      )
    );
  };

  return (
    <HabitsContext.Provider value={{ habits, addHabit, toggleHabitDone }}>
      {children}
    </HabitsContext.Provider>
  );
}

export function useHabits() {
  const ctx = useContext(HabitsContext);
  if (!ctx) throw new Error("useHabits must be used within HabitsProvider");
  return ctx;
}