import React, { PureComponent, memo } from 'react'

interface IProps {
  name: string
  age?: number
}
interface IState {
  message: string
  age: number
}

class Demo02 extends PureComponent<IProps, IState> {
  state = {
    message: 'hello world',
    age: 20
  }
  /**
   * state
   * props
   */
  render(): React.ReactNode {
    return (
      <div>
        name: {this.state.message} age:{this.props.name}
      </div>
    )
  }
}

export default memo(Demo02)
