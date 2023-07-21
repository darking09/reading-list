'use client'
import { FilterByPagesProps } from '@typesFiles/props/filterByPages'
import useFilterByPages from './useFilterByPages'
export default function FilterByPages({ maxPage, minPage } : FilterByPagesProps) {
  const { currentPages, onChange } = useFilterByPages(maxPage, minPage)

  return (
    <div className="flex flex-row p-2">
      <label htmlFor="filterByPages" className='p-3'>Filter by pages ({currentPages})</label><br/>
      <input type='range' id="filterByPages" min={minPage} max={maxPage} value={currentPages} onChange={onChange} />
    </div>
  )
}
