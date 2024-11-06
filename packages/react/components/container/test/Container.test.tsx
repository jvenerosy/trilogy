import { render } from '@testing-library/react'
import * as React from 'react'
import { StickyPosition } from '../../../objects'
import Container from '../Container'

describe('Container', () => {
  it('should render with correct classes and props', () => {
    const { getByTestId } = render(
      <Container
        data-testid='container'
        medium
      >
        <div data-testid='test-child'>Test Child</div>
      </Container>,
    )

    const container = getByTestId('container')
    expect(container).toHaveClass('container')
    expect(container).toHaveClass('is-medium')

    const child = getByTestId('test-child')
    expect(child).toBeInTheDocument()
    expect(child).toHaveTextContent('Test Child')
  })
})
