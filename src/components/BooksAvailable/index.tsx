'use client'
import { BooksAvailableProps } from '@typesFiles/props/booksAvailable'
import { useBooksAvailable } from './useBooksAvailable'

export default function BooksAvailable ({ numberOfBooks } : BooksAvailableProps) {
  const { textToReturn } = useBooksAvailable(numberOfBooks);

  return (
    <div className="flex flex-row p-2">
      {textToReturn}
    </div>
  )
}
