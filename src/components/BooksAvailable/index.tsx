'use client'
import { BooksAvailableProps } from '@typesFiles/props/booksAvailable'
import { useBooksAvailable } from './useBooksAvailable'

export default function BooksAvailable ({ numberOfBooks } : BooksAvailableProps) {
  const { textForBooks, textForReadingList } = useBooksAvailable(numberOfBooks);

  return (
    <div className="grid grid-rows-2 p-2">
      <h1 className='row-span-1'>{textForBooks}</h1>
      <h2>{textForReadingList}</h2>
    </div>
  )
}
