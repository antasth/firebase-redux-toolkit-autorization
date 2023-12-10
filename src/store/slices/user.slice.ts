import { IUser } from '@/types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: IUser = {
  email: null,
  token: null,
  id: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.email = payload.email
      state.id = payload.id
      state.token = payload.token
    },
    removeUser(state) {
      state.email = null
      state.id = null
      state.token = null
    },
  },
})

export const { actions, reducer } = userSlice
export default userSlice.reducer
