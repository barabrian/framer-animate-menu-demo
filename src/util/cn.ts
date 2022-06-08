import clsx, { ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

import conf from '../../tailwind.config'

const tw = extendTailwindMerge({
  classGroups: {
    // using tailwind config to config special groups like font-size
    'font-size': [
      {
        text: [
          ...Object.keys(conf?.theme?.fontSize ?? {}),
          ...Object.keys(conf?.theme?.extends?.fontSize ?? {}),
        ],
      },
    ],
  },
})

/** Combine clsx and twMerge */
const cn = (...classes: ClassValue[]) => tw(clsx(...classes))
export default cn
