import { useState } from 'react';
import useSWR from 'swr';
import SearchParams from '@/types/SearchParams';
import { buildQueryString } from '@/utils/searchMovies';

export default function useMovies(searchParams: SearchParams) {
  const [movies, setMovies] = useState([]);

  const fetcher = (url: string) =>
    fetch(url).then((res) => {
      if (res.ok && res.status === 200) {
        return res.json().then((data) => setMovies(data));
      }
    });
  const queryString = buildQueryString(searchParams);
  console.log(queryString);
  const { error } = useSWR(queryString, fetcher);
  if (error) {
    console.log(error);
  } else {
    return movies;
  }
}
