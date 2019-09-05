import React from 'react';

export default class Bomb extends React.Component {
  state = {
    count: 0
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      console.log('setInterval')
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tickTockChecker(count){
    if(count >= 8){
      this.componentWillUnmount()
      return 'BOOM!!!!'
    }
    else if(count % 2 === 0){
      return 'tick'
    }
    else{
      return 'tock'
    }
  }

  render() {
    const word = this.tickTockChecker(this.state.count)
    return (
      <div>
        <p>
        {word}
        </p>
      </div>
    )
  }

}