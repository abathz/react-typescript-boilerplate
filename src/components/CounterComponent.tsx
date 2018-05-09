import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { decrement, increment } from 'actions'

interface StateProps {
  counter: number
}

interface DispatchProps {
  increment: typeof increment
  decrement: typeof decrement
}

interface PropsComponent extends StateProps, DispatchProps { }
interface StateComponent { }

class CounterComponent extends React.Component<PropsComponent, StateComponent> {

  _onClickIncrement = () => {
    this.props.increment()
  }

  _onClickDecrement = () => {
    this.props.decrement()
  }

  render () {
    const { counter } = this.props
    return <div>
      <pre>counter = {counter < 0 ? 0 : counter}</pre>
      <button onClick={this._onClickIncrement}>click me INCREMENT!</button>
      <button onClick={this._onClickDecrement}>click me DECREMENT!</button>
    </div>
  }
}

const mapStateToProps = ({ counter }: any): StateProps => ({
  counter: counter.counter
})

export default connect(mapStateToProps, { increment, decrement })(CounterComponent)
