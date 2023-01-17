import React from "react";

interface HabitProps {
  completed: number;
}

export default function Habit({ completed }: HabitProps) {
  return (
    <div className="bg-zinc-900 w-10 h-10 text-white rounded-md m-2 flex justify-center items-center">
      {completed}
    </div>
  );
}
