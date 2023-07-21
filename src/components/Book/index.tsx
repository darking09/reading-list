import Image from 'next/image'
import { BookProps } from '@typesFiles/props/book'

export default function Book({
  book,
}: BookProps) {

  return (
    <div className='relative pb-3/2'>
      <Image
        src={book.cover}
        alt={book.title}
        fill
        className="object-cover rounded-lg"
      />
    </div>
  )
}
