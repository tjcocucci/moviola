import useSearch from '@/hooks/useSearch';

export default function SearchBar({
  handleSearch,
}: {
  handleSearch: Function;
}) {
  const { inputText, handleInputChange } = useSearch(handleSearch);

  return (
    <div className="ml-auto h-10">
      <input
        className="w-full h-8 rounded p-1 bg-white text-gray-900"
        type="text"
        placeholder="Search..."
        value={inputText}
        onChange={(e) => handleInputChange(e)}
      />
    </div>
  );
}
