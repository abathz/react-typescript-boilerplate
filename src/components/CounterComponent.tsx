import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { decrement, increment } from 'actions'
import { bindActionCreators } from 'redux'

interface PropsComponent extends StateProps, DispatchProps {}

interface StateProps {
  counter: string
}

interface DispatchProps {
  increment: typeof increment
  decrement: typeof decrement
}

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
      <pre>counter = {counter}</pre>
      <button onClick={this._onClickIncrement}>click me INCREMENT!</button>
      <button onClick={this._onClickDecrement}>click me DECREMENT!</button>
    </div>
  }
}

const mapStateToProps = ({ counter }: any): StateProps => ({
  counter: counter.res
})

export default connect(mapStateToProps, { increment, decrement })(CounterComponent)
