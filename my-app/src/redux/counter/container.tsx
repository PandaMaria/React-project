import { connect } from 'react-redux';
import { Component } from './component';

const mapStateToProps = (state: any) => {
  return {
    count: state
  };
};
const mapDispatchToProps = (dispatch: (arg0: { type: string; }) => any) => {
  return {
    handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
    handleDecrementClick: () => dispatch({ type: 'DECREMENT' })
  }
};
export const Container = connect(mapStateToProps, mapDispatchToProps)(Component);