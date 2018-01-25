import { Action } from '../actions'

interface StateReducers {
  counter: number
}

const INITIAL_STATE = {
  counter: 0
}

export default (state: StateReducers = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { res: action.payload }
    case 'DECREMENT':
      return { res: action.payload }
    default:
      return state
  }
}
