import clsx from 'clsx'
import * as React from 'react'
import { useTrilogyContext } from '../../../context'
import { hashClass } from '../../../helpers'
import { TrilogyColor, getColorClassName } from '../../../objects'
import { has, is } from '../../../services'
import { Divider } from '../../divider'
import { Icon, IconName, IconSize } from '../../icon'
import { ListItemProps } from './ListItemProps'

/**
 * ListItem Component
 * @param className {string} Additionnal CSS Classes
 * @param children {React.ReactNode}
 * @param customIcon {IconName} Icon name
 * @param status {ListIconStatus} Status success|error
 * @param title {string} List item title
 * @param description {string} List item description
 * @param action {React.ReactNode}
 * @param divider {boolean} to display divider
 * @param inputAction {React.ReactNode} type Switch|Radio|Checkbox
 */
const ListItem = ({
  className,
  children,
  customIcon,
  status,
  title,
  description,
  testId,
  action,
  divider,
  inputAction,
}: ListItemProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const classes = clsx(
    is(getColorClassName(status ? TrilogyColor[status] : TrilogyColor.BACKGROUND)),
    className,
  )

  return (
    <li
      className={hashClass(styled, clsx(classes, (action || inputAction) && has('action')))}
      data-testid={testId}
    >
      <div className={hashClass(styled, clsx('list-item_content'))}>
        {customIcon && typeof customIcon === 'string' && (
          <div className={hashClass(styled, clsx('list-item_content_puce'))}>
            <Icon className={classes} name={customIcon as IconName} size={IconSize.SMALL} />
          </div>
        )}

        {customIcon && typeof customIcon !== 'string' && (
          <div className={hashClass(styled, clsx('list-item_content_puce'))}>{customIcon}</div>
        )}

        <div>
          {(title || description) && (
            <>
              {title && <b>{title}</b>}
              {children || (description && <p>{children || description}</p>)}
            </>
          )}
          {!title && !description && <div>{children}</div>}
        </div>
      </div>
      {(action || inputAction) && (
        <div className={hashClass(styled, clsx('list-item_action'))}>{action || inputAction}</div>
      )}
      {divider && <Divider />}
    </li>
  )
}

export default ListItem
