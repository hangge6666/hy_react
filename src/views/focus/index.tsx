import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

interface IProps {
  children?: ReactNode
}
const Focus: FC<IProps> = () => {
  return <>Focus</>
}

export default memo(Focus)
