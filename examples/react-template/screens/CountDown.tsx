import React from 'react'
import { Countdown, Section, Spacer, SpacerSize } from '@trilogy-ds/react/components'
import { CountdownFormat } from '@trilogy-ds/react/components/countdown/CountdownEnum'

export const CountdownScreen = (): JSX.Element => {
  return (
    <Section>
      <Countdown deadline={new Date('2023-12-24 18:00:00')}></Countdown>
      <Spacer size={SpacerSize.MEDIUM} />
      <Countdown small deadline={new Date('2024-09-28 18:00:00')} format={CountdownFormat.DAY_HOUR_MIN}></Countdown>
    </Section>
  )
}
