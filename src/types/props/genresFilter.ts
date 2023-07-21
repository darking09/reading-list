export type GenresFilterProps = {
  genres: Array<string>
  onGenreChange?: (genre: string) => void
  selectedGenre?: string
}
