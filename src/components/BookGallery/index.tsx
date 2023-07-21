import Book from '@components/Book'
import BookGalleryWrapper from '@components/BookGalleryWrapper'
import { Book as BookType } from '@typesFiles/Books'
import { BookGalleryProps } from '@typesFiles/props/bookGallery'

export default function BookGallery({ books } : BookGalleryProps ) {

  return (
    <section className="row-start-1 col-span-3">
      <div className="grid grid-flow-row-dense grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 p-2">
        {
          books.map((b : BookType) => (
            <BookGalleryWrapper key={b.book.ISBN} book={b}>
              <Book bookContainer={b} />
            </BookGalleryWrapper>
          ))
        }
      </div>
    </section>
  )
}
