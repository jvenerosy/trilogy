import {
  Button,
  ButtonList,
  ButtonVariant,
  Divider,
  IconName,
  Section,
  Spacer,
  Title,
  TitleLevels,
} from '@trilogy-ds/react/components'
import React from 'react'

const Separator = () => {
  return (
    <>
      <Spacer size={12} />
      <Divider />
      <Spacer size={48} />
    </>
  )
}

export default function ButtonScreen(): JSX.Element {
  return (
    <Section>
      {/*  ======== variants ======== */}
      <Title level={TitleLevels.TWO}>Variant </Title>
      <Spacer size={12} />
      <ButtonList>
        {Object.values(ButtonVariant).map((variant, index) => {
          return (
            <Button variant={variant} key={index}>
              {variant}
            </Button>
          )
        })}
      </ButtonList>
      <Separator />

      {/*  ======== loading & variant ======== */}
      <Title level={TitleLevels.TWO}>loading + variant </Title>
      <Spacer size={12} />
      <ButtonList>
        {Object.values(ButtonVariant).map((color, index) => {
          return (
            <Button variant={color} key={index} loading>
              {color}
            </Button>
          )
        })}
      </ButtonList>
      <Separator />

      {/*  ======== disabled & variant ======== */}
      <Title level={TitleLevels.TWO}>disabled + variant </Title>
      <Spacer size={12} />
      <ButtonList>
        {Object.values(ButtonVariant).map((color, index) => {
          return (
            <Button variant={color} key={index} disabled>
              {color}
            </Button>
          )
        })}
      </ButtonList>
      <Separator />

      {/*  ======== fullwidth ======== */}
      <Title level={TitleLevels.TWO}>fullwidth </Title>
      <Spacer size={12} />
      <Button fullwidth variant={'PRIMARY'}>
        Cliquer
      </Button>
      <Separator />

      {/*  ======== icons ======== */}
      <Title level={TitleLevels.TWO}>iconName </Title>
      <Spacer size={12} />
      <ButtonList>
        <Button iconName={IconName.TIMES} variant={'CONVERSION'}>
          Icon Conversion
        </Button>
        <Button iconName={IconName.ARROW_DOWN} variant={'PRIMARY'}>
          Icon Primary
        </Button>
        <Button iconName={IconName.EYE} variant={'SECONDARY'}>
          Icon Secondary
        </Button>
        <Button iconName={IconName.SEARCH} variant={'GHOST'}>
          Icon Ghost
        </Button>
      </ButtonList>
    </Section>
  )
}
