import { Slot } from '@radix-ui/react-slot'
import { twMerge } from 'tailwind-merge'

import { buttonVariants, type ButtonVariants } from './button.variants'

export type ButtonProps = {
  asChild?: boolean
} & ButtonVariants &
  React.ComponentProps<'button'>

export const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  className,
  asChild = false,
  ...rest
}: ButtonProps) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp className={twMerge(buttonVariants({ variant, size, className }))} {...rest}>
      {children}
    </Comp>
  )
}