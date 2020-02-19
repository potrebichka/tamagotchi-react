import React from 'react';
import Game from './Game';

class GameControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameOn: false
        }
        this.handleStartGameClick = this.handleStartGameClick.bind(this);
        this.handleEndGameClick = this.handleEndGameClick.bind(this);
    }

    handleStartGameClick() {
        this.setState({gameOn: true})
    }

    handleEndGameClick() {
        this.setState({gameOn: false})
    }
    render() {
        return (
            <div>
                {this.state.gameOn ? <Game OnEndGameClick={this.handleEndGameClick}/> : <button onClick={this.handleStartGameClick}>Start the Game</button>}
            </div>
        );
    }
}

export default GameControl;