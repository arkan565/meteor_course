import React from 'react';
import {Account} from 'meteor/meteor-base'
import {Links} from '../api/links'

import LinkList from './LinkList';

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
  onSubmit(e){
    const url=this.refs.url.value.trim();
    e.preventDefault();
    if(url){
      Links.insert({url});
      this.refs.url.value='';
    }
  }
  render(){
    return (
      <div>
        <button onClick={()=>{
          Accounts.logout();
          this.props.history.push("/")
        }}>logout</button>

        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="url" placeholder="URL"/>
          <button>add link</button>
        </form>
        <LinkList />
      </div>
    )
  }
}
