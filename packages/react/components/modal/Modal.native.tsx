import React, { useEffect, useRef, useState } from 'react'
import { Animated, Dimensions, GestureResponderEvent, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import NativeModal from 'react-native-modal'
import { ModalProps } from './ModalProps'
import { View } from '@/components/view'
import { Icon, IconName, IconSize } from '@/components/icon'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Modal Component
 * @param active {boolean} Activated Modal
 * @param title {string} Title Modal
 * @param onClose {Function} Additionnal close custom function
 * @param onOpen {Function} Additionnal open custom function
 * @param children {React.ReactNode}
 * @param onModalHide {Function} Callback on Hide
 * @param unClosable {boolean} unClosable Native Modal
 */
const Modal = ({
  children,
  active = false,
  onClose,
  onOpen,
  onModalHide,
  hideCloseButton = false,
  unClosable = false,
  ...others
}: ModalProps): JSX.Element => {
  const styles = StyleSheet.create({
    centeredView: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    iconCenter: {
      alignSelf: 'center',
      marginBottom: 30,
    },
    modalView: {
      margin: 0,
      backgroundColor: getColorStyle(TrilogyColor.BACKGROUND),
      borderRadius: 6,
      padding: 17,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      flex: 1,
    },
    title: {
      textAlign: 'center',
      fontSize: 21,
      fontWeight: '600',
    },
    content: {
      textAlign: 'center',
      fontSize: 15,
      paddingTop: 10,
    },
    overlay: {
      flexDirection: 'row',
      width: '100%',
      height: '100%',
    },
    middleModal: {
      justifyContent: 'center',
    },
    bottomModal: {
      justifyContent: 'flex-end',
    },
    childrenContainer: {
      flexWrap: 'wrap',
      paddingTop: 10,
      borderRadius: 6,
      backgroundColor: getColorStyle(TrilogyColor.BACKGROUND),
      width: '100%',
    },
    horizontalMargin: {
      marginTop: 50,
      marginBottom: 0,
    },
  })

  const defaultAnimPosition = Dimensions.get('window').height
  const translateAnim = useRef(new Animated.Value(defaultAnimPosition)).current
  const [visible, setVisible] = useState(active || false)

  useEffect(() => {
    setVisible(active)
  }, [active])

  useEffect(() => {
    if (visible) {
      Animated.timing(translateAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start()
    } else {
      translateAnim.setValue(defaultAnimPosition)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])

  const close = (e: GestureResponderEvent) => {
    if (onClose) onClose(e)
    setVisible(false)
  }

  return (
    <>
      {/* {triggerContent && (*/}
      {/*  <Button*/}
      {/*    variant={ButtonVariant.PRIMARY}*/}
      {/*    onClick={(e) => {*/}
      {/*      if (onOpen) onOpen(e)*/}
      {/*      setVisible(true)*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    {triggerContent}*/}
      {/*  </Button>*/}
      {/* )}*/}
      <NativeModal
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onSwipeComplete={(e: any) => {
          //          setVisible(!visible)
          close(e)
        }}
        onModalHide={onModalHide}
        swipeDirection={unClosable ? undefined : 'down'}
        isVisible={visible}
        statusBarTranslucent={true}
        style={{ width: '100%', padding: 0, margin: 0 }}
        {...others}
      >
        <View style={[styles.overlay, styles.bottomModal]}>
          <TouchableOpacity activeOpacity={1} style={{ width: 0, height: '100%' }} onPress={close} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
            }}
          >
            <TouchableOpacity activeOpacity={1} style={{ width: '100%', minHeight: 50, flexGrow: 1 }} onPress={close} />

            <View style={{ flexShrink: 1 }}>
              <Animated.View
                style={[styles.childrenContainer, { transform: [{ translateY: translateAnim }], overflow: 'hidden' }]}
              >
                {!hideCloseButton && (
                  <View style={{ width: '100%' }}>
                    <TouchableOpacity style={{ alignSelf: 'flex-end', right: 20 }} onPress={close}>
                      <Icon name={IconName.TIMES} size={IconSize.SMALL} color={TrilogyColor.NEUTRAL} />
                    </TouchableOpacity>
                  </View>
                )}
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>{children}</ScrollView>
              </Animated.View>
            </View>
            <TouchableOpacity
              activeOpacity={1}
              style={{
                width: '100%',
                minHeight: 0,
                flexGrow: 0,
              }}
              onPress={close}
            />
          </View>
          <TouchableOpacity onPress={close} activeOpacity={1} style={{ width: 0, height: '100%' }} />
        </View>
      </NativeModal>
    </>
  )
}

Modal.displayName = ComponentName.Modal

export default Modal
