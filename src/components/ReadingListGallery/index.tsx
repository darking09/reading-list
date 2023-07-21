import { ReadingListGalleryProps } from '@typesFiles/props/readingListGallery';
import { Book as BookType } from '@typesFiles/Books'
import Book from '@components/Book'
import ReadingListGalleryWrapper from '@components/ReadingListGalleryWrapper';

export default function ReadingListGallery({ books }: ReadingListGalleryProps) {
  return (
    <section className="text-gray-600 body-font row-span-2 col-span-1">
      <h2>Lista de lectura</h2>
      <div className="grid grid-flow-row-dense grid-cols-1 gap-6 md:grid-cols-2 p-4">
        {
          books.map((b : BookType) => (
            <ReadingListGalleryWrapper book={b} key={b.book.ISBN}>
              <Book bookContainer={b} />
            </ReadingListGalleryWrapper>
          ))
        }
      </div>
    </section>
  )
}
