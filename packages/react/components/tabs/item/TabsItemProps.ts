import { IconName, IconNameValues } from '../../../components/icon'
import { Accessibility, Clickable, Dev } from '../../../objects'
import { CommonProps } from '../../../objects/facets/CommonProps'

/**
 * Tabs Item Interface
 */
export interface TabsItemProps extends Clickable, Accessibility, Dev, CommonProps {
  children: React.ReactNode
  active?: boolean
  to?: string
  href?: string
  routerLink?: React.ElementType
  iconName?: IconNameValues | IconName
  disabled?: boolean
}
