'use client'
import BookGallery from "@components/BookGallery"
import BooksAvailable from "@components/BooksAvailable"
import FilterByGenres from "@components/FilterByGenres"
import FilterByPages from "@components/FilterByPages"
import ReadingListGallery from "@components/ReadingListGallery"

import useAppContext from "@context/useAppContext"

export default function Home() {
  const {
    books,
    readingList,
    genres,
    howManyBooksAre,
    maxAndMinPages
  } = useAppContext()

  return (
    <main className="w-11/12 mx-auto">
      <header className="grid grid-rows-3 grid-cols-4 gap-2 h-48">
        <section className="row-span-1 col-span-4">
          <BooksAvailable numberOfBooks={howManyBooksAre} />
        </section>
        <section className="row-span-2 col-span-1">
          <FilterByGenres genres={genres} />
          <FilterByPages maxPage={maxAndMinPages.maxPage} minPage={maxAndMinPages.minPage} />
        </section>
      </header>
      <div className="divider"></div>
      <div className="grid grid-rows-1 grid-cols-2 sm:grid-cols-4 gap-2 sm:h-[calc(100vh_-_15rem)] sm:overflow-y-hidden">
        <BookGallery books={books} />
        <ReadingListGallery books={readingList} />
      </div>
    </main>
  )
}
