import { Divider, Pagination, Section, Title, TitleLevels } from '@trilogy-ds/react/components'
import * as React from 'react'

export default function PaginationScreen(): JSX.Element {
  return (
    <>
      <Section>
        <Title level={TitleLevels.THREE}>Pagination</Title>
        <Divider />
        <Pagination onClick={(e) => console.log('event', e)} count={50} href={(page) => `?page=${page}`} />
      </Section>
      <Section>
        <Pagination onClick={(e) => console.log('event', e)} count={50} href={(page) => `?page=${page}`} />
        <Divider />
        <Pagination onClick={(e) => console.log('event', e)} count={50} defaultPage={2} />

        <Divider />
        <Pagination onClick={(e) => console.log('event', e)} count={20} pageSize={2} defaultPage={2} />
      </Section>
    </>
  )
}
