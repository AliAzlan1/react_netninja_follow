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
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }
  render(){
    return (
      <div className="App">
        <h1>Welcome to the home page!</h1>
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;