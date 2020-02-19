import React from 'react';

function Game(props) {
    return (
        <div>
            <h1>The Game is On!</h1>
            <button onClick={props.OnEndGameClick}>End the game</button>
        </div>
    );
}

export default Game;