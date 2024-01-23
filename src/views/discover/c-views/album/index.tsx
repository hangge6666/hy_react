import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

interface IProps {
  children?: ReactNode
}
const Album: FC<IProps> = () => {
  return <>Album</>
}

export default memo(Album)
