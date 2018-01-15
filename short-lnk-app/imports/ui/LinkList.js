import {Meteor} from 'meteor/meteor'
import React from 'react';
import {Tracker} from 'meteor/tracker'
import {Links} from '../api/links'
import LinkListItem from './LinkListItem'
import {Session} from 'meteor/session'

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
      let links=Links.find({visible:Session.get('showVisible')}).fetch()
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
         return <LinkListItem link={link} visible={true} key={link._id}/>
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
