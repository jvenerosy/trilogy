import { Clickable } from '@/objects/facets/Clickable'
import { CommonProps } from '@/objects/facets/CommonProps'

/**
 * SegmentedControl Interface
 */
export interface SegmentControlProps extends Clickable, CommonProps {
  children: React.ReactNode
  disabled?: boolean
  activeIndex?: number
  marginless?: boolean
  inverted?: boolean
}
