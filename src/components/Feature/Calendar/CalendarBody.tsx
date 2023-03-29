import {
  getYear,
  getMonth,
  getDaysInMonth,
  getDay,
  isBefore,
  isSameDay,
} from "date-fns";
import { tr } from "date-fns/locale";
import { ReactNode } from "react";

export default function CalendarBody() {
  function renderCalendarRows() {
    const dummyDate = new Date();
    const year = getYear(dummyDate);
    const month = getMonth(dummyDate);
    const daysInMonth = getDaysInMonth(dummyDate);
    const firstDayOfMonthIndex = getDay(new Date(year, month, 1));
    const numCalendarRows = Math.ceil(daysInMonth / 7);
    const calendarRows: ReactNode[] = [];
    return createCalendarRows();

    function createCalendarRows() {
      for (
        let calendarRowIndex = 0;
        calendarRowIndex < numCalendarRows;
        calendarRowIndex++
      ) {
        const calendarRowCells = createCalendarRowCells(calendarRowIndex);
        const calendarRow = (
          <tr className="flex justify-between [&>td]:p-0 [&>td]:flex-1 [&>td]:py-4">
            {calendarRowCells}
          </tr>
        );
        calendarRows.push(calendarRow);
      }
      return calendarRows;
    }

    function createCalendarRowCells(calendarRowIndex: number) {
      const calendarRowCells = [];
      const unusedCalendarRowCell = <td className="" />;
      const currentDate = new Date();
      const calendarRowCellsInPastStyles = "text-neutral-500";
      const calendarRowCellInCurrentStyles = "bg-teal-700 rounded";

      if (calendarRowIndex === 0) {
        for (
          let calendarRowCellIndex = 0;
          calendarRowCellIndex < 7;
          calendarRowCellIndex++
        ) {
          if (calendarRowCellIndex < firstDayOfMonthIndex) {
            calendarRowCells.push(unusedCalendarRowCell);
            continue;
          }
          const cellValue =
            calendarRowIndex * 7 +
            calendarRowCellIndex -
            firstDayOfMonthIndex +
            1;
          const usedCalendarRowCell = (
            <td
              className={`text-center ${
                isBefore(
                  new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    cellValue + 1,
                    0,
                    0,
                    0,
                    0
                  ),
                  currentDate
                ) && calendarRowCellsInPastStyles
              } ${
                isSameDay(
                  new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    cellValue,
                    0,
                    0,
                    0,
                    0
                  ),
                  currentDate
                ) && calendarRowCellInCurrentStyles
              }`}
            >
              <button className="w-full h-full">{cellValue}</button>
            </td>
          );
          calendarRowCells.push(usedCalendarRowCell);
        }
        return calendarRowCells;
      }
      if (calendarRowIndex === numCalendarRows - 1) {
        for (
          let calendarRowCellIndex = 0;
          calendarRowCellIndex < 7;
          calendarRowCellIndex++
        ) {
          const cellValue =
            calendarRowIndex * 7 +
            calendarRowCellIndex -
            firstDayOfMonthIndex +
            1;
          const usedCalendarRowCell = (
            <td
              className={`text-center ${
                isBefore(
                  new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    cellValue + 1,
                    0,
                    0,
                    0,
                    0
                  ),
                  currentDate
                ) && calendarRowCellsInPastStyles
              } ${
                isSameDay(
                  new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    cellValue,
                    0,
                    0,
                    0,
                    0
                  ),
                  currentDate
                ) && calendarRowCellInCurrentStyles
              }`}
            >
              {cellValue}
            </td>
          );
          if (cellValue > daysInMonth) {
            calendarRowCells.push(unusedCalendarRowCell);
            continue;
          }
          calendarRowCells.push(usedCalendarRowCell);
        }
        return calendarRowCells;
      }
      for (
        let calendarRowCellIndex = 0;
        calendarRowCellIndex < 7;
        calendarRowCellIndex++
      ) {
        const cellValue =
          calendarRowIndex * 7 +
          calendarRowCellIndex -
          firstDayOfMonthIndex +
          1;
        const usedCalendarRowCell = (
          <td
            className={`text-center ${
              isBefore(
                new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth(),
                  cellValue + 1,
                  0,
                  0,
                  0,
                  0
                ),
                currentDate
              ) && calendarRowCellsInPastStyles
            } ${
              isSameDay(
                new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth(),
                  cellValue,
                  0,
                  0,
                  0,
                  0
                ),
                currentDate
              ) && calendarRowCellInCurrentStyles
            }`}
          >
            {cellValue}
          </td>
        );
        calendarRowCells.push(usedCalendarRowCell);
      }
      return calendarRowCells;
    }
  }

  return <tbody className="">{renderCalendarRows()}</tbody>;
}
