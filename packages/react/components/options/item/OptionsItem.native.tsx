import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { OptionsItemProps } from './OptionsItemProps'
import shortid from 'shortid'
import { Text } from '../../text'
import { getColorStyle, TrilogyColor } from '../../../objects/facets/Color'
import { OptionsItemVariant } from '../OptionsEnum'
import { Icon, IconName, IconSize } from '../../icon'
import { Spacer, SpacerSize } from '../../spacer'
import { ComponentName } from '../../enumsComponentsName'

/**
 * Options Item Component
 * @param id {string} Id for Options Item - Default id generated by default
 * @param disabled {boolean} Disabled Options Item
 * @param name {string} Options Item name
 * @param value {string} Value for options item
 * @param checked {boolean} Checked options item
 * @param label {string} Label for options item
 * @param readonly {boolean} readonly options item
 * @param onChange {onChange} onChange Event
 * @param children {React.ReactNode}
 * @param onClick {onClick} onClick Event
 * @param description {String} Optional description for "multiline" label
 */

const OptionsItem = ({
  id = shortid.generate(),
  disabled,
  name,
  value,
  checked,
  iconName,
  label,
  readonly,
  onClick,
  onChange,
  variant,
  description,
  ...others
}: OptionsItemProps): JSX.Element => {
  const [_checked, setChecked] = useState<string | string[]>(checked || '')
  const selectedColor = TrilogyColor.INFO
  const defaultColor = TrilogyColor.TERTIARY
  const disabledColor = TrilogyColor.GREY

  const isChecked = (checked: string | string[]) => {
    if (typeof checked === 'string') {
      return checked === value
    } else {
      return checked.includes(value)
    }
  }

  const color = disabled ? disabledColor : isChecked(_checked) ? selectedColor : defaultColor

  const styles = StyleSheet.create({
    selectItem: {
      borderColor: getColorStyle(color),
      borderWidth: 1,
      paddingLeft: 8,
      paddingRight: 8,
      padding: 6,
      height: (variant === OptionsItemVariant.MULTILINE && iconName && 'auto') || (description && 55) || 35,
      width: variant === OptionsItemVariant.MULTILINE && iconName ? 127 : 'auto',
      borderRadius: 4,
      marginRight: 10,
      justifyContent: variant === OptionsItemVariant.MULTILINE && iconName ? 'flex-start' : 'center',
    },
    text: {
      color: getColorStyle(color),
      fontSize: 14,
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    horizontal: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: description ? 4 : 0,
    },
    checkBox: {
      flexDirection: 'row',
      alignItems: 'center',
      alignContent: 'center',
      alignSelf: 'center',
      borderColor: getColorStyle(color),
      borderWidth: 1,
      width: 14,
      height: 14,
      borderRadius: 4,
    },

    radio: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: getColorStyle(color),
      borderWidth: 1,
      width: 14,
      height: 14,
      borderRadius: 10,
    },
    center: {
      alignItems: 'center',
    },
    icon: {
      top: -2,
      right: 2,
    },
    description: {
      fontSize: 11,
      color: getColorStyle(color),
      alignSelf: 'center',
      marginBottom: 4,
    },
  })

  useEffect(() => {
    setChecked(checked || '')
  }, [checked])

  const handleClick = (value: string) => {
    if (!readonly) {
      if (onClick) {
        onClick({
          optionId: id,
          optionValue: value,
          optionName: name || '',
          optionChecked: !_checked,
        })
      }
      if (onChange) {
        onChange({
          optionId: id,
          optionValue: value,
          optionName: name || '',
          optionChecked: !_checked,
        })
      }
    }
  }

  let optionContent: JSX.Element

  if (variant === OptionsItemVariant.ICON && iconName) {
    optionContent = (
      <View style={styles.horizontal}>
        <View style={typeof checked === 'string' ? styles.radio : styles.checkBox}>
          {isChecked(_checked) && (
            <Icon style={styles.icon} size={IconSize.SMALLER} color={color} name={IconName.CHECK} />
          )}
        </View>
        <Spacer size={SpacerSize.SMALL} horizontal />
        <Text style={styles.text}>{label}</Text>
        <Spacer size={SpacerSize.SMALL} horizontal />
        <Icon style={styles.icon} size={IconSize.SMALL} name={iconName} color={color} />
      </View>
    )
  } else if (variant === OptionsItemVariant.MULTILINE && iconName) {
    optionContent = (
      <View>
        <View style={[typeof checked === 'string' ? styles.radio : styles.checkBox, { position: 'absolute', left: 0 }]}>
          {isChecked(_checked) && (
            <Icon style={styles.icon} size={IconSize.SMALLER} color={color} name={IconName.CHECK} />
          )}
        </View>
        <View style={styles.center}>
          <Spacer size={SpacerSize.SMALL} />
          <View>
            <Icon style={styles.icon} size={IconSize.MEDIUM} name={iconName} color={color} />
          </View>
          <Spacer size={SpacerSize.SMALL} />
          <Text style={styles.text}>{label}</Text>
        </View>
      </View>
    )
  } else {
    optionContent = (
      <View style={styles.horizontal}>
        <View style={typeof checked === 'string' ? styles.radio : styles.checkBox}>
          {isChecked(_checked) && (
            <Icon style={styles.icon} size={IconSize.SMALLER} color={color} name={IconName.CHECK} />
          )}
        </View>
        <Spacer size={SpacerSize.SMALL} horizontal />
        <Text style={styles.text}>{label}</Text>
      </View>
    )
  }

  return (
    <TouchableOpacity
      accessibilityLabel={label}
      onPress={() => handleClick(value || '')}
      disabled={disabled}
      style={styles.selectItem}
      {...others}
    >
      {optionContent}
      {description && <Text style={styles.description}>{description}</Text>}
    </TouchableOpacity>
  )
}

OptionsItem.displayName = ComponentName.OptionsItem

export default OptionsItem
