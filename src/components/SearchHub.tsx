import DatePicker from './DatePicker';
import SearchBar from './SearchBar';
import { useState } from 'react';
import Selector from './Selector';

const HALF_SECOND_IN_MS = 500;

export default function SearchHub({
  children,
  handleSearch,
}: {
  children: React.ReactNode;
  handleSearch: Function;
}) {
  const [searchParams, setSearchParams] = useState({
    query: '',
    startDate: '',
    endDate: '',
    sortBy: '',
  });

  function handleTextQueryChange(textQuery: string) {
    const newParams = { ...searchParams, query: textQuery };
    setSearchParams(newParams);
    handleSearch(newParams);
  }

  async function handleStartDateChange(date: string) {
    const newParams = { ...searchParams, startDate: date };
    setSearchParams(newParams);
    handleSearch(newParams);
  }

  async function handleEndDateChange(date: string) {
    const newParams = { ...searchParams, endDate: date };
    setSearchParams(newParams);
    handleSearch(newParams);
  }

  function handleSortByChange(sortBy: string) {
    const newParams = { ...searchParams, sortBy: sortBy };
    setSearchParams(newParams);
    handleSearch(newParams);
  }

  return (
    <div>
      <div className="flex flex-row items-center space-x-5 ">
        <SearchBar handleChange={handleTextQueryChange} />
        Start date: <DatePicker handleChange={handleStartDateChange} />
        End date: <DatePicker handleChange={handleEndDateChange} />
        Sort by:
        <Selector handleChange={handleSortByChange} />
      </div>
      {children}
    </div>
  );
}
