import React, { createContext } from 'react'
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native'
import { CardProps } from './CardProps'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import ContentLoader, { Rect } from 'react-content-loader/native'
import { ComponentName } from '@/components/enumsComponentsName'
import { StatesContext } from '@/context/providerStates'

export const CardContext = createContext({
  floating: false,
  backgroundColor: '' || {},
  horizontal: false,
  reversed: false,
  active: false,
})

/**
 * Card Component
 * @param flat Adding border for Card content
 * @param horizontal Horizontal Card orientation
 * @param floating Floating card
 * @param children {ReactNode}
 * @param onClick {Function} onClick Event
 * @param skeleton {boolean} Loading card
 * @param reversed {boolean} Reversed card
 * @param backgroundColor {TrilogyColor} Card Background Color
 * @param fullheight {boolean}
 * @param active {boolean} Activated box
 * @param others
 */
const Card = ({
  children,
  flat,
  horizontal,
  floating,
  onClick,
  skeleton,
  reversed,
  fullheight,
  active,
  ...others
}: CardProps): JSX.Element => {
  const borderColor = '#ccc'
  const cardRadius = 6
  const styles = StyleSheet.create({
    card: {
      width: '100%',
      minHeight: 100,
      borderWidth: (flat && 1) || (active && 2) || 0,
      borderColor:
        (flat && borderColor) ||
        (active && getColorStyle(TrilogyColor.MAIN)) ||
        (active === false && getColorStyle(TrilogyColor.NEUTRAL)) ||
        'transparent',
      borderRadius: cardRadius,
      flex: fullheight ? 1 : 0,
    },
    horizontal: {
      flexDirection: 'row',
      maxWidth: '100%',
    },
    shadow: {
      shadowColor: 'rgba(0,0,0,.1)',
      shadowOffset: { width: 2, height: 4 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
    contentHorizontal: {
      borderWidth: 2,
      margin: 2,
      padding: 10,
      minHeight: 10,
    },
    skeleton: {
      width: '100%',
      minHeight: 50,
      backgroundColor: getColorStyle(TrilogyColor.NEUTRAL_FADE),
      overflow: 'hidden',
      borderRadius: cardRadius,
    },
    reversed: {
      flexDirection: 'column-reverse',
    },
  })

  const CardSkeleton = () => (
    <ContentLoader style={styles.skeleton} {...others} testID='skeleton-id'>
      <View style={{ opacity: 0 }}>{children}</View>
      {Platform.OS === 'android' && (
        <View>
          <Rect rx='10' ry='10' width='100%' height='100%' />
        </View>
      )}
    </ContentLoader>
  )

  let cardView: JSX.Element

  if (skeleton) {
    return <CardSkeleton />
  }

  if (horizontal) {
    cardView = (
      <View style={[styles.horizontal, styles.card]} testID='card-horizontal'>
        {children}
      </View>
    )
  } else if (reversed) {
    cardView = (
      <View style={[styles.reversed, styles.card]} testID='card-reversed'>
        {children}
      </View>
    )
  } else {
    cardView = (
      <View style={[styles.card]} {...others}>
        {children}
      </View>
    )
  }

  return onClick ? (
    <StatesContext.Provider value={{ inverted: false, active: !!active, flat: !!flat }}>
      <CardContext.Provider
        value={{
          floating: floating || false,
          backgroundColor: 'white',
          horizontal: horizontal || false,
          reversed: reversed || false,
          active: active || false,
        }}
      >
        <View style={{ width: '100%' }}>
          <TouchableOpacity testID='card-click-test' style={{ width: '100%' }} onPress={onClick} activeOpacity={0.85}>
            {cardView}
          </TouchableOpacity>
        </View>
      </CardContext.Provider>
    </StatesContext.Provider>
  ) : (
    <StatesContext.Provider value={{ inverted: false, active: !!active, flat: !!flat }}>
      <CardContext.Provider
        value={{
          floating: floating || false,
          backgroundColor: 'white',
          horizontal: horizontal || false,
          reversed: reversed || false,
          active: active || false,
        }}
      >
        {cardView}
      </CardContext.Provider>
    </StatesContext.Provider>
  )
}

Card.displayName = ComponentName.Card

export default Card
