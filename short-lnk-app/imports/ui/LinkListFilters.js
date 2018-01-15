import React from 'react';
import {Session} from 'meteor/session'

export default class LinkListFilters extends React.Component {
  render(){
    return (
      <form action="">
        <label className="checkbox">
          <input className="checkbox__box"  type="checkbox" onChange={(e)=>{
            Session.set('showVisible',!e.target.checked)
          }}/>show hidden links
        </label>

      </form>
    )
  }
}
