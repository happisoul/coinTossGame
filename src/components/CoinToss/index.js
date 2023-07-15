import {Component} from 'react'

import './index.css'

const headsUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossUrl: headsUrl,
    headsCount: 0,
    tailsCount: 0,
  }

  onClickTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    console.log(toss)
    let tossImg = ''
    let latestHeadCount = headsCount
    let latestTailCount = tailsCount

    if (toss === 0) {
      tossImg = headsUrl
      latestHeadCount += 1
    } else {
      tossImg = tailsUrl
      latestTailCount += 1
    }
    this.setState({
      tossUrl: tossImg,
      headsCount: latestHeadCount,
      tailsCount: latestTailCount,
    })
  }

  render() {
    const {tossUrl, headsCount, tailsCount} = this.state
    const total = headsCount + tailsCount

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={tossUrl} className="img-logo" alt="toss result" />
          <button
            onClick={this.onClickTossCoin}
            type="button"
            className="toss-btn"
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">total:{total}</p>
            <p className="count">Heads:{headsCount}</p>
            <p className="count">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
