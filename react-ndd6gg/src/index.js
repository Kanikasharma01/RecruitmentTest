import React, { Component } from 'react'
// ...
import axios from "axios";

class App extends Component {

  // default State object
  state = {
    users: []
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {

        // create an array of users only with relevant data
        const NewUsers = response.data.map(c => {
          return {
            id: c.id,
            name: c.name
          };
        });

        // create a new "State" object without mutating 
        // the original State object. 
        const newState = Object.assign({}, this.state, {
          users: NewUsers
        });

        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        
        ...

        <ContactList users={this.state.users} />
      </div>
    );
  }
}

export default App;