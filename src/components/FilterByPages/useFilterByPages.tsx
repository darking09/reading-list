import { useState, useEffect } from 'react';
export default function useFilterByPages(minPage:number) {
  const [currentPages, setCurrentPages] = useState<number>(minPage);

  useEffect(() => {
    setCurrentPages(minPage);
  }, [minPage]);

  const onChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPages(parseInt(event.target.value));
  }

  return {
    currentPages,
    onChange
  };
}
