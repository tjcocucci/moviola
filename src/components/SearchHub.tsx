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
    <>
      <div className="p-4 flex flex-wrap">
        <div className="flex items-center mb-4">
          <SearchBar handleChange={handleTextQueryChange} />
        </div>
        <div className="flex items-center">
          <span className="mr-2">Start date</span>{' '}
          <DatePicker handleChange={handleStartDateChange} />
        </div>
        <div className="flex items-center">
          <span className="mr-2">End date</span>{' '}
          <DatePicker handleChange={handleEndDateChange} />
        </div>
        <div className="flex items-center">
          <span className="mr-2">Order by</span>
          <Selector handleChange={handleSortByChange} />
        </div>
      </div>
      {children}
    </>
  );
}
