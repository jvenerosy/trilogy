import React from 'react'
import { ContainerProps } from './ContainerProps'
import { has, is } from '../../services/classify'
import clsx from 'clsx'
import { hashClass } from '../../helpers'
import { useTrilogyContext } from '../../context'
import { getBackgroundClassName, StickyPosition } from '../../objects'

/**
 * Container Component
 * @param centered {boolean} Centered horizontaly
 * @param verticalCentered {boolean} Centered verticaly
 * @param children {React.ReactNode}
 * @param sticky {StickyPosition} Container sticky top / bottom
 * @param stickyOffSetTop {Number} Set top of sticky container (transformed in px)
 * @param stickyOffSetBottom {Number} Set bottom of sticky container (transformed in px)
 * @param background {TrilogyColor} Container STICKY Background Color
 * @param pulledRight {Boolean} Container pulled to right
 * @param pulledLeft {Boolean} Container pulled to left
 * @param fluid {boolean} Make the container usable across the width of your section
 * @param medium {boolean} Set medium container
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */

const Container = ({
  className,
  fluid,
  centered,
  verticalCentered,
  medium,
  fullwidth,
  sticky,
  stickyOffSetTop,
  stickyOffSetBottom,
  background,
  pulledRight,
  pulledLeft,
  ...others
}: ContainerProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const stickyClassName = () => {
    switch (sticky) {
      case StickyPosition.TOP:
        return is('sticky-top')
      case StickyPosition.BOTTOM:
        return is('sticky-bottom')
      default:
        return ''
    }
  }

  const classes = hashClass(
    styled,
    clsx(
      'container',
      fluid && is('fluid'),
      medium && is('medium'),
      centered && is('centered'),
      fullwidth && is('fullwidth'),
      verticalCentered && is('vcentered'),
      pulledRight && is('pulled-right'),
      pulledLeft && is('pulled-left'),
      sticky && background && has(getBackgroundClassName(background)),
      sticky && stickyClassName(),
      className,
    ),
  )

  const styles = {
    top: stickyOffSetTop,
    bottom: stickyOffSetBottom,
  }

  return <div className={classes} {...others} style={styles} />
}

export default Container
