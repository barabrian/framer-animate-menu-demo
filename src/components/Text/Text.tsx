import { createElement, ElementType, ReactNode } from 'react'
import cn from 'classnames'

export interface TextProps {
  /**
   * Type of element to render.
   */
  as?: ElementType
  /**
   * Type of text.
   */
  variant?: keyof typeof variants
  /**
   * Font weight.
   */
  weight?: keyof typeof weights
  family?: keyof typeof families
  size?: keyof typeof sizes
  children?: ReactNode
  className?: string
  onClick?: () => void
}

export type GetTextStylesProps = Pick<
  TextProps,
  'variant' | 'weight' | 'family' | 'size'
>

type VariantsType = Record<
  string,
  {
    weight?: string
    family?: string
    size?: string
    custom?: string[]
  }
>

const families = {
  sans: 'font-sans',
  serif: 'font-serif',
}

const sizes = {
  hero: 'text-13 md:text-16.25',
  h1: 'text-9.5 md:text-12',
  h2: 'text-8 md:text-10',
  h3: 'text-5 md:text-5.5',
  p: 'text-3.5 md:text-4',
  sm: 'text-3 md:text-3.5',
}
const weights = {
  light: 'font-300',
  normal: 'font-400',
  medium: 'font-500',
}
const variants: VariantsType = {
  sm: {
    size: sizes.sm,
    family: families.sans,
    weight: weights.light,
  },
  p: {
    size: sizes.p,
    family: families.sans,
    weight: weights.light,
  },
  h1: {
    size: sizes.h1,
    family: families.serif,
    weight: weights.medium,
  },
  h2: {
    size: sizes.h2,
    family: families.serif,
    weight: weights.medium,
  },
  h3: {
    size: sizes.h3,
    family: families.serif,
    weight: weights.medium,
  },
  capsSM: {
    size: sizes.sm,
    family: families.sans,
    weight: weights.medium,
    custom: ['uppercase'],
  },
  hero: {
    size: sizes.hero,
    family: families.serif,
    weight: weights.medium,
  },
}

export const getTextStyles = (
  { variant = 'p', weight, family, size }: GetTextStylesProps,
  className: string = '',
) =>
  cn(
    weight ? weights[weight] : variants[variant].weight,
    size ? sizes[size] : variants[variant].size,
    family ? families[family] : variants[variant].family,
    className,
    ...(variants[variant]?.custom || []),
  )

export const Text = ({
  as = 'p',
  className,
  variant,
  weight,
  family,
  size,
  ...restProps
}: TextProps) =>
  createElement(as, {
    className: getTextStyles({ variant, weight, family, size }, className),
    ...restProps,
  })

export default Text
