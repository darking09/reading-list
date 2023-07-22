'use client'
import { Genre } from '@typesFiles/Genres'
import useGenresFilter from './useFilterByGenres'
import { GenresFilterProps } from '@typesFiles/props/genresFilter'
export default function FilterByGenres({ genres } : GenresFilterProps) {
  const { currentGenres, onChange } = useGenresFilter()

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Filtro por genero</span>
      </label>
      <select name="genresFilter" id="genresFilter" onChange={onChange} className="select select-bordered w-full max-w-xs">
        {
          genres.map((g : Genre) => (
            <option value={g.id} key={g.id}>{g.name}</option>
          ))
        }
      </select>
    </div>
  )
}
