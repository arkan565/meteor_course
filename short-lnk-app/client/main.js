import {Meteor} from 'meteor/meteor';
import ReactDom from 'react-dom';
import {Tracker} from 'meteor/tracker'
import {routes,onAuthChanges} from '../imports/routes/routes'
//tracker
Tracker.autorun(()=>{
  const isAuthenticated = !!Meteor.userId();
})

Meteor.startup(()=>{
  	  ReactDom.render(routes,document.getElementById("app"))
})
