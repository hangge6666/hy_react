import { useAppDispatch } from '@/store'
import React, { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import { fetchBannerDataAction } from './store/recommend'
import TopBanner from './c-cpns/top-banner'

interface IProps {
  children?: ReactNode
}
const Recommend: FC<IProps> = () => {
  /** 发起 action 获取数据*/
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])
  return (
    <>
      <TopBanner />
      Recommend
    </>
  )
}

export default memo(Recommend)
