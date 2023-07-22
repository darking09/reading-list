import { useState } from 'react';
import { Books } from '@typesFiles/Books'
import useAppContext from "@context/useAppContext"
import { FILTER_TYPES } from '@utils/index';

export default function useFilterByGenres(books : Books) {
  const { filterBooks } = useAppContext();
  const [currentGenres, setCurrentGenres] = useState<string>('');

  const onChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentGenres(event.target.value);
    filterBooks(parseInt(event.target.value), FILTER_TYPES.GENRES);
  }

  return {
    currentGenres,
    onChange
  };
}
