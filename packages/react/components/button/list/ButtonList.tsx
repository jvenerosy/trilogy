import * as React from 'react'
import { ButtonListWebProps } from './ButtonListProps'
import { has } from '@/services'
import clsx from 'clsx'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'

/**
 * Button List Component
 * @param children {ReactNode} ButtonList children
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param centered {boolean} Centered buttons
 * @param vertical {boolean} Verical buttons
 * @param isMobile {boolean} espect mobile screen
 */

const ButtonList = ({ className, id, centered, vertical, ...others }: ButtonListWebProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  return (
    <div
      id={id}
      className={hashClass(
        styled,
        clsx('buttons', className, centered && has('text-centered'), vertical && 'is-vertical'),
      )}
      {...others}
    />
  )
}

export default ButtonList
