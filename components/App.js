import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, reset, onCount } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter count={this.props.count} 
        onIncrement={this.props.onIncrement} 
        onDecrement={this.props.onDecrement} 
        clickCount={this.props.clickCount}
        onReset={this.props.onReset}
        onCount={this.props.onCount} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onReset: (count) => dispatch(reset(count)),
    onCount: () => dispatch(onCount())

  };
}
function mapStateToProps(state) {
    return {
      count: state.count,
      clickCount: state.clickCount
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);