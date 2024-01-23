import { type FilterValue } from '../types'
import { FILTERS_BUTTONS } from '../const'

interface Props {
  filterSelected: FilterValue
  onFilterChange: (filter: FilterValue) => void
}

export const Filters: React.FC<Props> = ({
  filterSelected,
  onFilterChange
}) => {
  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTTONS).map(([key, { filter, label, href }]) => {
        return (
          <li key={filter}>
            <a
              href={href}
              className={`${filterSelected === key ? 'selected' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                onFilterChange(key as FilterValue)
              }}
            >
              {label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
