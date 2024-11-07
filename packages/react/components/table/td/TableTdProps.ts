import { Clickable } from '@/objects'
import { CommonProps } from '@/objects/facets/CommonProps'

export interface TableTdProps extends Clickable, CommonProps {
  children: React.ReactNode
  rowSpan?: number
  colSpan?: number
}
