import { TrilogyThemeContext } from "../../context/providerTheme.native"
import { useContext } from "react"
import { TrilogyColor, TrilogyColorValues } from "./Color"


export const nativeColors: Record<TrilogyColor, string[]> = {
  [TrilogyColor.BACKGROUND]: ["#fff", "#E9E9E9"],
  [TrilogyColor.MAIN]: ["#3d5d7e", "#eff2f8"],
  [TrilogyColor.ACCENT]: ["#da641b", "#bb5118"],
  [TrilogyColor.FONT]: ["#3d5d7e", "#BBC6CD"],
  [TrilogyColor.SUCCESS]: ["#007B52", "#cae8ca"],
  [TrilogyColor.INFO]: ["#1A688A", "#c8dbec"],
  [TrilogyColor.WARNING]: ["#FFBB33", "#ecdbc6"],
  [TrilogyColor.ERROR]: ["#D42D02", "#eecccc"],
  [TrilogyColor.DISABLED]: ["#646464", "#D1D1D1"],
  [TrilogyColor.HOVERED]: ["#F4F4F4", "#F4F4F4"],
  [TrilogyColor.NEUTRAL]: ["#707070", "#F4F4F4"],
  [TrilogyColor.NEUTRAL_DARK]: ["#646464", "#E9E9E9"],
  [TrilogyColor.NEUTRAL_LIGHT]: ["#E9E9E9", "#E9E9E9"],
  [TrilogyColor.WHITE]: ["#fff", "#E9E9E9"],
}

/**
 * Returns color's style depending on Trilogy Color
 * @param trilogyColor {string} - Trilogy Color
 * @param index {number} - Index of color ( 1 for BG )
 * @returns {string} - Color style value
 */

export const getColorStyle = (
  trilogyColor: TrilogyColor | TrilogyColorValues,
  index?: number
): string => {
  const { theme } = useContext(TrilogyThemeContext)
  const colors = theme?.colors || nativeColors

  const colorArray =
    colors[trilogyColor] || nativeColors[trilogyColor] || colors.default
  const colorIndex =
    index !== undefined && index >= 0 && index < colorArray.length ? index : 0

  if (!trilogyColor || !colors[trilogyColor]) {
    return colors.default
  }
  return colorArray[colorIndex]
}

export const getButtonColorStyle = (buttonVariant?: string): string => {
  const {
    theme: { colors },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useContext(TrilogyThemeContext)

  switch (buttonVariant) {
    case "ACCENT":
      return TrilogyColor.ACCENT
    case "PRIMARY":
      return TrilogyColor.MAIN
    case "SECONDARY":
      return TrilogyColor.HOVERED
    case "GHOST":
      return TrilogyColor.WHITE
    default:
      return TrilogyColor.MAIN
  }
}
