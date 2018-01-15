import { Meteor } from 'meteor/meteor';
import {WebApp} from 'meteor/webapp'
import {Links} from '../imports/api/links'
import '../imports/api/users';
import '../imports/api/links.js'
Meteor.startup(() => {
  WebApp.connectHandlers.use((req,res,next)=>{
    url=req.url.slice(1);
    const link=Links.findOne({_id:url});
    if(link){
      res.statusCode=302;
      res.setHeader('location',link.url)
      res.end();
      Meteor.call('links.trackVisit',url)
    }else{
      next();
    }
  })
  });
