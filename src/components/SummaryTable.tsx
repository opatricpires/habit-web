import { HabitDay } from "./HabitDay";
import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
const summaryDates = generateDatesFromYearBeginning();

const minimumSummaryDatesSize = 18 * 7;
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length;

export function SummaryTable() {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay, i) => (
          <div
            className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
            key={`${weekDay}-${i}`}
          >
            {weekDay}
          </div>
        ))}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((date) => (
          <HabitDay
            amount={5}
            completed={Math.round(Math.random() * 5)}
            key={date.toString()}
          />
        ))}

        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, i) => (
            <div className="w-10 h-10 bg-slate-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed" />
          ))}
      </div>
    </div>
  );
}
