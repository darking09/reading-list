import { useState, useEffect, useTransition } from "react";
import { Book } from '@typesFiles/Books'
import { updateToReadingList } from "@api/index"

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
    return b.book.available ?? true
  }

  const [isAvailable, setIsAvailable] = useState(checkIsAvailability(book));

  const onClick = () => {
    let newBook = Object.assign({}, book)

    if (!newBook.book?.available) {
      newBook = Object.assign(book, { book: { ...book.book, available: true } })
    }

    newBook.book.available = false

    startTransition(() => updateToReadingList(newBook))
  }

  return {
    onClick,
    isAvailable
  };
}

