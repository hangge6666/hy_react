import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

interface IProps {
  children?: ReactNode
}
const AppFooter: FC<IProps> = () => {
  return <>AppFooter</>
}

export default memo(AppFooter)
