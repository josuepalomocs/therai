import useCalendar from "./hooks/useCalendar";
import CalendarHeader from "./CalendarHeader";
import CalendarBody from "./CalendarBody";

export default function Calendar() {
  const {} = useCalendar();

  return (
    <div className="w-full p-2">
      <h4 className="text-4xl text-neutral-400 font-extralight px-2 mb-2">
        March 2023
      </h4>
      <table className="w-full border-collapse">
        <CalendarHeader />
        <CalendarBody />
      </table>
    </div>
  );
}
