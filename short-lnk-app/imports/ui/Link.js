import React from 'react';
import {Account} from 'meteor/meteor-base'
import {Links} from '../api/links'
import {Meteor} from 'meteor/meteor';
import LinkList from './LinkList';
import PrivateHeader from './PrivateHeader'
import AddLink from './AddLink'
import LinkListFilters from './LinkListFilters'

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
        <PrivateHeader title='MyLinks' history={this.props.history}/>
        <div className="page-content">
          <LinkListFilters/>

          <AddLink />
          <LinkList />

        </div>
      </div>
    )
  }
}
