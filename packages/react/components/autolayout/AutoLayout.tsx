import * as React from 'react'

import { AutoLayoutProps } from '@/components/autolayout/AutoLayoutProps'

/**
 * AutoLayout Component
 */
const AutoLayout: React.FC<AutoLayoutProps> = ({ children }): JSX.Element => {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <div className={'autolayout'}>{children}</div>
}

export default AutoLayout
