import React from 'react';


import TitleBar from './TitleBar'
import AddPlayer from './AddPlayer'
import PlayerList from './PlayerList'

export default class App extends React.Component{
  render(){
    return(
      <div>
        <TitleBar title={this.props.title}/>
        <div className="wrapper">
          <PlayerList playersList={this.props.players}/>
          <AddPlayer/>
        </div>

      </div>
    )
  }
}
