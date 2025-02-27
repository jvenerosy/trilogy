import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { getColorStyle, TrilogyColor } from '@/objects'
import { TableBorderEnum, TableProps } from './TableProps'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Table Component
 * @param children {ReactNode}
 * @param bordered {boolean} bordered table
 */
const Table = ({ children, border, ...others }: TableProps): JSX.Element => {
  const borderColor = getColorStyle(TrilogyColor.MAIN_FADE)

  const styles = StyleSheet.create({
    table: {
      width: '100%',
      backgroundColor: 'transparent',
    },
    bordered: {
      borderWidth: 1,
      borderColor: borderColor,
    },
    noBorder: {
      borderWidth: 0,
      borderColor: 'transparent',
    },
  })

  return (
    <View
      style={[border === TableBorderEnum.ALL && styles.bordered, !border && styles.noBorder, styles.table]}
      {...others}
    >
      {children}
    </View>
  )
}

Table.displayName = ComponentName.Table

export default Table
