import React, { Component } from 'react';

class Ingredient extends Component {
    render(){
        return(
            <div>
                <p style={{backgroundColor: this.props.color}} key={this.props.key}>
                    {/* render individual ingredient */}
                    {this.props.ingredient}
                </p>
            </div>
        )
    }
}

export default Ingredient;