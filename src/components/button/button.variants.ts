import { cva, type VariantProps } from 'class-variance-authority'

export const buttonVariants = cva(
  [
    'transition-colors',
    'disabled:bg-neutral-light',
    'disabled:text-white',
    'font-bold',
    'rounded-lg',
    'h-min',
    'flex',
    'items-center',
    'justify-center',
    'gap-2',
    'border',
    'border-solid',
    'border-transparent',
  ],
  {
    variants: {
      variant: {
        primary: ['bg-primary', 'hover:bg-primary-dark', 'focus-visible:bg-primary-darkest', 'text-white'],
        secondary: ['bg-tertiary', 'hover:bg-tertiary-dark', 'focus-visible:bg-tertiary-darkest', 'text-white'],
        tertiary: [
          'bg-neutral-lightest',
          'hover:bg-neutral',
          'hover:text-white',
          'hover:border-transparent',
          'focus-visible:bg-neutral-darkest',
          'focus-visible:text-white',
          'focus-visible:border-transparent',
          'text-neutral',
          'border',
          'border-solid',
          'border-neutral-light-2',
        ],
        ghost: ['hover:bg-neutral-lightest', 'focus-visible:bg-neutral-light', 'text-neutral'],
        danger: ['bg-danger', 'hover:bg-danger-dark', 'focus-visible:bg-danger-darkest', 'text-white'],
      },
      size: {
        large: ['px-8', 'py-4', 'text-lg', 'leading-6', '[&_svg]:text-2xl'],
        medium: ['px-6', 'py-4', 'text-base', 'leading-none', '[&_svg]:text-xl'],
        small: ['px-5', 'py-2', 'text-sm', 'leading-none', '[&_svg]:text-base'],
      },
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>