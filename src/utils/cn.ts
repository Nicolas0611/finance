import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

/** Preset typography utilities must not conflict with semantic color utilities (text-secondary, etc.). */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        {
          text: [
            'preset-1',
            'preset-2',
            'preset-3',
            'preset-4',
            'preset-5',
            'preset-6',
          ],
        },
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
