import { fireEvent, render, screen } from '@testing-library/react'
import * as React from 'react'
import renderer from 'react-test-renderer'

import { Image } from '@/components/image'
import { is } from '@/services'

describe('Image component', () => {
  test('should have "image" className', () => {
    render(<Image src={'https://www.test.com'} />)

    expect(screen.getByRole('figure')).toBeInTheDocument()
    expect(screen.getByRole('figure')).toHaveClass('image')
  })

  test('should have correct lib attribute', () => {
    render(<Image src={'https://www.test.com'} />)

    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://www.test.com')
  })

  test('should have correct alt attribute', () => {
    render(<Image alt={'test'} src={'https://www.test.com'} />)

    expect(screen.getByRole('img')).toHaveAttribute('alt', 'test')
  })

  test('should have "is-rounded" className', () => {
    render(<Image rounded={true} src={'https://www.test.com'} />)

    expect(screen.getByRole('img')).toHaveClass(is('rounded'))
  })

  test('should not have "is-rounded" className', () => {
    render(<Image rounded={false} src={'https://www.test.com'} />)

    expect(screen.getByRole('img')).not.toHaveClass(is('rounded'))
  })

  test('should onClick attribut work', () => {
    const mockCallBack = jest.fn()
    render(<Image onClick={mockCallBack} src={'https://www.test.com'} />)

    fireEvent.click(screen.getByRole('img'))
    expect(mockCallBack).toHaveBeenCalled()
  })

  test('snapshot', () => {
    const tree = renderer
      .create(
        <Image src={'https://www.test.com'} alt={'test'} rounded={true} width={400} height={200} onClick={jest.fn()} />,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
