import { IconName } from '@/components/icon'
import { Sticker } from '@/components/sticker'
import { Switch } from '@/components/switch'
import { Tabs, TabsItem } from '@/components/tabs'
import { Tag, TagVariant } from '@/components/tag'
import { Timeline, TimelineContent, TimelineItem, TimelineMarker } from '@/components/timeline'
import { View } from '@/components/view'
import { StatusState, VariantState } from '@/objects'
import { Textarea } from '@trilogy-ds/react/components/textarea'
import { Title } from '@trilogy-ds/react/components/title'
import '@trilogy-ds/styles/dist/default/trilogy.css'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <View>
          <Tag variant={TagVariant.WARNING}>Tag</Tag>
          <Title>Je suis un titre SSR</Title>
          <Textarea />
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

          <Tabs activeIndex={0}>
            <TabsItem iconName={IconName.BELL}>One</TabsItem>
            <TabsItem iconName={IconName.BELL}>Two</TabsItem>
            <TabsItem iconName={IconName.BELL}>Three</TabsItem>
          </Tabs>

          <Tabs inverted>
            <TabsItem iconName={IconName.BELL} active>
              Centered
            </TabsItem>
            <TabsItem iconName={IconName.BELL}>Two</TabsItem>
            <TabsItem iconName={IconName.BELL}>Three</TabsItem>
          </Tabs>

          <Switch
            status={StatusState.ERROR}
            label='Switch one'
            name='switch one'
            onChange={(e) => {
              console.log('SwitchState =>', e.switchState)
              console.log('SwitchSName =>', e.switchName)
            }}
            onClick={(e) => {
              console.log('SwitchState =>', e.switchState)
              console.log('SwitchSName =>', e.switchName)
            }}
          />
          <Sticker>Sticker</Sticker>
          <Sticker variant={'ACCENT'}>Sticker</Sticker>
          <Sticker variant={'INFO'}>Sticker</Sticker>
          <Sticker variant={VariantState.ACCENT} small>
            Sticker
          </Sticker>
        </View>
      </main>
    </div>
  )
}
