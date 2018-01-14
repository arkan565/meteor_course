import React from 'react';
import {Account} from 'meteor/meteor-base'
export default class Link extends React.Component {
  constructor(props){
    super(props);
  }
  componentWillMount() {
    // called once
    if(!Meteor.userId()){
      this.props.history.replace('/')
    }
  }
  render(){
    return (
      <div>
        <button onClick={()=>{
          Accounts.logout()
          this.props.history.push('/')
        }}>hola</button>
      </div>
    )
  }
}
