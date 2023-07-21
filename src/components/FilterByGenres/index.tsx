'use client'
import { Genre } from '@typesFiles/Genres'
import useGenresFilter from './useFilterByGenres'
import { GenresFilterProps } from '@typesFiles/props/genresFilter'
export default function FilterByGenres({ genres } : GenresFilterProps) {
  const { currentGenres, onChange } = useGenresFilter()

  return (
    <div className="flex flex-row p-2">
      <select name="genresFilter" id="genresFilter" onChange={onChange} >
        {
          genres.map((g : Genre) => (
            <option value={g.id} key={g.id}>{g.name}</option>
          ))
        }
      </select>
    </div>
  )
}
