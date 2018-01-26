import {
  Action,
  ActionType
} from 'actions/type_const'

interface StateReducers {
  res: string
}

const INITIAL_STATE = {
  res: ''
}

export default (state: StateReducers = INITIAL_STATE, action: Action): StateReducers => {
  switch (action.type) {
    case ActionType.INC:
      return { ...state, res: action.payload }
    case ActionType.DEC:
      return { ...state, res: action.payload }
    default:
      return state
  }
}
