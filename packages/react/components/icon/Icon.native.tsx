import React, { useContext } from 'react'
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native'
import { WithLocalSvg } from 'react-native-svg/css'
import ContentLoader, { Circle } from 'react-content-loader/native'
import { IconProps } from './IconProps'
import { IconSize } from './IconEnum'
import { getAlignStyle } from '@/objects/facets/Alignable'
import { getColorStyle, TrilogyColor, TrilogyColorValues } from '@/objects/facets/Color'
import { ComponentName } from '../enumsComponentsName'
import { TrilogyThemeContext } from '@/context/providerTheme.native'
import { StatesContext } from '@/context/providerStates'
import Text from '@/components/text/Text.native'

/**
 * Icon Component
 * @param size Size of Icon
 * @param name IconName
 * @param badgeContent {string} Display badge with icon
 * @param status SUCCESS|ERROR|WARNING|PRIMARY|TERTIARY|WHITE|GREY If CircleIcon or not
 * @param circled true-false if CircleIcon
 * @param content If TextIcon use it for text
 * @param stacked {boolean} Stacked icon
 * @param backgroundColor {TrilogyColor} Custom Background color only if circled
 * @param color {IconColor} Custom Icon Color
 * @param statusPosition {IconStatusPosition} Position for icon with status (TOP|BOTTOM)
 * @param stretched {boolean} Stretched icon
 * @param onClick {Function} onClick Event Icon
 * @param align { Alignable | AlignableValues} align content
 * @param skeleton {boolean} Icon Skeleton
 */
const Icon = ({
  size,
  name,
  circled,
  stretched,
  color,
  backgroundColor,
  onClick,
  align,
  skeleton,
  testId,
  ...others
}: IconProps): JSX.Element => {
  const {
    theme: { icons },
  } = useContext(TrilogyThemeContext)

  const statesContext = useContext(StatesContext)
  const content = ''
  const style = {}

  const defaultSize =
    (size === IconSize.HUGE && 66) ||
    (size === IconSize.LARGE && 44) ||
    (size === IconSize.MEDIUM && 30) ||
    (size === IconSize.SMALL && 20) ||
    (size === IconSize.SMALLER && 16) ||
    20

  const iconColor =
    (color && getColorStyle(color as TrilogyColor | TrilogyColorValues)) ||
    (statesContext.inverted && getColorStyle(TrilogyColor.BACKGROUND)) ||
    getColorStyle(TrilogyColor.MAIN)

  const iconSkeletonRadius =
    (size === IconSize.HUGE && 50) ||
    (size === IconSize.LARGE && 35) ||
    (size === IconSize.MEDIUM && 25) ||
    (size === IconSize.SMALL && 15) ||
    (size === IconSize.SMALLER && 10) ||
    15

  const circledWidth =
    (size === IconSize.HUGE && 99) ||
    (size === IconSize.LARGE && 66) ||
    (size === IconSize.MEDIUM && 48) ||
    (size === IconSize.SMALL && 32) ||
    (size === IconSize.SMALLER && 38) ||
    32

  const styles = StyleSheet.create({
    rootView: {
      alignSelf: getAlignStyle(align),
    },
    iconCircled: {
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      transform: Platform.OS === 'ios' ? (stretched && [{ skewX: '20deg' }]) || [{ skewX: '0deg' }] : [],
    },
    stretched: {
      justifyContent: 'center',
      alignItems: 'center',
      width: circledWidth + 15,
      height: circledWidth,
      backgroundColor: iconColor,
      borderTopRightRadius: 10,
      transform: Platform.OS === 'ios' ? (stretched && [{ skewX: '-20deg' }]) || [{ skewX: '0deg' }] : [],
    },
    skeleton: {
      width: circledWidth,
      height: circledWidth,
      borderRadius: iconSkeletonRadius,
      backgroundColor: getColorStyle(TrilogyColor.NEUTRAL_FADE),
      overflow: 'hidden',
    },
  })

  const IconSkeleton = (): JSX.Element => (
    <ContentLoader style={styles.skeleton} {...others}>
      <View style={{ opacity: 0 }} />
      {Platform.OS === 'android' && (
        <View>
          {(size === IconSize.HUGE && <Circle cx='50' cy='50' r='50' />) ||
            (size === IconSize.LARGE && <Circle cx='33' cy='33' r='33' />) ||
            (size === IconSize.MEDIUM && <Circle cx='23' cy='23' r='23' />) ||
            (size === IconSize.SMALL && <Circle cx='15' cy='15' r='15' />) || <Circle cx='15' cy='15' r='15' />}
        </View>
      )}
    </ContentLoader>
  )

  if (skeleton) {
    return <IconSkeleton />
  }

  let iconView: JSX.Element = <View></View>

  if (name && icons) {
    if (stretched && !circled) {
      iconView = (
        <View style={styles.stretched} testID={`${testId}-stretched`}>
          <WithLocalSvg
            style={[styles.iconCircled, styles.icon]}
            asset={icons[name.toString().replace('tri-picto-', '').replace('tri-', '')]}
            width={defaultSize}
            height={defaultSize}
            color={getColorStyle(TrilogyColor.BACKGROUND)}
          />
        </View>
      )
    } else if (circled) {
      iconView = <Text>FAUT CORRIGER ÇA (circled icon)</Text>
    } else {
      iconView = (
        <View {...others}>
          <WithLocalSvg
            style={[styles.icon, style]}
            asset={icons[name.toString().replace('tri-picto-', '').replace('tri-', '')]}
            width={defaultSize}
            height={defaultSize}
            color={iconColor}
          />
        </View>
      )
    }
  }

  return onClick ? (
    <View style={styles.rootView} testID={testId}>
      <TouchableOpacity style={{ width: '100%' }} onPress={onClick} activeOpacity={0.85} testID={`${testId}-pressable`}>
        {iconView}
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.rootView} testID={testId}>
      {iconView}
    </View>
  )
}

Icon.displayName = ComponentName.Icon

export default Icon
