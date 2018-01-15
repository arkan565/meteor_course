import React from 'react';
import {Link} from 'react-router-dom'
import { Accounts } from 'meteor/accounts-base'
import {Meteor} from 'meteor/meteor'

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }
  componentWillMount() {
    // called once
    if(Meteor.userId()){
      this.props.history.replace('/link')
    }
  }
  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
    if(password.lenght<6){
      this.setState({error:'password must be more than 6 caracters lenght'})
    }
    Accounts.createUser({email, password}, (err) => {
      if(err){
        this.setState({error:err.reason})
      }else{
        this.setState({error:''})
      }
    });

    // this.setState({
    //   error: 'Something went wrong.'
    // });
  }
  render() {
    return (
      <div className="boxed-view">
           <div className="boxed-view__box">
             <h1>Join Short Lnk</h1>

             {this.state.error ? <p>{this.state.error}</p> : undefined}

             <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view__form">
               <input type="email" ref="email" name="email" placeholder="Email"/>
               <input type="password" ref="password" name="password" placeholder="Password"/>
               <button className="button">Create Account</button>
             </form>

             <Link to="/">Already have an account?</Link>
           </div>
      </div>
    );
  }
}
