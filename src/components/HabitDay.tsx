interface HabitDay {
  isDisabled?: boolean;
}

export function HabitDay({ isDisabled }: HabitDay) {
  return (
    <div
      className={`w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg ${
        isDisabled
          ? "cursor-not-allowed opacity-40"
          : "cursor-pointer opacity-100"
      }`}
    ></div>
  );
}
