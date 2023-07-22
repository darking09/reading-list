import { Books, MaxAndMinPages } from '@typesFiles/Books'
import { Genres } from '@typesFiles/Genres'

export type LibraryContextType = {
  books: Books,
  readingList: Books,
  genres: Genres,
  maxAndMinPages: MaxAndMinPages,
  addBooksToReadingList: (books: Books) => void,
  removeBooksFromReadingList: (books: Books) => void,
  filterBooks: (filter: string) => void,
}
