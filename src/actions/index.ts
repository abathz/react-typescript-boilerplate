import {
  Action,
  ActionType
} from 'actions/type_const'

export const increment = (): Action => {
  console.log('yayaya')
  return {
    type: ActionType.INC,
    payload: 'Success INCREMENT'
  }
}

export const decrement = (): Action => {
  return {
    type: ActionType.DEC,
    payload: 'Success DECREMENT'
  }
}
