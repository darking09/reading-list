import { useTransition } from "react";
import { Book } from '@typesFiles/Books'
import { updateToReadingList } from "@api/index"

export default function useReadingListGalleryWrapper(book : Book) {
  let [isPending, startTransition] = useTransition()

  const onClick = () => {
    let newBook = Object.assign({}, book)

    if (!newBook.book?.available) {
      newBook = Object.assign(book, { book: { ...book.book, available: true } })
    }

    newBook.book.available = true
    startTransition(() => updateToReadingList(newBook))
  }
  return {
    onClick
  };
}
