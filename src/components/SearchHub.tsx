import DatePicker from './DatePicker';
import SearchBar from './SearchBar';
import { useState } from 'react';
import Selector from './Selector';
import SearchParams from '@/types/SearchParams';

const defaultSearchParams: SearchParams = {
  query: '',
  startDate: null,
  endDate: null,
  sortBy: '',
};

export default function SearchHub({
  children,
  handleSearch,
}: {
  children: React.ReactNode;
  handleSearch: Function;
}) {
  const [searchParams, setSearchParams] = useState(defaultSearchParams);

  function handleTextQueryChange(textQuery: string) {
    const newParams = { ...searchParams, query: textQuery };
    setSearchParams(newParams);
    handleSearch(newParams);
  }

  async function handleStartDateChange(date: Date) {
    const newParams = { ...searchParams, startDate: date };
    setSearchParams(newParams);
    handleSearch(newParams);
  }

  async function handleEndDateChange(date: Date) {
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
      <div className="p-4 flex self-center flex-auto flex-col gap-5 max-w-4xl">
        <div className="mb-3">
          <SearchBar handleChange={handleTextQueryChange} />
        </div>

        <div className="flex">
          <div className="flex items-center">
            <span className="whitespace-nowrap mr-5">Start date:</span>
            <DatePicker handleChange={handleStartDateChange} />
          </div>
          <div className="flex items-center">
            <span className="whitespace-nowrap mr-5">End date:</span>
            <DatePicker handleChange={handleEndDateChange} />
          </div>
          <div className="flex items-center ">
            <Selector handleChange={handleSortByChange} />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
