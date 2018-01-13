import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker'

import {Players} from './../imports/api/players.js';

const renderPlayers = function(playersList) {
  return playersList.map((player) => {
    return(
        <p key={player._id}>{player.name} has {player.score}
          <button onClick={()=>Players.update({_id:player._id},{$inc:{score:1}})}>+1</button>
          <button  onClick={()=>Players.update({_id:player._id},{name:player.name,score:player.score-1})}>-1</button>
          <button onClick={()=>Players.remove({_id:player._id})}>X</button>
        </p>
    )
  });
}
handleSubmit= (e) => {
  let playerName=e.target.playerName.value;
  e.preventDefault();
  if(playerName){
    Players.insert({name:playerName,score:0})
  }
}
Meteor.startup(function(){
  let players;
  Tracker.autorun(()=>{
      players=Players.find().fetch();
      let title="Score Keep"
      let jsx =(
        <div>
          <h1>{title}</h1>
          <p>hola</p>
          <p>secondp</p>
          {renderPlayers(players)}
          <form onSubmit={handleSubmit}>
            <input type="text" name="playerName" placeholder="player name"/>
            <button >AddPlayer</button>
          </form>

        </div>
      ) ;
      ReactDom.render(jsx,document.getElementById("title"))
  })
})
