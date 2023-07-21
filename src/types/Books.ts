export type Book = {
  book: {
    title: string;
    pages: number;
    genre: string;
    cover: string;
    synopsis: string;
    year: number;
    ISBN: string;
    author: Author;
    available?: boolean;
  }
}

export type Author = {
  name: string;
  otherBooks: Array<string>;
}

export type Books = Array<Book>

export type BookAPI = {
  library: Books;
}

export type Genres = Array<string>

export type MaxAndMinPages = {
  maxPage: number;
  minPage: number;
}
