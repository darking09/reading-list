import { useState } from 'react';
export default function useFilterByGenres() {
  const [currentGenres, setCurrentGenres] = useState<string>('');

  const onChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentGenres(event.target.value);
  }

  return {
    currentGenres,
    onChange
  };
}
