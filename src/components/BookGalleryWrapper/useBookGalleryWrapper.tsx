import { useState, useEffect, useTransition } from "react";
import { Book } from '@typesFiles/Books'
import { addToReadingList } from "@api/index"

export default function useBookGalleryWrapper(book: Book) {
  let [isPending, startTransition] = useTransition()
  useEffect(() => {
    setIsAvailable(checkIsAvailability(book));
  }, [book]);

  //TODO: Add loading function to show loading state
  /*useEffect(() => {
    console.log(isPending)
  }, [isPending]);*/

  const checkIsAvailability = (b: Book) => {
    return b.is_available ?? true
  }

  const [isAvailable, setIsAvailable] = useState(checkIsAvailability(book));

  const onClick = () => {
    book.is_available = false

    startTransition(() => addToReadingList(book))
  }

  return {
    onClick,
    isAvailable
  };
}

