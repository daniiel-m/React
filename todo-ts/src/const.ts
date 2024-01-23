export const TODO_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
} as const

export const FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    filter: 'all',
    label: 'All',
    href: '/?filter=all'
  },
  [TODO_FILTERS.ACTIVE]: {
    filter: 'active',
    label: 'Active',
    href: '/?filter=active'
  },
  [TODO_FILTERS.COMPLETED]: {
    filter: 'completed',
    label: 'Completed',
    href: '/?filter=completed'
  }
} as const
