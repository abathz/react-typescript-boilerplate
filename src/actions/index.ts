import {
  ActionType
} from 'actions/type_const'
import axios from 'axios'

export const increment = (): any => {
  return (dispatch: any) => {
    dispatch({
      type: ActionType.INC,
      payload: 'Success INCREMENT'
    })
  }
}

export const decrement = (): any => {
  return (dispatch: any): any => {
    dispatch({
      type: ActionType.DEC,
      payload: 'Success DECREMENT'
    })
  }
}
