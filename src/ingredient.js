import React, { Component } from 'react';

class Ingredient extends Component {
    render(){
        return(
            <div>
                <li>{this.props.ingredient}</li>
            </div>
        )
    }
}

export default Ingredient;