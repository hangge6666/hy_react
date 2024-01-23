import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

interface IProps {
  children?: ReactNode
}
const Songs: FC<IProps> = () => {
  return <>Songs</>
}

export default memo(Songs)
