import React from 'react';
import PropTypes from 'prop-types';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hungry: 0,
      waste: 0,
      energy: 256,
      age: 0,
      happiness: 0,
      alive: true
    };
    this.handleSleep = this.handleSleep.bind(this);
    this.handleClean = this.handleClean.bind(this);
  }

  componentDidMount() {
    this.setState({
      hungry: 0,
      waste: 0,
      energy: 250,
      age: 0,
      happiness: 0,
      alive: true
    });
    this.doCycleTimer = setInterval(() => 
      this.doCycle(), 100);
    this.doRandomTimer = setInterval(() => 
      this.doRandom(), 5000);
  }

  doCycle() {
    this.setState({
      hungry: this.state.hungry+1,
      waste: this.state.waste+1,
      energy: this.state.energy > 0 ? this.state.energy-1 : 0,
      age: this.state.age+2,
      happinness: this.state.happiness > 250 ? this.state.happiness-1 : this.state.happiness
    });
    if (this.state.hungry >= 512 || this.state.age >= 8192) {
        this.setState({alive: false});
        clearInterval(this.doCycleTimer);
        clearInterval(this.doRandoTimer);
    }
  }

  doRandom() {
    const rnd = Math.floor(Math.random() * 6);
    let newState = {};
    switch (rnd) {
    case 0:
      newState = {hungry: this.state.hungry > 0 ? this.state.hungry-1 : 0};
      break;
    case 1:
      newState = {energy: this.state.energy > 0 ? this.state.energy-1 : 0};
      break;
    case 2:
      newState = {energy: this.state.energy+1};
      break;
    case 3:
      newState = {waste: this.state.waste+1};
      break;
    case 4:
      newState = {happiness: this.state.happiness > 0 ? this.state.happiness-1 : 0};
      break;
    case 5:
      newState = {happinness: this.state.happinness+1};
      break;
    }
    this.setState(newState);
  }

  handleSleep() {
      this.state.alive ? this.setState({energy: 256}) : null;
  }

  handleClean() {
    this.state.alive ? this.setState({waste: 0}) : null;
}

  componentWillUnmount() {
    clearInterval(this.doCycleTimer);
    clearInterval(this.doRandoTimer);
  }

  render() {
    let age = 'dead';
    if (this.state.age <= 128){
      age = 'newborn';
    } else if (this.state.age <= 796) {
      age = 'hatch';
    } else if (this.state.age <= 8192) {
        age = 'mature';
      } else {
      age = 'dead because of natural cases';
    }

    let eat = '';
    if (this.state.hungry <= 32) {
        eat = 'is full';
      } 
    if (this.state.hungry <= 128) {
      eat = 'can eat';
    } else if (this.state.hungry <= 256) {
      eat = 'needs to eat';
    } else if (this.state.hungry<= 512) {
      eat = 'is sick from not eating';
    } else {
      eat = 'is dead from not eating';
    }

    let energy = '';
    if (this.state.energy >= 150) {
        energy = "is full of energy";
    } else if (this.state.energy >= 64) {
        energy = "can sleep";
    } else if (this.state.energy >= 8) {
        energy = "tired";
    } else {
        energy = "passed out";
    }
    
    return (
      <div>
        <h1>The Game is On!</h1>
        <hr />
        <h3>Your Tamagotchi is {age}</h3>
        <h3>Hunger: Tamagotchi {eat}</h3>
        <h3>Energy: Tamagotchi {energy}</h3>

        {this.state.alive ? 
          <div>
            <button onClick={this.handleSleep}>Sleep</button>
            <button onClick={this.handleClean}>Clean</button>
            <hr />
            <h2>Health Meter:</h2>
            <h3>Hungry level: {this.state.hungry}</h3>
            <h3>Waste level: {this.state.waste}</h3>
            <h3>Energy level: {this.state.energy}</h3>
            <h3>Age level: {this.state.age}</h3>
            <h3>Happiness level: {this.state.happiness}</h3>
          </div>
          : null
        }
        <hr />

        <button onClick={this.props.handleEndGameClick}>End the game</button>
      </div>
    );
  }
}

Game.propTypes = {
  handleEndGameClick: PropTypes.func
};


export default Game;