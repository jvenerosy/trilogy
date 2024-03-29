import { IconName, IconNameValues } from '../icon'
import { Accessibility } from '../../objects'

type RadioChangeEventHandler = (event: {
  radioChecked: boolean
  radioId: string | undefined
  radioName: string
  radioValue: string
}) => void

type RadioClickEventHandler = (event: {
  radioChecked: boolean
  radioId: string | undefined
  radioName: string
  radioValue: string
}) => void

/**
 * Radio Interface
 */
export interface RadioProps extends Accessibility {
  children?: React.ReactNode
  checked?: boolean
  disabled?: boolean
  readonly?: boolean
  id?: string
  label?: string | React.ReactNode

  /**
   * @deprecated
   */
  labelClassName?: string
  onClick?: RadioClickEventHandler
  onChange?: RadioChangeEventHandler
  className?: string
  name?: string
  value?: string
  /**
   * @deprecated
   */
  spaced?: boolean
  /**
   * @deprecated
   */
  reversed?: boolean
  /**
   * @deprecated
   */
  inverted?: boolean
  tile?: boolean
  description?: string | React.ReactNode
  iconTile?: IconName | IconNameValues
  horizontalTile?: boolean
  narrow?: boolean
  marginless?: boolean
}
