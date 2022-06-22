import { createElement, ElementType } from 'react'

import cn from '@util/cn'

export interface ISkeletonLoaderProps {
  className?: string
  as?: ElementType
}

const SkeletonSpan = <span>&zwnj;</span>

export const SkeletonLoader = ({
  className,
  as = 'span',
}: ISkeletonLoaderProps) =>
  createElement(
    as,
    {
      'aria-live': 'polite',
      className: cn(
        'inline-block w-full animation-skeleton bg-black/10',
        className,
      ),
    },
    SkeletonSpan,
  )

export default SkeletonLoader
