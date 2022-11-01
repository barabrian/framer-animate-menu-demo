import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

import { useMenu } from '@hooks/useMenu'

export const MenuNoAnimation = () => {
  const { setCurrentMenuId, currentMenu } = useMenu()
  if (!currentMenu) return <div>obbosí</div>
  return (
    <div className="rounded-box relative w-56 overflow-hidden bg-base-300">
      <div>
        <ul className="menu p-2">
          {currentMenu.parentId && (
            <li>
              <button
                onClick={() => {
                  if (currentMenu.parentId) {
                    setCurrentMenuId(currentMenu.parentId)
                  }
                }}
              >
                <BsChevronLeft /> {currentMenu.parentTitle}
              </button>
            </li>
          )}
          <li className="menu-title">
            <span>{currentMenu.title}</span>
          </li>
          {currentMenu.subMenu?.map((item, idx) => (
            <li key={`${currentMenu.id}-${idx}`}>
              <button
                onClick={() => {
                  if (item.subMenu) {
                    setCurrentMenuId(`${currentMenu.id}-${idx}`)
                  }
                }}
              >
                {item.title}{' '}
                {item.subMenu && <BsChevronRight className="ml-auto" />}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
