import { useState, useEffect } from 'react'
import { Books, Book, MaxAndMinPages } from '@typesFiles/Books'
import { Genres } from '@typesFiles/Genres'
import { HowManyBooksAre } from '@typesFiles/General'
import * as api from '@api/index'

export default function useLibraryContext() {
  const [books, setBooks] = useState<Books>([])
  const [readingList, setReadingList] = useState<Books>([])
  const [genres, setGenres] = useState<Genres>([])
  const [howManyBooksAre, setHowManyBooksAre] = useState<HowManyBooksAre>({
    numberOfAvailableBooks: 0,
    numberOfBooksInReadingList: 0
  })
  const [maxAndMinPages, setMaxAndMinPages] = useState<MaxAndMinPages>({
    maxPage: 0,
    minPage: 0
  })


  useEffect(() => {
    loadAllData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadBooks = async () => {
    const books = await api.getBooks()
    setBooks(books)
  }
  const loadReadingList = async () => {
    const books = await api.getReadingListBooks()
    setReadingList(books)
  }

  const loadGenres = async () => {
    const genres = await api.getGenres()
    setGenres(genres)
  }

  const loadHowManyBooksAre = async () => {
    const howManyBooksAre = await api.getHowManyBooksAre()
    setHowManyBooksAre(howManyBooksAre)
  }

  const loadMaxAndMinPages = async () => {
    const maxAndMinPages = await api.getMaxAndMinPages()
    setMaxAndMinPages(maxAndMinPages)
  }

  const updateABook =  (book: Book) => {
    const newBooks = [...books]
    const index = newBooks.findIndex(b => b.ISBN === book.ISBN)
    newBooks[index]= { ...book}
    setBooks(newBooks)
  }

  const loadAllData = async () => {
    await loadBooks()
    await loadReadingList()
    await loadGenres()
    await loadHowManyBooksAre()
    await loadMaxAndMinPages()
  }

  const addBooksToReadingList = async (book: Book) => {
    const {
      numberOfAvailableBooks,
      numberOfBooksInReadingList
    } = howManyBooksAre

    updateABook(book)

    const newReadingList = [...readingList]

    newReadingList.push(book)
    setReadingList(newReadingList)

    setHowManyBooksAre({
      numberOfAvailableBooks: numberOfAvailableBooks - 1,
      numberOfBooksInReadingList: numberOfBooksInReadingList + 1
    })

    await api.addToReadingList(book)
  }

  const removeBooksFromReadingList = async (book: Book) => {
    const {
      numberOfAvailableBooks,
      numberOfBooksInReadingList
    } = howManyBooksAre

    updateABook(book)

    setReadingList(readingList.filter(b => b.ISBN !== book.ISBN))

    setHowManyBooksAre({
      numberOfAvailableBooks: numberOfAvailableBooks + 1,
      numberOfBooksInReadingList: numberOfBooksInReadingList - 1
    })

    await api.removeFromReadingList(book)
  }

  const filterBooks = async (filter: string) => {
  }

  return {
    genres,
    books,
    readingList,
    howManyBooksAre,
    maxAndMinPages,
    addBooksToReadingList,
    removeBooksFromReadingList,
    filterBooks
  }
}
