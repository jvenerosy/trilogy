import {
  Accessibility,
  Centerable,
  Dev,
  Position,
  StatusState,
  StatusStateValues,
  VariantState,
  VariantStateValues,
} from '@/objects'

export interface BoxHeaderProps extends Position, Centerable, Accessibility, Dev {
  children?: React.ReactNode
  help?: string
  className?: string
  variant?: VariantState | StatusState | VariantStateValues | StatusStateValues
}
