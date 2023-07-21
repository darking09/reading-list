'use server'
import { Books, Book, BookAPI, Genres, MaxAndMinPages } from '@typesFiles/Books'
import fsPromises from 'fs/promises'
import path from 'path'

const BOOK_JSON_PATH = 'src/api/data/books.json'

export const getBooks = async () : Promise<Books> => {
  const data = await getDataFromApi()

  return data.library as Books
}

export const getHowManyBooksAreThereAvailable = async () : Promise<number> => {
  const data = await getDataFromApi()
  const availableBooks = data
    .library
    .filter(
      (b : Book)=> b.book.available ?? true
    ) as Books

  return availableBooks.length
}

export const getReadingListBooks = async () : Promise<Books> => {
  const data = await getDataFromApi()
  const readingListBooks = data
    .library
    .filter(
      (b : Book)=> !(b.book.available ?? true)
    ) as Books

  return readingListBooks
}

export const getGenres = async () : Promise<Genres> => {
  const data = await getDataFromApi()
  const genresDuplicate = data
    .library
    .filter(
      (b : Book)=> b.book.available ?? true
    )
    .map((b : Book) => b.book?.genre)


  return removeDuplicates(genresDuplicate)
}

export const getMaxAndMinPages = async () : Promise<MaxAndMinPages> => {
  const data = await getDataFromApi()
  const pages = data
    .library
    .filter(
      (b : Book)=> b.book.available ?? true
    )
    .map((b : Book) => b.book?.pages)

  return {
    maxPage: Math.max(...pages),
    minPage: Math.min(...pages)
  }
}

export const updateToReadingList = async (book : Book) => {
  const data = await getDataFromApi()
  const booksIndex = data.library.findIndex((b : Book) => b.book?.ISBN === book.book.ISBN)
  data.library[booksIndex] = book

  await addDataToApi(data)
}

const getDataFromApi = async () : Promise<BookAPI> => {
  const filePath = path.join(process.cwd(), BOOK_JSON_PATH)
  const jsonData = await fsPromises.readFile(filePath, 'utf-8')
  const objectData = JSON.parse(jsonData)

  return objectData
}

const addDataToApi = async (data : BookAPI) => {
  const filePath = path.join(process.cwd(), BOOK_JSON_PATH)
  const jsonData = JSON.stringify(data, null, 2)

  await fsPromises.writeFile(filePath, jsonData)
}


const removeDuplicates = (array : Array<string>) => {
  const uniqueArray = array.filter((item, index) => array.indexOf(item) === index)

  return uniqueArray
}
