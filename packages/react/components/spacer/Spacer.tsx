import React from 'react'
import { SpacerProps } from './SpacerProps'

/**
 * Spacer Component
 * @param size {SpacerSize} SMALL | MEDIUM | LARGE | HUGE
 * @param horizontal {Boolean} If horizontal margin
 */
const Spacer = ({ size, horizontal }: SpacerProps): JSX.Element => {
  const styles = {
    spacer: {
      marginLeft: horizontal ? `${size}px` : '0px',
      marginTop: !horizontal ? `${size}px` : '0px',
    },
  }
  return <div style={styles.spacer} />
}

export default Spacer
