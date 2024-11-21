import { TitleLevels, TitleLevelValues, TitleMarkup, TitleMarkupValues } from '@/components/title/TitleEnum'
import {
  Accessibility,
  Clickable,
  Dev,
  Invertable,
  Marginless,
  TypographyAlign,
  TypographyAlignValues,
  TypographyBold,
  TypographyBoldValues,
  TypographyColor,
  TypographyColorValues,
  TypographyTransform,
  TypographyTransformValues,
} from '@/objects'

type Styles = { [key: string]: unknown }

/**
 * Title Interface
 */
export interface TitleProps extends Invertable, Accessibility, Clickable, Marginless, Dev {
  children?: React.ReactNode
  level?: TitleLevelValues | TitleLevels
  loading?: boolean
  typo?:
    | TypographyColor
    | TypographyColorValues
    | TypographyTransform
    | TypographyTransformValues
    | TypographyBold
    | TypographyBoldValues
    | TypographyAlign
    | TypographyAlignValues
    | Array<string>
    | string
  skeleton?: boolean
  className?: string
  href?: string
  markup?: TitleMarkup | TitleMarkupValues
  style?: Styles
  htmlContent?: string
  subtitle?: boolean
  overline?: boolean
}
