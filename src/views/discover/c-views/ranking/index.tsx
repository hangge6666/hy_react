import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

interface IProps {
  children?: ReactNode
}
const Ranking: FC<IProps> = () => {
  return <>Ranking</>
}

export default memo(Ranking)
