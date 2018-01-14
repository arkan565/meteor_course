import { Meteor } from 'meteor/meteor';
import  SimpleSchema from 'simpl-schema'
import {Accounts} from 'meteor/accounts-base'

Accounts.validateNewUser((user)=>{
  const email= user.emails[0].address;
  console.log(email)
  try{
    new SimpleSchema({
      email:{
        type:String,
        regEx: SimpleSchema.RegEx.Email
      }
    }).validate({email:email})
    return true;
  }catch (e){
    throw new Meteor.Error(400,'Email is invalid')
  }
  })
