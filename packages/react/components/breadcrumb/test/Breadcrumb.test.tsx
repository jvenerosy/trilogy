// Dependencies
import React from 'react'

// Testing methods
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

// Component to test
import { Breadcrumb } from '..'

describe('Breadcrumb component', () => {
  test('should have a Breadcrumb in document', () => {
    render(<Breadcrumb />)

    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toHaveClass('breadcrumb')
  })

  test('should have a aria-label', () => {
    render(<Breadcrumb />)

    expect(screen.getByRole('navigation').getAttribute('aria-label')).toBe('breadcrumbs')
  })

  test('snapshot', () => {
    const tree = renderer.create(<Breadcrumb className={'className'}>toto</Breadcrumb>).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
