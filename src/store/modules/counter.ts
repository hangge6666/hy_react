import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  count: number
  message: string
  direction: 'left' | 'right' | 'up' | 'down'
}

const initialState: IState = {
  count: 100,
  message: 'hello redux',
  direction: 'left'
}
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeMesssage(state, { payload }: PayloadAction<string>) {
      state.message = payload
    }
  }
})
export const { changeMesssage } = counterSlice.actions
export default counterSlice.reducer
