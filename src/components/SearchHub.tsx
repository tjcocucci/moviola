import SearchBar from "./SearchBar";

export default function SearchHub({
  handleSearch,
}: {
  handleSearch: Function;
}) {
  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <input type="date" />
      <input type="date" />
      <input type="radio" />
    </div>
  );
}
