import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import * as React from 'react'
import { TimelineItemWebProps } from './TimelineItemProps'

/**
 * Timeline Item Component
 * @param children {ReactNode}
 * @param done {boolean} Done Timeline Item
 * @param active {boolean} Active Timeline Item
 * @param undone {boolean} Undone Timeline Item
 * @param cancel {boolean} Cancel Timeline Item
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const TimelineItem = React.forwardRef((props: TimelineItemWebProps, ref: React.LegacyRef<HTMLDivElement>) => {
  const { className, done, active, undone, cancel, ...others } = props

  const { styled } = useTrilogyContext()
  const classes = hashClass(
    clsx('timeline-item', done && 'done', active && 'active', undone && 'undone', cancel && 'cancel', className),
  )
  return <div ref={ref} className={classes} {...others} />
})

export default TimelineItem
