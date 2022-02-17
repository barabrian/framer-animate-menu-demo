import { createElement, ElementType, ReactNode } from 'react'

import cn from '@util/cn'

export interface TextProps {
  /**
   * Type of element to render.
   */
  as?: ElementType
  /**
   * Predefined text appearance.
   */
  variant?: keyof typeof variants
  children?: ReactNode
  className?: string
}

const sizes: Record<keyof typeof variants, string> = {
  hero: 'text-13 md:text-16',
  h1: 'text-9 md:text-12',
  h2: 'text-8 md:text-10',
  h3: 'text-5 md:text-6',
  p: 'text-3 md:text-4',
  sm: 'text-2 md:text-3',
}

export type GetTextStylesProps = Pick<TextProps, 'variant'>

const variants = {
  hero: 'font-serif font-500',
  h1: 'font-serif font-500',
  h2: 'font-serif font-500',
  h3: 'font-serif font-500',
  p: 'font-sans font-300',
  sm: 'font-sans font-300',
}

export const getTextStyles = (
  { variant = 'p' }: GetTextStylesProps,
  className = '',
) => cn(sizes[variant], variants[variant], className)

export const Text = ({
  as = 'p',
  className,
  variant,
  ...restProps
}: TextProps) =>
  createElement(as, {
    className: getTextStyles({ variant }, className),
    ...restProps,
  })

export default Text
