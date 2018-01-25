import { combineReducers } from 'redux'
import CounterReducers from './CounterReducers'

const rootReducer = combineReducers({
  counter: CounterReducers
})

export default rootReducer
