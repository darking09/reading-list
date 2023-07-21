import BookGallery from "@components/BookGallery"
import BooksAvailable from "@components/BooksAvailable"
import FilterByGenres from "@components/FilterByGenres"
import FilterByPages from "@components/FilterByPages"
import ReadingListGallery from "@components/ReadingListGallery"

import {
  getHowManyBooksAreThereAvailable,
  getGenres,
  getMaxAndMinPages,
  getReadingListBooks,
  getBooks
} from "@api/index"

export default async function Home() {
  const numberOfBooks = await getHowManyBooksAreThereAvailable()
  const genres = await getGenres()
  const { maxPage, minPage } = await getMaxAndMinPages()
  const books = await getBooks()
  const readingListBooks = await getReadingListBooks()

  return (
    <main className="w-3/4 mx-auto">
      <BooksAvailable numberOfBooks={numberOfBooks} />
      <FilterByGenres genres={genres} />
      <FilterByPages maxPage={maxPage} minPage={minPage} />
      <div className="grid grid-rows-1 grid-cols-4 gap-2">
        <BookGallery books={books} />
        <ReadingListGallery books={readingListBooks} />
      </div>
    </main>
  )
}
