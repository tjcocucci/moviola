import { useState } from 'react';

export default function SearchBar({
  handleChange,
}: {
  handleChange: Function;
}) {
  const [inputText, setInputText] = useState('');

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputText(e.target.value);
    handleChange(inputText);
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
