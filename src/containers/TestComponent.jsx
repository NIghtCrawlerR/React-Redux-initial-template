import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../actions/mainActions';


const TestComponent = () => {
  const test = useSelector(state => state.app.test)
  const count = useSelector(state => state.app.count)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Test component</h2>
      {test} <br/>
      count: {count} <br/>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  )
}

export default TestComponent
