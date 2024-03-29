import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Hero from '../Hero'
import { Alignable, VariantState } from '../../../objects'

describe('Hero', () => {
  it('renders children', () => {
    const { getByText } = render(<Hero>My Hero Content</Hero>)
    const contentElement = getByText('My Hero Content')
    expect(contentElement).toBeInTheDocument()
  })

  it('adds className to the root element', () => {
    const { container } = render(<Hero className='my-class'>My Hero Content</Hero>)
    const heroElement = container.querySelector('.hero')
    expect(heroElement).toHaveClass('my-class')
  })

  it('sets background image if backgroundSrc is provided', () => {
    const { container } = render(<Hero backgroundSrc='/path/to/image.jpg'>My Hero Content</Hero>)
    const heroElement = container.querySelector('.hero')
    expect(heroElement).toHaveStyle({ backgroundImage: 'url(/path/to/image.jpg)' })
  })

  it('adds variant class to the root element if variant is provided', () => {
    const { container } = render(<Hero variant={VariantState.PRIMARY}>My Hero Content</Hero>)
    const heroElement = container.querySelector('.hero')
    expect(heroElement).toHaveClass('has-background-primary')
  })

  it('adds alignment classes to the root element if align and justify props are provided', () => {
    const { container } = render(<Hero align={Alignable.ALIGNED_CENTER}>My Hero Content</Hero>)
    const heroElement = container.querySelector('.hero')
    expect(heroElement).toHaveClass('is-aligned-center')
  })

  it('adds overlapped class to the root element if overlap prop is provided', () => {
    const { container } = render(
      <Hero overlap>
        <div key='1'>First overlap</div>
        <div key='2'>Second overlap</div>
      </Hero>,
    )
    const heroElement = container.querySelector('.hero')
    expect(heroElement).toHaveClass('is-overlapped')
  })

  it('sets onClick handler on the root element if onClick prop is provided', () => {
    const handleClick = jest.fn()
    const { getByText } = render(<Hero onClick={handleClick}>Hero Click</Hero>)
    fireEvent.click(getByText('Hero Click'))
    expect(handleClick).toHaveBeenCalled()
  })
})
