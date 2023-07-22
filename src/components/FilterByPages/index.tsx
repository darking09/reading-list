'use client'
import { FilterByPagesProps } from '@typesFiles/props/filterByPages'
import useFilterByPages from './useFilterByPages'

export default function FilterByPages({ maxPage, minPage } : FilterByPagesProps) {
  const { currentPages, onChange, onMouseUp } = useFilterByPages(maxPage)

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Filtro por páginas ({currentPages} Pág.)</span>
      </label>
      <input className="range range-xs" type='range' id="filterByPages" min={minPage} max={maxPage} value={currentPages} onChange={onChange} onMouseUp={onMouseUp} />
    </div>
  )
}
