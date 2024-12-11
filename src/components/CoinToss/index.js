import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    totalCount: 0,
    headsCount: 0,
    tailsCount: 0,
    randomGenNum: 0,
  }

  updateHeadsCount = () => {
    this.setState(preState => ({
      headsCount: preState.headsCount + 1,
      totalCount: preState.totalCount + 1,
    }))
    return 'HEAD UPDATED'
  }

  updateTailsCount = () => {
    this.setState(preState => ({
      tailsCount: preState.tailsCount + 1,
      totalCount: preState.totalCount + 1,
    }))
  }

  randomNumGen = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState({
      randomGenNum: tossResult,
    })
    if (tossResult === 0) {
      this.updateHeadsCount()
    } else {
      this.updateTailsCount()
    }
  }

  render() {
    const {totalCount, headsCount, tailsCount, randomGenNum} = this.state
    const headImgUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    const tailImgUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <img src={randomGenNum === 0 ? headImgUrl : tailImgUrl} alt="toss result" />
          <button type="button" onClick={this.randomNumGen}>
            Toss Coin
          </button>
          <div className="result">
            <p className="total-count">Total:{totalCount}</p>
            <p className="total-count">Heads:{headsCount}</p>
            <p className="total-count">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
