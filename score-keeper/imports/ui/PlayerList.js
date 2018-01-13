import React from 'react';
import Player from './Player';

export default class PlayerList extends React.Component {
  render(){
    console.log(this.props.playersList.length)
    if(this.props.playersList.length==0){
      return(
        <p>add your first player</p>
      )
    }else{
      return (
        <div>
          { this.props.playersList.map((player) => {
              return <Player key={player._id} player={player}/>
          })}
        </div>
      )
    }

  }
}
