'use client'
import useGenresFilter from './useFilterByGenres'
import { GenresFilterProps } from '@typesFiles/props/genresFilter'
export default function FilterByGenres({ genres } : GenresFilterProps) {
  const { currentGenres, onChange } = useGenresFilter()

  return (
    <div className="flex flex-row p-2">
      <select name="genresFilter" id="genresFilter" onChange={onChange} >
        {
          genres.map((g : string, index : number) => (
            <option value={g} key={index}>{g}</option>
          ))
        }
      </select>
    </div>
  )
}
