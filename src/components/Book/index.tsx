import Image from 'next/image'
import { BookProps } from '@typesFiles/props/book'

export default function Book({
  bookContainer,
}: BookProps) {
  const { book } = bookContainer

  return (
    <Image
      src={book.cover}
      alt={book.title}
      fill
      className="!relative rounded-lg"
    />
  )
}
