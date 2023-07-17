/* eslint-disable no-unused-vars */
import React from 'react'
import './index.css'

class EvenOddApp extends React.Component {
  state = {counter: 0, status: 'Even'}

  getNumber = () => {
    const {counter, status} = this.state
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({counter: prevState.counter + randomNumber}))
    const getNub = counter + randomNumber
    if (getNub % 2 === 0) {
      console.log(getNub)
      this.setState({status: 'Even'})
    } else {
      this.setState({status: 'Odd'})
    }
  }

  render() {
    const {counter, status} = this.state

    return (
      <div className="container">
        <h1>Count {counter}</h1>
        <p className="status">Count is {status}</p>
        <button type="button" onClick={this.getNumber}>
          Increment
        </button>
        <p>*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
