import React, { useEffect, useRef } from 'react'
import type { View as ViewType } from 'react-native'
import { Animated } from 'react-native'

import { ComponentName } from '@/components/enumsComponentsName'
import { ProgressItemProps } from '@/components/progress/item/ProgressItemProps'

/**
 * Progress Item component - Only if stacked
 * @param percent {number} Progress percent
 * @param status {StatusState} Progress status variant (SUCCESS|INFO|WARNING|ERROR)
 * @param children {React.ReactNode}
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProgressItem = React.forwardRef(
  ({ children, percent, status, ...others }: ProgressItemProps, ref: React.Ref<ViewType>): JSX.Element => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const givenProps = others as any
    const { style } = givenProps
    const animation = useRef(new Animated.Value(0)).current

    useEffect(() => {
      // eslint-disable-next-line no-unused-expressions
      percent &&
        Animated.timing(animation, {
          toValue: percent,
          duration: 1000,
          useNativeDriver: false,
        }).start()
    }, [animation, percent])

    const width = animation.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%'],
      extrapolate: 'clamp',
    })

    return (
      <Animated.View ref={ref} style={[{ width }, ...style]}>
        {children}
      </Animated.View>
    )
  },
)

ProgressItem.displayName = ComponentName.ProgressItem
export default ProgressItem
