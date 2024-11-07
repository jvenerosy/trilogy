import { Box, BoxContent, Divider, IconName, Section, Text } from '@trilogy-ds/react/components'
import { TrilogyColor } from '@trilogy-ds/react/objects'
import * as React from 'react'

export default function DividerScreen(): JSX.Element {
  return (
    <Section>
      <Box>
        <Divider iconName={IconName.EYE_SLASH} />
        <Text>Lorem ipsum dolor sit amet</Text>

        <Divider
          color={TrilogyColor.MAIN}
          backgroundColor={TrilogyColor.MAIN}
          textColor={TrilogyColor.BACKGROUND}
          iconName={IconName.EYE_SLASH}
        />
        <Text>Lorem ipsum dolor sit amet</Text>
      </Box>
      <Box>
        <Text>Lorem ipsum dolor sit amet</Text>

        <Divider
          color={TrilogyColor.MAIN}
          textColor={TrilogyColor.MAIN}
          backgroundColor={TrilogyColor.BACKGROUND}
          content={'New Message'}
        />
        <Text>Lorem ipsum dolor sit amet</Text>
      </Box>
      <Box>
        <BoxContent>
          <Divider unboxed />
        </BoxContent>
      </Box>
      <Divider />
    </Section>
  )
}
