import * as React from 'react'
import { ImageProps } from './ImageProps'
import { has, is } from '@/services'
import clsx from 'clsx'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'
import { getJustifiedClassName } from '@/objects'

/**
 * Image Component
 * @param src {string} Image source
 * @param alt {string} Image alt
 * @param rounded {boolean} Image rounded
 * @param width {number|string} Image width (Number if not percent else string)
 * @param height {number|string} Image height (Number if not percent else string)
 * @param onClick {Function} onClick Event
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes (ONLY FOR WEB)
 */
const Image = ({
  src,
  alt,
  className,
  id,
  circled,
  width,
  height,
  onClick,
  radius,
  align,
  ...others
}: ImageProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('image', className, align && is(getJustifiedClassName(align))))

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const styles: React.CSSProperties | any = {
    image: {
      width: width,
      height: height,
    },
  }

  return (
    <figure
      id={id}
      onClick={(e) => {
        onClick?.(e)
        e.stopPropagation()
      }}
      className={classes}
      {...others}
    >
      <img
        style={styles.image}
        className={hashClass(styled, clsx(radius && has(`border-radius-${radius}`), circled ? is('circled') : ''))}
        src={typeof src === 'string' ? src : ''}
        alt={alt}
      />
    </figure>
  )
}

export default Image
