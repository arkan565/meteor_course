import React from 'react';
import {Session} from 'meteor/session'

export default class LinkListFilters extends React.Component {
  render(){
    return (
      <form action="">
        <label>
          show hiden links<input type="checkbox" onChange={(e)=>{
            Session.set('showVisible',!e.target.checked)
          }}/>
        </label>

      </form>
    )
  }
}
