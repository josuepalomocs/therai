import useCalendar from "./hooks/useCalendar";
import CalendarHeader from "./CalendarHeader";
import CalendarBody from "./CalendarBody";

export default function Calendar() {
  const {} = useCalendar();

  return (
    <div className="w-full bg-neutral-800">
      <table className="w-full border-collapse">
        <CalendarHeader />
        <CalendarBody />
      </table>
    </div>
  );
}
