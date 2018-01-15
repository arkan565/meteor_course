import {Meteor} from 'meteor/meteor'
import React from 'react';
import {Tracker} from 'meteor/tracker'
import {Links} from '../api/links'
import LinkListItem from './LinkListItem'
import {Session} from 'meteor/session'
import FlipMove from 'react-flip-move';

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
    if( this.state.links.lenght!=0){
      return this.state.links.map((link)=>{
           return(
             <FlipMove maintainContainerHeight={true}>
               <LinkListItem link={link} visible={true} key={link._id}/>
             </FlipMove>
           )
           })
    }else{
      return (
        <div className="item">
          <p className="item__status-message">No Links Found</p>
        </div>
      );
    }

  }
  render(){
    return (
      <div>
        {this.renderLinksListItems()}
      </div>
    )
  }
}
