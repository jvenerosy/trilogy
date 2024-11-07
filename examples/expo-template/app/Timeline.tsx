import { Divider } from '@trilogy-ds/react'
import {
  IconName,
  Section,
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelineMarker,
} from '@trilogy-ds/react/components'
import React from 'react'

export default function TimelineScreen(): JSX.Element {
  return (
    <Section>
      {/* TIMELINE WITH 4 ITEMSS */}
      <Timeline horizontal>
        <TimelineItem cancel>
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent
            heading='20 September'
            content='loremp ipsum dolor sit amet'
            link={'https://google.fr'}
            contentLink='Check the email'
            onClick={(e) => console.log(e)}
          />
        </TimelineItem>

        <TimelineItem done>
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent
            heading='20 September'
            content='loremp ipsum dolor sit amet'
            link='link'
            contentLink='Check the email'
          />
        </TimelineItem>
        <TimelineItem active>
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent
            heading='20 September'
            content='loremp ipsum dolor sit amet'
            link='link'
            contentLink='Check the email'
          />
        </TimelineItem>
        <TimelineItem undone>
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent
            heading='20 September'
            content='loremp ipsum dolor sit amet'
            link='link'
            contentLink='Check the email'
          />
        </TimelineItem>
      </Timeline>

      <Divider />

      <Timeline>
        <TimelineItem cancel>
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent
            heading='20 September'
            content='Modification de votre identifiant de connexion'
            link='link'
            contentLink='Check the email'
          />
        </TimelineItem>
        <TimelineItem done>
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent
            heading='20 September'
            content='Modification de votre identifiant de connexion'
            link='link'
            contentLink='Check the email'
          />
        </TimelineItem>
        <TimelineItem active>
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent
            heading='20 September'
            content='Modification de votre identifiant de connexion'
            link='link'
            contentLink='Check the email'
          />
        </TimelineItem>
        <TimelineItem undone>
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent
            heading='20 September'
            content='Modification de votre identifiant de connexion'
            link='link'
            contentLink='Check the email'
          />
        </TimelineItem>
      </Timeline>
    </Section>
  )
}
