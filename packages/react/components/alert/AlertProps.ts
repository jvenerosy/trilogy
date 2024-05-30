import { Clickable } from './../../objects/facets/Clickable'
import { Accessibility, AlertProps as PropsAlert } from '../../objects/facets'
import { IconName, IconNameValues } from '../icon/IconNameEnum'
import { ClickEvent } from "../../events/OnClickEvent"

export enum ToasterPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
}

/**
 * Toaster config Interface
 */
export interface ToasterInterface {
  toasterChildren?: React.ReactNode
  deletable?: ClickEvent | boolean
  closable?: () => void
  position?: ToasterPosition
  duration?: number
  offset?: number
  onShow?: () => void
  onHide?: () => void
}

/**
 * Alert Interface
 */
export interface AlertProps extends PropsAlert, Clickable, Accessibility {
  iconName?: IconName | IconNameValues
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  className?: string
  iconClassname?: string
  display?: boolean
  toaster?: ToasterInterface
}
