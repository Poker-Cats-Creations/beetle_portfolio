'use client'
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/Utils'

const buttonVariants = cva(
   'inline-flex items-center justify-center capitalize gap-[0.75rem] leading-normal transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold hover:scale-95 transition-all',
   {
      variants: {
         variant: {
            empty: '',
            default: 'text-pig-pink-50 bg-pig-pink-950 hover:bg-pink-950',
            secondary: 'text-pig-pink-50 bg-pig-pink-950 hover:bg-pink-950',
            outline: 'text-pig-pink-950 bg-transparent ring ring-1 ring-pig-pink-950',
            ghost: 'hover:text-white-300 hover:bg-white-50/[.06] active:bg-white-50/[.12] disabled:bg-transparent',
            dimmed: 'bg-pig-pink-950/30 text-pig-pink-50 backdrop-blur-md hover:bg-pig-pink-950/60',
            link: 'text-accent-600 underline-offset-4 hover:underline',
            counter: 'bg-transparent hover:bg-transparent justify-start',
            accent:
               'text-mindnight-blue-50 bg-mindnight-blue-500 hover:bg-mindnight-blue-600 active:bg-mindnight-blue-700 disabled:bg-mindnight-blue-500 focus:outline outline-1 outline-offset-4 outline-mindnight-blue-500',
            white: 'bg-pig-pink-50 text-pig-ping-950',
            danger: 'text-danger-50 bg-danger-600 hover:bg-danger-700 active:bg-danger-800 disabled:bg-danger-600',
            warning: 'text-warning-50 bg-warning-600 hover:bg-warning-700 active:bg-warning-800 disabled:bg-warning-600',
            success: 'text-success-50 bg-success-600 hover:bg-success-700 active:bg-success-800 disabled:bg-success-600',
            input: 'justify-start font-default ring-1 ring-primary-badge text-foreground-500',
         },
         rounded: {
            true: '!rounded-full',
         },
         size: {
            counter: 'p-0 gap-0 font-normal',
            link: 'p-0',
            input: 'rounded-xl p-4 font-normal w-full',
            'xs-link': 'rounded-lg p-[.5rem] h-10',
            xs: 'rounded-lg px-[1rem] py-[.5rem] h-10',
            'sm-link': 'rounded-xl p-[.75rem] h-12',
            sm: 'rounded-xl px-[1.5rem] py-[.75rem] h-12',
            default: 'text-sm rounded-[.625rem] px-[1.624rem] py-[.812rem] md:text-base md:rounded-[0.875rem] md:px-[2rem] md:py-[1rem]',
            lg: 'rounded-2xl px-[2.5rem] py-[1.250rem]',
            'xs-icon': 'rounded-[0.5rem] p-[.5rem]',
            'sm-icon': 'rounded-[0.625rem] p-[.625rem] md:p-[.75rem]',
            'default-icon': 'rounded-[.625rem] p-[.5rem] md:rounded-[.875rem] md:p-[1rem]',
            'lg-icon': 'rounded-[.75rem] p-[.75rem] md:rounded-[.875rem] md:p-[1rem]',
         },
      },
      defaultVariants: {
         variant: 'default',
         size: 'default',
      },
   }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
   asChild?: boolean
   icon?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
   ({ className, variant, rounded, size, asChild = false, icon = false, ...props }, ref) => {
      if (icon) {
         size = `${size}-icon` as 'default' | 'sm' | 'lg'
      }

      const Comp = asChild ? Slot : 'button'
      return (
         <Comp
            className={` ${cn(buttonVariants({ variant, rounded, size, className }))}`}
            ref={ref}
            {...props}
         />
      )
   }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
