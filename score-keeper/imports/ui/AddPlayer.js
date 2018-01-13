import React from 'react';

import {Players} from './../api/players.js';

export default class AddPlayer extends React.Component {
  handleSubmit(e) {
    let playerName=e.target.playerName.value;
    e.preventDefault();
    if(playerName){
      Players.insert({name:playerName,score:0})
    }
  }
  render(){
    return (
      <div className="item">
        <form onSubmit={this.handleSubmit} className="form">
          <input type="text" name="playerName" placeholder="player name" className="form__input"/>
          <button className="button">+</button>
        </form>
      </div>
    )
  }
}
