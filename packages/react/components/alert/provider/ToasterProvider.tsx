import { useEffect, useRef, useState } from "react"
import { ToasterInterface } from "../AlertProps"
import ToasterContext from "../context/ToasterContext"
import Alert from "../../alert/Alert"

/**
 * Toaster provider
 * @param children {React.ReactNode} Custom Toast Content
 * @param duration {number} Duration in MS (Default: 5000)
 * @param offset {number} Offset position margin (Default: 10 dp)
 * @param others
 */
const ToasterProvider = ({ children }: any): JSX.Element => {
  const [toasterState, setToasterState] = useState<ToasterInterface | null>(null)
  const [duration, setDuration] = useState(5000)
  const timeRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const showToast = (params: ToasterInterface) => {
    setToasterState(params)
    params.duration && params.duration > 0 && setDuration(params.duration)
    timeRef.current && clearTimeout(timeRef.current)
  }

  useEffect(() => {
    timeRef.current = setTimeout(() => {
      setToasterState(null)
    }, duration)
  }, [toasterState])

  return (
    <ToasterContext.Provider value={{ show: showToast, hide: () => null }}>
      {children}
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <Alert
        display
        title
        description
        toaster={{
          offset: toasterState?.offset,
          closable: toasterState?.closable,
          position: toasterState?.position,
          onHide: toasterState?.onHide,
          duration: toasterState?.duration
        }}
      />
    </ToasterContext.Provider>
  )
}

export default ToasterProvider
