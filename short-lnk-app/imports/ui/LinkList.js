import {Meteor} from 'meteor/meteor'
import React from 'react';
import {Tracker} from 'meteor/tracker'
import {Links} from '../api/links'


export default class LinkList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      links:[]
    }
  }
  componentDidMount(){
    this.linksTracker = Tracker.autorun(()=>{
      Meteor.subscribe('links')
      let links=Links.find().fetch()
      this.setState({ links })
    })
  }
  componentWillUnmount(){
    this.state = {
      links:[]
    }
    this.linksTracker.stop();
  }
  renderLinksListItems(){
    return this.state.links.map((link)=>{
         return(<p  key ={link._id} >{link.url}</p>)
         })
  }
  render(){
    return (
      <div>
        {this.renderLinksListItems()}
      </div>
    )
  }
}
