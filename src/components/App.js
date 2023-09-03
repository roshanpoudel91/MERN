import React, { Component } from 'react';

import PlayerForm from './Player/PlayerForm';
import PlayerList from './Player/PlayerList';
import PlayerSingle from './Player/PlayerSingle';

class  App extends Component {
  constructor(props){
    super(props);
    this.state = {
      players: [],
      currentPlayer:{}
    }
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
  }

  async componentDidMount(){
    const url = "http://localhost:4000/players";

    const response = await fetch(url);
    const playerss = await response.json();
    console.log(playerss);
    this.setState({
      players: playerss
    })

  }
updateCurrentPlayer(item){
  this.setState({
    currentPlayer:item
  })
}

  render() {
    return (
    <div className="container-fluid">
        <div className='row'>
            <div className='col s12'>Menu</div>
        </div>
        <div className='row'>
            <div className='col s3'><PlayerList players={this.state.players}
            updateCurrentPlayer={this.updateCurrentPlayer}
            /></div>
            <div className='col s9'><PlayerSingle/></div>
        </div>

        <div className='row'>
            <div className='col s12'><PlayerForm/></div>
        </div>

    </div>
  );
}
}

export default App;
