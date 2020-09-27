import React from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'

class App extends React.Component {
  state = {
    ninjas: [
      { name:'Ifa', age:20, belt:'cat', id:1 },
      { name:'Iira', age:5, belt:'cat', id:2 },
      { name:'lan', age:2, belt:'cat', id:3 },
    ]
  }
  render(){
    return (
      <div className="App">
        <h1>Welcome to the home page!</h1>
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja/>
      </div>
    );
  }
}

export default App;