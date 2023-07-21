import { Genres } from '@typesFiles/Genres'

export type GenresFilterProps = {
  genres: Genres
  onGenreChange?: (genre: string) => void
  selectedGenre?: string
}
