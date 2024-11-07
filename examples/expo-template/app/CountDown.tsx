import { Countdown, CountdownFormat, Section, Spacer, SpacerSize } from '@trilogy-ds/react/components'
import * as React from 'react'

export default function CountdownScreen(): JSX.Element {
  return (
    <Section>
      <Countdown inverted deadline={new Date('2023-12-24 18:00:00')}></Countdown>
      <Spacer size={SpacerSize.FOUR} />
      <Countdown small deadline={new Date('2024-09-28 18:00:00')} format={CountdownFormat.DAY_HOUR_MIN}></Countdown>
    </Section>
  )
}
