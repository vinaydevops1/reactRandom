// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNum: 0}

  onClicked = () => {
    this.setState({
      randomNum: Math.ceil(Math.random() * 100),
    })
  }

  render() {
    const {randomNum} = this.state

    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" onClick={this.onClicked} className="button">
            Generate
          </button>
          <h1 className="number">{randomNum}</h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
