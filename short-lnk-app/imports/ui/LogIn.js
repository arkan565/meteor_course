import React from 'react';
import { Link } from 'react-router-dom'
import { Meteor } from 'meteor/meteor'

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      eror: ''
    }
  }
  componentWillMount() {
    // called once
    if(Meteor.userId()){
      this.props.history.replace('/link')
    }
  }

  onSubmit(e){
    e.preventDefault();
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
    Meteor.loginWithPassword({email},password, (err)=>{
      if(err){
        this.setState({error:err.reason})
      }else{
        this.setState({error:''})
        this.props.history.push('/link')
      }
    })

  }
  render(){
    return (
        <div>
          <h1>Log into shot-Lnk</h1>
          <br/>
          {this.state.error ? <p>{this.state.error}</p> : undefined}

          <form onSubmit={this.onSubmit.bind(this)}>
            <input type="email" ref="email" name="email" placeholder="Email"/>
            <input type="password" ref="password" name="password" placeholder="Password"/>
            <button>Login</button>
          </form>

          <br/>
          <Link to="/signup">You dont have account? Sign up</Link>
        </div>
    )
  }
}
