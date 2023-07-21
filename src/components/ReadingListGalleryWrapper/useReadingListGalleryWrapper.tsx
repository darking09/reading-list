import { useTransition } from "react";
import { Book } from '@typesFiles/Books'
import { removeFromReadingList } from "@api/index"

export default function useReadingListGalleryWrapper(book : Book) {
  let [isPending, startTransition] = useTransition()

  const onClick = () => {
    book.is_available = true
    startTransition(() => removeFromReadingList(book))
  }
  return {
    onClick
  };
}
