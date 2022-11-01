import { useMemo, useState } from 'react'

import { menu, MenuItem } from '../data/data'

type menuMapItem = MenuItem & {
  id: string
  parentId?: string
  parentTitle?: string
}

export function usePrevious<T>(state: T) {
  const [tuple, setTuple] = useState([state, null])
  if (tuple[1] !== state) {
    setTuple([tuple[1], state])
  }

  return tuple[0]
}

export const useMenu = () => {
  const [currentMenuId, setCurrentMenuId] = useState('root')
  const previousMenuId = usePrevious(currentMenuId)

  const direction =
    previousMenuId &&
    currentMenuId.split('-').length < previousMenuId.split('-').length
      ? 'left'
      : 'right'

  const menuMap = useMemo(() => {
    const menuMapped = new Map<string, menuMapItem>()
    const makeItems = (
      item: MenuItem,
      id: string,
      parentId?: string,
      parentTitle?: string,
    ) => {
      menuMapped.set(id, { id, parentId, parentTitle, ...item })
      if (item.subMenu) {
        item.subMenu.forEach((subItem, idx) => {
          makeItems(subItem, `${id}-${idx}`, id, item.title)
        })
      }
    }
    makeItems(menu, 'root')
    return menuMapped
  }, [])

  const currentMenu = menuMap.get(currentMenuId)

  return { currentMenuId, setCurrentMenuId, direction, currentMenu }
}
