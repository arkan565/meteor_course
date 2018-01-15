import React from 'react';

export default (props) => {
    return(
      <div>
        <h1>{props.title}</h1>
        <button onClick={()=>{
          Accounts.logout();
          props.history.push("/")
        }}>logout</button>
      </div>
    )
}
