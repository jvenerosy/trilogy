import clsx from "clsx"
import * as React from "react"
import { useContext, useState } from "react"
import { getAlertClassName, getAlertIconName } from "../../objects"
import { has, is } from "../../services/classify"
import { Icon, IconName } from "../icon"
import { Text } from "../text"
import { Title, TitleLevels } from "../title"
import { AlertProps, ToasterPosition } from "./AlertProps"
import { hashClass } from "../../helpers"
import { useTrilogyContext } from "../../context"
import ToasterContext from "./context"
import { Button } from "../button"
import ToasterProvider from "./provider/ToasterProvider"

/**
 * Alert Component
 * @param iconName {IconName} Custom icon
 * @param title {string} Alert title content
 * @param description {string|ReactNode} Alertt description content
 * @param alert {AlertState} Alert Variant (INFO|SUCCESS|WARNING|ERROR)
 * @param onClick {Function} onClick Event for all alert
 * @param className {string} Additionnal CSS Classes
 * @param iconClassname {string} Additionnal Icon CSS
 * @param display
 * @param others
 */
const Alert = ({
                 alert,
                 toaster,
                 className,
                 iconClassname,
                 iconName,
                 title,
                 description,
                 onClick,
                 display,
                 testId,
                 ...others
               }: AlertProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx("alert", has("body"), alert && is(getAlertClassName(alert)), className)
  )

  const iconAlert = React.useMemo(() => {
    if (iconName != null) return iconName
    else if (alert) return getAlertIconName(alert) ?? IconName.INFOS_CIRCLE
    else return IconName.INFOS_CIRCLE
  }, [iconName, alert])

  const ToasterViewComp: React.FC = () => {
    const [offset] = useState(50)
    const [duration] = useState(3)

    const { show } = useContext(ToasterContext)

    const onClickToaster = () => {
      show({
        position: toaster?.position ?? ToasterPosition.TOP,
        duration: toaster?.duration ?? duration,
        offset,
        title,
        description,
        iconName: iconName,
        alert: alert,
        onClick: () => onClick,
        closable: toaster?.closable,
        onHide: () => toaster?.onHide,
        display: true,
      })
    }
    return (
      <Button variant={'PRIMARY'} onClick={onClickToaster}>
        Open toast
      </Button>
    )
  }

  const base = (<div
    data-testid={testId}
    onClick={(e) => {
      // eslint-disable-next-line no-unused-expressions
      onClick?.(e)
      e.stopPropagation()
    }}
    className={classes}
    {...others}
  >
    <Icon className={iconClassname} name={iconAlert}/>
    <div className={hashClass(styled, clsx("body"))}>
      {title && typeof title.valueOf() === "string" ? (
        <Title level={TitleLevels.THREE}>{title}</Title>
      ) : (
        title
      )}
      {description && typeof description.valueOf() === "string" ? (
        <Text>{description}</Text>
      ) : (
        description
      )}
    </div>
  </div>)

  if (display) {
    if (toaster) return <ToasterProvider><ToasterViewComp/></ToasterProvider>
    return base
  }
  return <div/>
}

export default Alert
