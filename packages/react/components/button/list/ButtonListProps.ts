import type { Layout } from '../../../objects/facets/Layout'
import type { Centerable } from '../../../objects/facets/Centerable'
import type { DividerProps } from '../../divider/DividerProps'
import type { ButtonProps } from '../ButtonProps'

type ButtonListChildrenTypes = React.ReactElement<ButtonProps | DividerProps> | undefined

/**
 * Button List Interface
 */
export interface ButtonListProps extends Layout {
  children?: ButtonListChildrenTypes | ButtonListChildrenTypes[]
}

/**
 * Button List Web Interface
 */
export interface ButtonListWebProps extends ButtonListProps, Centerable {
  className?: string
  isMobile?: boolean
  vertical?: boolean
}
