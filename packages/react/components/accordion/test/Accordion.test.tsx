import * as React from 'react'
import { render } from '@testing-library/react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from '../index'

describe('Accordion', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <Accordion data-testid={'accordions'}>
        <AccordionItem>
          <AccordionHeader>Accordion Header</AccordionHeader>
          <AccordionBody> content </AccordionBody>
        </AccordionItem>
      </Accordion>,
    )
    const accordion = getByTestId('accordions')
    expect(accordion).toBeInTheDocument()
  })
})
