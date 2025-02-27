import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { TimelineMarkerProps } from './TimelineMarkerProps'
import { Icon, IconSize } from '@/components/icon'
import { TimelineItemContext } from '../item/TimelineItem.native'
import { getColorStyle, TrilogyColor } from '@/objects'
import { TimelineHeightContext } from '@/components/timeline/Timeline.native'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * TimelineMarker Native Component
 * @param iconName {IconName} Icon Name - sample : IconName.CHECK
 * @param iconColor {IconColor} Icon Color
 * @param testId {string} Test Id for Test Integration
 */
const TimelineMarker = ({ iconName }: TimelineMarkerProps): JSX.Element => {
  const { active, done, cancel } = useContext(TimelineItemContext)
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
        (active && getColorStyle(TrilogyColor.MAIN)) ||
        (cancel && getColorStyle(TrilogyColor.NEUTRAL)) ||
        (done && getColorStyle(TrilogyColor.MAIN)) ||
        getColorStyle(TrilogyColor.NEUTRAL_FADE),
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
            (active && TrilogyColor.BACKGROUND) ||
            (cancel && TrilogyColor.NEUTRAL_FADE) ||
            (done && TrilogyColor.BACKGROUND) ||
            TrilogyColor.BACKGROUND
          }
          backgroundColor={
            (active && TrilogyColor.MAIN) ||
            (cancel && TrilogyColor.NEUTRAL) ||
            (done && TrilogyColor.MAIN) ||
            TrilogyColor.NEUTRAL_FADE
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
