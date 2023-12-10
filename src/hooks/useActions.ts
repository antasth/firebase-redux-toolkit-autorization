import { actions as userActions } from '@/store/slices/user.slice'
import { IUser } from '@/types'
import {
  ActionCreatorWithoutPayload,
  bindActionCreators,
} from '@reduxjs/toolkit'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit/react'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

const rootActions = {
  ...userActions,
}

export const useActions = (): {
  setUser: ActionCreatorWithPayload<IUser, 'user/setUser'>
  removeUser: ActionCreatorWithoutPayload<'user/removeUser'>
} => {
  const dispatch = useDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
