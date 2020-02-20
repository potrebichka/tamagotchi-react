import React from 'react';
import Game from './Game';

class GameControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameOn: false
    };
    this.handleStartGameClick = this.handleStartGameClick.bind(this);
    this.OnEndGameClick = this.OnEndGameClick.bind(this);
  }

  handleStartGameClick() {
    this.setState({gameOn: true});
  }

  OnEndGameClick() {
    this.setState({gameOn: false});
  }
  render() {
    return (
      <div>
        {this.state.gameOn ? <Game handleEndGameClick={this.OnEndGameClick}/> : <button onClick={this.handleStartGameClick}>Start the Game</button>}
      </div>
    );
  }
}

export default GameControl;