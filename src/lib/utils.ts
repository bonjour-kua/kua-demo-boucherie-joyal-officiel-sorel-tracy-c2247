import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Standard Tailwind class merge helper. Every component that takes a
 * `className` prop should pipe it through this so user overrides win
 * over base styles without producing duplicate-class noise.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
