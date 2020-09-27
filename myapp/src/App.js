import React from 'react';
import Ninjas from './Ninjas'

class App extends React.Component {
  state = {
    ninjas: [
      { name:'Ifa', age:0, belt:'cat', id:1 },
      { name:'Iira', age:1, belt:'cat', id:2 },
      { name:'lan', age:2, belt:'cat', id:3 },
    ]
  }
  render(){
    return (
      <div className="App">
        <h1>Welcome to the home page!</h1>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;