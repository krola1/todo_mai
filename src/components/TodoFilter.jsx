import { TODO_FILTER_OPTIONS } from "../utils/filterConstants";

export default function TodoFilter({ filter, setFilter }) {
  return (
    <select
      value={filter}
      name=""
      id=""
      onChange={(e) => setFilter(e.target.value)}
    >
      {TODO_FILTER_OPTIONS.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
