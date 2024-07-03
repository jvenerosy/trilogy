import * as React from "react"
import { View } from "@/components/view"
import { ListProps } from "./ListProps"
import { ComponentName } from "@/components/enumsComponentsName"

const List = ({ children, ...others }: ListProps): JSX.Element => {
  return <View {...others}>{children}</View>
}

List.displayName = ComponentName.List

export default List
