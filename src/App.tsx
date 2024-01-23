import React, { Suspense, memo } from 'react'
import { useRoutes } from 'react-router-dom'

import { useAppSelector, useAppDispatch, appShallowEqual } from './store'
import routes from './router'
import { changeMesssage } from './store/modules/counter'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

const App = memo(() => {
  const dispatch = useAppDispatch()
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    appShallowEqual
  )
  // 事件处理函数
  function handleChangeMesssage() {
    dispatch(changeMesssage('哈哈哈'))
  }

  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="">
        <div className="router">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />

      <h2>当前计数: {count}</h2>
      <h2>当前消息: {message}</h2>
      <button onClick={handleChangeMesssage}>改变</button>
    </div>
  )
})

App.displayName = 'App'

export default App
