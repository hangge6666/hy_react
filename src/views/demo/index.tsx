import React from 'react'
import type { ReactNode, FC } from 'react'

interface IProps {
  children?: ReactNode
  name: string
  age: number
  height?: number
}
const Demo: FC<IProps> = (props) => {
  return (
    <>
      <div>{props.name}</div>
      <div>{props.age}</div>
      <div>{props.height}</div>
      <div>{props.children}</div>
    </>
  )
}
Demo.defaultProps = {
  height: 1.99,
  name: 'zyh'
}

Demo.displayName = 'Mine'

export default Demo
