export default function CalendarHeader() {
  return (
    <thead className="w-full">
      <tr className="w-full flex justify-between [&>th]:p-0 [&>th]:flex-1 py-2 text-neutral-400 text-sm">
        <th>S</th>
        <th>M</th>
        <th>T</th>
        <th>W</th>
        <th>T</th>
        <th>F</th>
        <th>S</th>
      </tr>
    </thead>
  );
}
