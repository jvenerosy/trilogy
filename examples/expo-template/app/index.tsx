import {
  AutoLayout,
  Box,
  BoxContent,
  Columns,
  ColumnsItem,
  Divider,
  Icon,
  IconName,
  Input,
  ScrollView,
  Section,
  Text,
  TextLevels,
  Title,
  TitleLevels,
  View,
} from '@trilogy-ds/react/components'
import { TypographyAlign } from '@trilogy-ds/react/objects'
import { router } from 'expo-router'
import * as React from 'react'
import Screens from '../components.json'

export default function IndexScreen(): JSX.Element {
  const [list, setList] = React.useState(Screens)

  const handleSearch = React.useCallback((e: string) => {
    const l = { ...Object.keys(Screens) }
    l.forEach((composant: any) => {
      if (!l[composant].toLocaleLowerCase().includes(e.toLocaleLowerCase())) {
        delete l[composant]
      }
    })
    setList(l)
  }, [])

  return (
    <View markup='main' className='main-content'>
      <AutoLayout>
        <ScrollView>
          <Section>
            <Title level={TitleLevels.ONE} typo={[TypographyAlign.TEXT_CENTERED]}>
              You need to test components in other screens
            </Title>
            <Text level={TextLevels.ONE} typo={[TypographyAlign.TEXT_CENTERED]}>
              This home screen is only for navigation
            </Text>
            <Input placeholder='Rechercher un composant' onChange={(e) => handleSearch(e.inputValue)} />
            <Divider />
            <Title level={TitleLevels.THREE} typo={[TypographyAlign.TEXT_CENTERED]}>
              Screens
            </Title>
            <>
              {list.map((name: any, index) => {
                return (
                  <Box
                    key={index}
                    onClick={() => {
                      router.navigate(name)
                    }}
                  >
                    <BoxContent>
                      <Columns verticalCentered>
                        <ColumnsItem size={11}>
                          <Title level={TitleLevels.THREE}>{name}</Title>
                        </ColumnsItem>
                        <ColumnsItem size={1}>
                          <Icon name={IconName.ARROW_RIGHT} />
                        </ColumnsItem>
                      </Columns>
                    </BoxContent>
                  </Box>
                )
              })}
            </>
          </Section>
        </ScrollView>
      </AutoLayout>
    </View>
  )
}
