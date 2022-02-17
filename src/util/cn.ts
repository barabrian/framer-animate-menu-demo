import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Combine clsx and twMerge */
const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes))
export default cn
