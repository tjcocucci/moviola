import { useEffect, useState } from 'react';
import useDebounce from './useDebounce';

const HALF_SECOND_IN_MS = 500;

const API_URL = `https://api.themoviedb.org/3/`;
const API_KEY = 'ba282fc7777a85594b4d09bffedbb258';
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';

const buildQueryString = (text: string) => {
  return 'api/movies';
};

export default function useSearch(handleSearch: Function) {
  const [inputText, setInputText] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const searchMovies = async (text: string) => {
    const queryString = buildQueryString(text);
    const response = await fetch(queryString, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok && response.status === 200) {
      const data = await response.json();
      const moviesArray = data.map((movie: any) => ({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
      }));
      handleSearch(moviesArray);
    }
  };

  const debouncedSearch = useDebounce(searchMovies, HALF_SECOND_IN_MS);

  useEffect(() => {
    if (inputText) {
      debouncedSearch(inputText);
    }
  }, [inputText, debouncedSearch]);

  return { inputText, handleInputChange };
}
