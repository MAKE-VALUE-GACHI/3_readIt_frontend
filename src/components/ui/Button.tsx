import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { ChevronDownIcon } from 'lucide-react'
import { RotateIcon } from '@/components/motion'

export interface ReaditButtonProps extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
  textAlign?: string

  //Icon 추가 시 사용
  defaultIcon?: React.ReactNode
  activeIcon?: React.ReactNode
  isActive?: boolean

  //서브메뉴 핸들링 시 사용
  directionIcon?: boolean
}

const buttonVariants = cva(
  'transition-all cursor-pointer select-none disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        BUTTON: 'py-4 w-full rounded-lg text-black bg-white active:bg-primary active:text-white hover:opacity-80',
        SUMMARY_BUTTON: 'px-4 py-2 rounded-full bg-white text-black active:text-white active:bg-black',
        MAIN_SIDE_BUTTON:
          'flex items-center gap-2 w-full px-2 py-2 text-sm font-medium rounded-md bg-white text-muted-foreground hover:bg-gray-light hover:text-primary active:bg-gray-light active:text-primary',
        SUMMARY_SUBMIT_BUTTON:
          'absolute inset-x-10 bottom-10 h-14 rounded-lg text-lg font-semibold bg-gray-extraLight text-gray-medium',
      },
    },
    defaultVariants: {
      variant: 'BUTTON',
    },
  },
)

function Button({
  className,
  variant,
  defaultIcon,
  activeIcon,
  children,
  directionIcon = false,
  isActive = false,
  asChild = false,
  textAlign,
  ...props
}: ReaditButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(isActive && 'bg-gray-light text-primary', buttonVariants({ variant, className }))}
      {...props}
    >
      <div className={`flex w-full items-center justify-between ${textAlign}`}>
        <span className="flex items-center gap-4">
          {
            // isActive 상태에 따라 아이콘 표시해줌
            !!(defaultIcon && activeIcon) && isActive ? activeIcon : defaultIcon
          }
          {children}
        </span>
        {directionIcon && (
          <RotateIcon isRotated={isActive} rotation={180}>
            <ChevronDownIcon className={cn('text-muted-foreground size-4', isActive && 'text-primary')} />
          </RotateIcon>
        )}
      </div>
    </Comp>
  )
}

export { Button, buttonVariants }
