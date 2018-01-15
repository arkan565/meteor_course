import React from 'react';
import {Meteor} from 'meteor/meteor'
import Clipboard from 'clipboard'
import moment from 'moment'

export default class LinkListItem extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    justCopied: false
    };
  }
  componentDidMount() {
    this.clipboard=new Clipboard(this.refs.copy)
    this.clipboard.on('success', () => {
      this.setState({justCopied:true})

    }).on('error', () => {
    })
  }
  componentWillUnmount() {
    this.clipboard.destroy();
  }
  render() {
    let lastvisited
    if(this.props.link.lastVisited){
      lastvisited=moment(this.props.link.lastVisited).fromNow()
    }
    return (
      <div>
        <p >{this.props.link.url}</p>
        <p>{Meteor.absoluteUrl(this.props.link._id)}</p>
        <p>{this.props.link.visitedCount} - {lastvisited}</p>
        <button ref="copy" data-clipboard-text={Meteor.absoluteUrl(this.props.link._id)}>Copy</button>
        <button ref="copy" data-clipboard-text={Meteor.absoluteUrl(this.props.link._id)}>
          {
            this.state.justCopied
              ? 'Copied'
              : 'Copy'
          }
        </button>
        <button onClick={() => {
            Meteor.call('links.setVisibility', this.props.link._id, !this.props.link.visible);
          }}>
          {
            this.props.link.visible
              ? 'Hide'
              : 'Unhide'
          }
        </button>
      </div>
    )
  }
}
