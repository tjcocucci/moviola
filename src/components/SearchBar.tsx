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
    const newText = e.target.value;
    setInputText(newText);
    debouncedSearch(newText);
  }

  return (
    <input
      className="p-2 border border-gray-300 rounded mr-2"
      type="text"
      placeholder="Search..."
      value={inputText}
      onChange={(e) => handleInputChange(e)}
    />
  );
}
