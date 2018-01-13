import React from 'react';
import Player from './Player';
import FlipMove from 'react-flip-move';

export default class PlayerList extends React.Component {
  render(){
    console.log(this.props.playersList.length)
    if(this.props.playersList.length==0){
      return(
        <div className="item">
          <p className="item__message">add your first player</p>
        </div>
      )
    }else{
      return (
        <FlipMove maintainContainerHeight={true}>
            { this.props.playersList.map((player) => {
                return <Player key={player._id} player={player}/>
            })}
        </FlipMove>

      )
    }

  }
}
