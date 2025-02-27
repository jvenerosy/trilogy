import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { RadioProps } from './RadioProps'
import shortid from 'shortid'
import { getColorStyle, TrilogyColor, TypographyAlign, TypographyBold } from '@/objects'
import { Icon, IconSize } from '@/components/icon'
import { Text, TextLevels } from '@/components/text'
import { View } from '@/components/view'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Radio Component
 * @param checked {boolean} Checked Radio
 * @param disabled {boolean} Disabled
 * @param readOnly {boolean} readonly Radio
 * @param id {string} Id for button, by default id is generate
 * @param label {string|ReactNode} Label for Radio
 * @param onClick {ClickEvent}
 * @param onChange {ChangeEvent}
 * @param name {string} Name for radio
 * @param value {string} Value for radio
 * @param iconTile {IconName} Icon for Radio
 * @param narrow {boolean} Apply narrow
 * @param children {React.ReactNode} If Children is provided, don't use label / Icon / Description
 * @param tile {boolean} Radio Tile
 * @param description {string} Description for Radio tile
 * @param horizontalTile {boolean} display horizontal Radio tile
 */
const Radio = ({
  id = shortid.generate(),
  checked,
  name,
  onChange,
  disabled,
  readonly,
  label,
  value,
}: RadioProps): JSX.Element => {
  const [_checked, setChecked] = useState<boolean>(checked || false)

  const horizontalTile = false
  // eslint-disable-next-line no-empty-pattern
  const onClick = ({}: any) => null
  const tile = false
  const description = 'de'
  const iconTile = ''
  const narrow = false
  const children = null

  const getRadioInsideColor = (isDisabled: boolean, isMain: boolean) => {
    if (isDisabled) return getColorStyle(TrilogyColor.DISABLED_FADE)
    if (isMain) return getColorStyle(TrilogyColor.MAIN)
    return getColorStyle(TrilogyColor.NEUTRAL)
  }

  useEffect(() => {
    setChecked(checked || false)
  }, [checked])

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingBottom: 5,
      justifyContent: 'flex-start',
    },
    radio: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: getColorStyle(TrilogyColor.FONT),
      borderWidth: 0.6,
      width: 19,
      height: 19,
      borderRadius: 10,
      marginRight: 10,
      marginLeft: 0,
    },
    icon: {
      position: 'absolute',
      left: 2,
      borderRadius: 30,
      width: 14,
      height: 14,
      backgroundColor: getColorStyle(TrilogyColor.MAIN),
    },
    label: {
      color:
        (disabled && getColorStyle(TrilogyColor.DISABLED)) ||
        (_checked && getColorStyle(TrilogyColor.MAIN)) ||
        getColorStyle(TrilogyColor.MAIN),
    },
    tile: {
      padding: _checked ? 3 : 4,
      paddingBottom: _checked ? 7 : 8,
      maxWidth: 140,
      width: 126,
      borderWidth: (_checked && 2) || 1,
      borderColor: getRadioInsideColor(!!disabled, _checked),
      borderRadius: 6,
      textAlign: 'center',
      alignItems: 'center',
      backgroundColor: disabled ? getColorStyle(TrilogyColor.DISABLED_FADE) : 'transparent',
    },
    tileDescription: {
      color: getRadioInsideColor(!!disabled, true),
      alignSelf: horizontalTile ? 'flex-start' : 'center',
    },
    horizontalTile: {
      paddingVertical: _checked ? 15 : 16,
      paddingHorizontal: _checked ? 5 : 6,
      width: narrow ? 'auto' : '100%',
      height: 'auto',
      borderWidth: (_checked && 2) || 1,
      borderColor: getRadioInsideColor(!!disabled, _checked),
      borderRadius: 6,
      backgroundColor: disabled ? getColorStyle(TrilogyColor.DISABLED_FADE) : 'transparent',
    },
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (value: any) => {
    if (!readonly) {
      setChecked(value)
      if (onClick) {
        onClick({
          radioId: id,
          radioValue: value,
          radioName: name || '',
          radioChecked: !_checked,
        })
      }
      if (onChange) {
        onChange({
          radioId: id,
          radioValue: value,
          radioName: name || '',
          radioChecked: !_checked,
        })
      }
    }
  }

  if (horizontalTile) {
    return (
      <TouchableOpacity disabled={disabled} style={styles.horizontalTile} onPress={() => handleClick(value || false)}>
        <View style={{ flexDirection: 'row' }}>
          {children ? (
            <View
              style={{
                flexDirection: 'row',
                width: '88%',
                height: 'auto',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginLeft: 10,
              }}
            >
              {children}
            </View>
          ) : (
            <>
              <View
                style={{
                  width: iconTile ? '12%' : '6%',
                  height: 'auto',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 10,
                }}
              >
                {iconTile && (
                  <View>
                    <Icon
                      size={IconSize.SMALL}
                      name={iconTile}
                      color={disabled ? TrilogyColor.DISABLED : TrilogyColor.MAIN}
                    />
                  </View>
                )}
              </View>
              <View
                style={{
                  width: iconTile ? '76%' : '82%',
                  flexDirection: 'row',
                  alignSelf: 'stretch',
                  flexWrap: 'wrap',
                  height: 'auto',
                }}
              >
                <View>
                  {label && typeof label.valueOf() === 'string' && (
                    <Text style={styles.label} level={TextLevels.ONE} typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD}>
                      {String(label)}
                    </Text>
                  )}
                  {description && typeof description.valueOf() === 'string' ? (
                    <Text level={TextLevels.TWO} style={styles.tileDescription}>
                      {String(description)}
                    </Text>
                  ) : (
                    description
                  )}
                </View>
              </View>
            </>
          )}
          <View
            style={{
              width: '10%',
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingRight: 10,
            }}
          >
            <TouchableOpacity
              style={styles.radio}
              disabled={disabled}
              testID={id}
              onPressIn={() => handleClick(value || false)}
            >
              {_checked && !disabled && <View style={styles.icon} />}
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  if (tile) {
    return (
      <TouchableOpacity disabled={disabled} style={styles.tile} onPress={() => handleClick(value || false)}>
        <TouchableOpacity
          style={[{ alignSelf: 'flex-end', marginTop: 10 }, styles.radio]}
          disabled={disabled}
          testID={id}
          onPressIn={() => handleClick(value || false)}
        >
          {_checked && !disabled && <View style={styles.icon} />}
        </TouchableOpacity>
        <View style={{ width: '70%', alignItems: 'center' }}>
          {iconTile && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 5,
              }}
            >
              <Icon
                size={IconSize.MEDIUM}
                name={iconTile}
                color={disabled ? TrilogyColor.DISABLED : TrilogyColor.MAIN}
              />
            </View>
          )}
          {label && typeof label.valueOf() === 'string' && (
            <Text
              level={TextLevels.TWO}
              typo={[TypographyBold.TEXT_WEIGHT_SEMIBOLD, TypographyAlign.TEXT_CENTERED]}
              style={styles.label}
            >
              {String(label)}
            </Text>
          )}
          {description && typeof description.valueOf() === 'string' ? (
            <Text level={TextLevels.THREE} typo={[TypographyBold.TEXT_WEIGHT_SEMIBOLD, TypographyAlign.TEXT_CENTERED]}>
              {String(description)}
            </Text>
          ) : (
            description
          )}
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <TouchableOpacity disabled={disabled} style={styles.container} onPress={() => handleClick(value || false)}>
      <TouchableOpacity
        style={styles.radio}
        disabled={disabled}
        testID={id}
        onPress={() => handleClick(value || false)}
      >
        {_checked && <View style={styles.icon} />}
      </TouchableOpacity>
      {label && typeof label.valueOf() === 'string' ? <Text style={styles.label}>{String(label)}</Text> : label}
    </TouchableOpacity>
  )
}

Radio.displayName = ComponentName.Radio

export default Radio
