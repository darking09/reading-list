import { useState } from 'react';
export default function useFilterByPages(maxPage:number, minPage:number) {
  const [currentPages, setCurrentPages] = useState<number>(minPage);

  const onChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPages(parseInt(event.target.value));
  }

  return {
    currentPages,
    onChange
  };
}
