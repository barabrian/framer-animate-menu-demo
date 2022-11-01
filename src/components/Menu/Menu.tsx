import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import useMeasure from 'react-use-measure'

import { useMenu } from '@hooks/useMenu'

const variants = {
  enter: (d: string) => ({
    x: d === 'left' ? -224 : 224,
  }),
  center: {
    x: 0,
  },
  exit: (d: string) => ({
    x: d === 'right' ? -224 : 224,
  }),
}

const stagger = {
  enter: {
    scale: 0.7,
    opacity: 0,
  },
  center: {
    scale: 1,
    opacity: 1,
  },
}

export const Menu = () => {
  const { setCurrentMenuId, currentMenu, direction } = useMenu()
  const [ref, { height }] = useMeasure()
  if (!currentMenu) return <div>obbosí</div>
  return (
    <MotionConfig
      transition={{
        duration: 0.3,
      }}
    >
      <motion.div
        animate={{
          height: height || 'auto',
        }}
        className="rounded-box relative w-56 overflow-hidden bg-base-300"
      >
        <AnimatePresence mode="popLayout" custom={direction} initial={false}>
          <motion.div
            custom={direction}
            key={currentMenu.id}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <motion.ul
              initial="enter"
              animate="center"
              transition={{
                staggerChildren: 0.1,
              }}
              ref={ref}
              className="menu p-2"
            >
              {currentMenu.parentId && (
                <motion.li variants={stagger}>
                  <button
                    onClick={() => {
                      if (currentMenu.parentId) {
                        setCurrentMenuId(currentMenu.parentId)
                      }
                    }}
                  >
                    <BsChevronLeft /> {currentMenu.parentTitle}
                  </button>
                </motion.li>
              )}
              <motion.li variants={stagger} className="menu-title">
                <span>{currentMenu.title}</span>
              </motion.li>
              {currentMenu.subMenu?.map((item, idx) => (
                <motion.li variants={stagger} key={`${currentMenu.id}-${idx}`}>
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
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </MotionConfig>
  )
}
