//import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'

class App extends Component {

  constructor () {

    super();

    this.state = {

      users: [ /*{name: 'John',  id: 1}, {name: 'Bob', id: 2}, {name: 'Brad', id: 3}*/ ],
      searchField: ''
    };

  } // end constructor



  componentDidMount () {
    //fetch ('https://randomuser.me/api/?results=2')
    fetch ('https://philosophy-quotes-api.glitch.me/quotes')
      .then ( response => response.json () )
      //.then ( user => console.log ( {user} ) );
      //.then ( user => <p> {user} </p> );
      .then ( user => this.setState ( {users: user} ))
  }



  render () {

    const { users, searchField } = this.state;

    const filteredUsers = users.filter ( user =>
      user.source.toLowerCase().includes (searchField.toLowerCase()))

    return (

      <div className = "App">

        <div>
          <form>
            <label>
              Search by Author:

              <input type='search' placeholder='search author'
              onChange={e => { this.setState ({ searchField: e.target.value })
              console.log (this.state);}} />

            </label>

            <input type="submit" value="Submit" />

          </form>
        </div>

        <h1>Famous Philosophical Quotes</h1>
      
        <CardList users = {filteredUsers} /*{this.state.users}*/ >
          
        </CardList>

      </div>

    );

  } // end render


}

export default App;

/*
{
this.state.users.map ( user => <p key = {user._id}> {user.source} </p> )
}
*/