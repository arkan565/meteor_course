import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker'

import {Players,calculatePlayerPositions} from './../imports/api/players.js';
import App from './../imports/ui/App'

Meteor.startup(function(){
  let players;
  Tracker.autorun(()=>{
      players=Players.find({},{sort:{score:-1}}).fetch();
      positionedPlayers= calculatePlayerPositions(players)
      let title="Score Keep"
      ReactDom.render(<App title={title} players={positionedPlayers}/>
        ,document.getElementById("app"))
  })
})
