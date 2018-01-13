import React from 'react';

import {Players} from './../api/players.js';

export default class Player extends React.Component {
  render(){
    return(
        <p key={this.props.player._id}>{this.props.player.name} has {this.props.player.score}
          <button onClick={()=>Players.update({_id:this.props.player._id},{$inc:{score:1}})}>+1</button>
          <button  onClick={()=>Players.update({_id:this.props.player._id},{name:this.props.player.name,score:this.props.player.score-1})}>-1</button>
          <button onClick={()=>Players.remove({_id:this.props.player._id})}>X</button>
        </p>
    )
  }
}
