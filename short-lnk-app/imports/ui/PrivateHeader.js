import React from 'react';

export default (props) => {
    return(
      <div className="header">
        <div className="header__content">
          <h1 className="header__title">{props.title}</h1>
          <button className="button button--link-text"  onClick={()=>{
            Accounts.logout();
            props.history.push("/")
          }}>logout</button>
        </div>
      </div>
    )
}
