import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { NavLink } from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'
import headerTitles from '@/assets/data/header-titles.json'
interface IProps {
  children?: ReactNode
}
const AppHeader: FC<IProps> = () => {
  /**定义组件内部的状态 */

  /** 组件的展示逻辑 */
  function showItem(item: any) {
    if (item.type === 'path') {
      // NavLink 匹配上自动加上 active
      // 自定义加上什么类
      return (
        <NavLink
          to={item.link}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {item.title}
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} target="_blank" rel="noreferrer">
          {item.title}
        </a>
      )
    }
  }
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a className="logo sprite_01" href="/#">
            网易云音乐
          </a>
          <div className="title-list">
            {headerTitles.map((item) => {
              return (
                <div className="title-item" key={item.title}>
                  {showItem(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <span className="input">
            <Input
              className="search"
              placeholder="音乐/电台"
              prefix={<SearchOutlined />}
            />
          </span>
          <span className="center">创作者中心</span>
          <span className="login">登录</span>
        </HeaderRight>
      </div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
