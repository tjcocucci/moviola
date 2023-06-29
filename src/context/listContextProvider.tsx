import MovieProps from '@/types/MovieProps';
import { createContext, useState } from 'react';
import { useEffect } from 'react';

function getInitialState() {
  if (typeof window === 'undefined') {
    return [];
  } else if (!localStorage.getItem('list')) {
    return [];
  }
  const list = localStorage.getItem('list');
  return list ? JSON.parse(list) : [];
}

export const ListContext = createContext({
  selectedMovies: [] as MovieProps[],
  setStateAndLocalStorage: (movie: MovieProps[]) => {},
});

const ListContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedMovies, setSelectedMovies] = useState<MovieProps[]>(
    getInitialState()
  );

  const setStateAndLocalStorage = (newList: MovieProps[]) => {
    localStorage.setItem('list', JSON.stringify(newList));
    setSelectedMovies(newList);
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(selectedMovies));
  }, [selectedMovies]);

  return (
    <ListContext.Provider
      value={{
        selectedMovies,
        setStateAndLocalStorage,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export default ListContextProvider;
