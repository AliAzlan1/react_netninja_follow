import React, { Component } from 'react';

class Ninjas extends Component{
    render(){
        const {name, age, degree} = this.props;
        return(
            <div className="ninja">
                <div>Name: {name} </div>
                <div>Age: {age} </div>
                <div>Degree: {degree} </div>
            </div>   
        )
    }
}

export default Ninjas