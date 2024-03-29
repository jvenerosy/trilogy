import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AccordionBodyProps } from './AccordionBodyProps'
import { ComponentName } from '../../enumsComponentsName'

/**
 * Accordion Header
 * @param children {React.ReactNode} Children for Accordion body
 */
const AccordionBody = ({ children, ...others }: AccordionBodyProps): JSX.Element => {
  const styles = StyleSheet.create({
    accordionBody: {},
  })

  return (
    <View style={[styles.accordionBody]} {...others}>
      {children}
    </View>
  )
}

AccordionBody.displayName = ComponentName.AccordionBody

export default AccordionBody
