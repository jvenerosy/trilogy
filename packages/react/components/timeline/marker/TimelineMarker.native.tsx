import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { TimelineMarkerProps } from './TimelineMarkerProps'
import { Icon, IconSize } from '../../icon'
import { TimelineItemContext } from '../item/TimelineItem.native'
import { getColorStyle, TrilogyColor } from '../../../objects/facets/Color'
import { TimelineHeightContext } from '../Timeline.native'
import { ComponentName } from '../../enumsComponentsName'

/**
 * TimelineMarker Native Component
 * @param children {ReactNode} Text child
 */
const TimelineMarker = ({ iconName, iconColor }: TimelineMarkerProps): JSX.Element => {
  const { active, undone, done, cancel } = useContext(TimelineItemContext)
  const { height } = useContext(TimelineHeightContext)

  const styles = StyleSheet.create({
    marker: {
      flex: 1,
      alignSelf: 'flex-start',
      flexDirection: 'column',
    },
    divider: {
      height: height ? height - 48 : 74,
      borderStyle: 'solid',
      borderLeftWidth: 2,
      marginLeft: 'auto',
      marginRight: 'auto',
      borderColor:
        (active && getColorStyle(TrilogyColor.SECONDARY)) ||
        (undone && getColorStyle(TrilogyColor.GREY_LIGHT)) ||
        (cancel && getColorStyle(TrilogyColor.GREY_DISABLED)) ||
        (done && getColorStyle(TrilogyColor.TERTIARY)) ||
        getColorStyle(TrilogyColor.GREY_LIGHT),
    },
    icon: {
      alignSelf: 'center',
    },
  })

  return (
    <View style={styles.marker}>
      <View style={styles.icon}>
        <Icon
          name={iconName}
          circled
          color={
            !iconColor
              ? (active && TrilogyColor.WHITE) ||
                (undone && TrilogyColor.TERTIARY) ||
                (cancel && TrilogyColor.GREY_LIGHT) ||
                (done && TrilogyColor.WHITE) ||
                TrilogyColor.WHITE
              : iconColor
          }
          backgroundColor={
            (active && TrilogyColor.SECONDARY) ||
            (undone && TrilogyColor.GREY_LIGHT) ||
            (cancel && TrilogyColor.GREY_LIGHT) ||
            (done && TrilogyColor.TERTIARY) ||
            TrilogyColor.GREY_LIGHT
          }
          size={IconSize.SMALL}
        />
      </View>

      <View style={styles.divider}></View>
    </View>
  )
}

TimelineMarker.displayName = ComponentName.TimelineMarker

export default TimelineMarker
