import {Meteor} from 'meteor/meteor'
import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import shortid from 'shortid'
export const Links = new Mongo.Collection('links');
import moment from 'moment'

if (Meteor.isServer) {
  Meteor.publish('links', function() {
    return Links.find({userId: this.userId});
  });
}

Meteor.methods({
  'links.setVisibility' (id, visible) {
    Links.update({
      _id: id
    }, {
      $set: {
        visible: visible
      }
    })
  },

  'links.insert' (url) {
    if(!this.userId) {
      Meteor.error('not-authorized')
    } else {
      try {
        new SimpleSchema({
          url: {
            type: String,
            label: 'your link',
            regEx: SimpleSchema.RegEx.Url
          }
        }).validate({url});
        Links.insert({_id: shortid.generate(), url, userId: this.userId, visible: true,visitedCount:0,lastVisited:null});
      } catch (e) {
        throw new Meteor.Error(400, e.message)
      }
    }
  },

  'links.trackVisit'(id){
    Links.update({_id:id},{$inc:{visitedCount:1},$set:{lastVisited:new Date().getTime()}})
  }
})
