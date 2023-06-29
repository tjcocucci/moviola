'use client';

import MovieDeck from '@/components/MovieDeck';
import { useContext } from 'react';
import { ListContext } from '@/context/listContextProvider';
import ListContextProvider from '@/context/listContextProvider';

function MovieListFromContext() {
  const { selectedMovies } = useContext(ListContext);

  return <MovieDeck movies={selectedMovies} />;
}

export default function SelectedMoviesList() {
  return (
    <ListContextProvider>
      <MovieListFromContext />
    </ListContextProvider>
  );
}
