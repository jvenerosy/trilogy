import { useTrilogyContext } from '@/context/index'
import { ClickEvent, OnClickEvent } from '@/events/OnClickEvent'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services'
import clsx from 'clsx'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import shortid from 'shortid'
import { ModalProps } from './ModalProps'
import { ButtonType } from '@/components/button'
import { Title, TitleLevels, TitleMarkup } from '@/components/title'

const modalGeneratedId = shortid.generate()

/**
 * Modal Component
 * @param active {boolean} Activated Modal
 * @param title {string} Title Modal
 * @param onClose {Function} Additionnal close custom function
 * @param onOpen {Function} Additionnal open custom function
 * @param children {React.ReactNode}
 * @param disableHandlingClickOutside {boolean} Disable the handling on outside click event
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param panel {boolean} Panel Side Modal
 * @param accessibilityLabel {string} Accessibility label
 * - -------------------------- NATIVE PROPERTIES -------------------------------
 */
const Modal = ({
                 children,
                 className,
                 id,
                 accessibilityLabel = 'Close',
                 active,
                 onClose,
                 onOpen,
                 panel,
                 size,
                 hideCloseButton = false,
                 trigger,
                 unClosable = false,
                 title,
                 ...others
               }: ModalProps): JSX.Element => {
  const modal = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState<boolean>(active || false)
  const { styled } = useTrilogyContext()
  const refsActions = useRef<Array<HTMLButtonElement | null>>([])
  const refBtnModal = useRef<any>(null)
  const [, setIndexFocusable] = useState(0)

  const handleClickOutside = (e: Event) => {
    if (modal?.current?.contains(e.target as Node)) {
      return
    } else {
      handleClose(onClose, e)
    }
  }

  useEffect(() => {
    setDisplay(active || false)
  }, [active])

  useEffect(() => {
    display && refsActions.current[0] && refsActions.current[0].focus()
  }, [display, refsActions?.current.length])

  useEffect(() => {
    if (display && !unClosable) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [display, unClosable])

  const classes = React.useMemo(
    () => hashClass(styled, clsx('modal', display && is('active'), size && is(size), panel && is('panel'), className)),
    [display, panel, className, styled],
  )

  function handleClose(onCloseFunc: ClickEvent | undefined, e: OnClickEvent) {
    setDisplay(false)
    refBtnModal.current && refBtnModal.current.focus()
    if (onCloseFunc) {
      onCloseFunc(e)
    }
  }

  function handleOpen(onOpenFunc: ClickEvent | undefined, e: OnClickEvent) {
    setDisplay(true)
    if (onOpenFunc) {
      onOpenFunc(e)
    }
  }

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (display && refsActions.current) {
        const refs = refsActions.current.filter((ref) => ref)
        const { key } = event
        if (key === 'Tab') {
          event.preventDefault()
          setIndexFocusable((prev) => {
            const nextIndex = (prev + 1) % refs.length
            refs[nextIndex] && refs[nextIndex]?.focus()
            return nextIndex
          })
        }
      }
    },
    [refsActions.current.length, display],
  )

  return (
    <div onKeyDown={onKeyDown}>
      {trigger && React.cloneElement(trigger as React.ReactElement, { ref: refBtnModal })}
      <div id={id} className={classes} role="dialog" aria-labelledby={modalGeneratedId} aria-modal={true} {...others}>
        <div ref={modal} className="modal-content">
          <div className={'modal-header'}>
            {hideCloseButton !== true && (
              <button
                onClick={(e: React.MouseEvent) => {
                  handleClose(onClose, e)
                }}
                className={hashClass(styled, clsx('modal-close', is('large')))}
                type={ButtonType.BUTTON}
                ref={(el) => el && (refsActions.current[0] = el)}
              >
                {accessibilityLabel && <span className="sr-only">{accessibilityLabel}</span>}
              </button>
            )}
            <Title id={modalGeneratedId} level={TitleLevels.THREE} markup={TitleMarkup.H1}>{title}</Title>
          </div>
          {children && children}
        </div>
      </div>
    </div>
  )
}

export default Modal
