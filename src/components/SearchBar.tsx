import { useState } from 'react';
import useDebounce from '../hooks/useDebounce';

const HALF_A_SECOND_IN_MS = 500;

export default function SearchBar({
  handleChange,
}: {
  handleChange: (inputText: string) => void;
}) {
  const [inputText, setInputText] = useState('');

  const debouncedSearch = useDebounce(handleChange, HALF_A_SECOND_IN_MS);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputText(e.target.value);
    debouncedSearch(inputText);
  }

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
