import { Link } from '@/components/link'
import { Text, TextMarkup } from '@/components/text'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import * as React from 'react'
import { TimelineContentWebProps } from './TimelineContentProps'

/**
 * Timeline Content Component
 * @param children {ReactNode} Use it if you want custom children for content
 * @param content {string} Text content
 * @param contentLink {string} Text for content link
 * @param heading {string} Text heading
 * @param link {string} Url link
 * @param Onclick {string} Provide event onCLick
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const TimelineContent = ({
  children,
  className,
  heading,
  content,
  link,
  contentLink,
  onClick,
  ...others
}: TimelineContentWebProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(clsx('timeline-content', className))

  if (children) {
    return (
      <div className={classes} {...others}>
        {children}
      </div>
    )
  }

  return (
    <div
      className={classes}
      {...others}
      onClick={(e) => {
        onClick?.(e)
        e.stopPropagation()
      }}
    >
      {heading && <Text markup={TextMarkup.P}>{heading}</Text>}
      {content && (
        <Text className='main-content' markup={TextMarkup.P}>
          {content}
        </Text>
      )}
      {link && <Link href={link}>{contentLink || link}</Link>}
    </div>
  )
}

export default TimelineContent
