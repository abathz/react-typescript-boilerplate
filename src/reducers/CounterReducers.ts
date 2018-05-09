import {
  ActionType
} from 'actions/type_const'

type StateReducers = {
  res: string,
  counter: number
}

const INITIAL_STATE = {
  res: '',
  counter: 0
}

export default (state: StateReducers = INITIAL_STATE, action: any): StateReducers => {
  switch (action.type) {
    case ActionType.INC:
      return { ...state, counter: state.counter + 1 }
    case ActionType.DEC:
      return { ...state, counter: state.counter - 1 }
    default:
      return state
  }
}
