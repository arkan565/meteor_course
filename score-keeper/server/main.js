import {Meteor} from 'meteor/meteor'
import {Players} from './../imports/api/players.js';

Meteor.startup(() => {
    /*class Person {
      constructor(name='anonymous',age=0){
        this.name=name;
        this.age=age;
      }
      getGreetings(){
        return `Hi! i'm ${this.name}`
      }
      getDescription(){
        return `Hi! i'm ${this.name} and i'm ${this.age} years old`
      }
    }
    class Employee extends Person{
      constructor(name,age,title){
        super(name,age)
        this.title=title;
      }
      getGreetings(){
        if(this.title){
          return `hi! i'm ${this.name} and im ${this.title}`
        }else{
          super.getGreetings()
        }
      }
      hasJob(){
        return !!this.title;
      }
    }
    class Programmer extends Person{
      constructor(name,age,pref_language='asembly'){
        super(name,age);
        this.pref_language=pref_language;
      }
      getGreetings(){
        return `hi i'm ${this.name} and i'm ${this.pref_language} developer`
      }
    }
    let me= new Programmer("Pablo",21,"javascript");
    console.log(me.getGreetings())*/ 
})
