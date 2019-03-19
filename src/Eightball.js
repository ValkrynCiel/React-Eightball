import React, { Component } from 'react';
import './Eightball.css';
import answers from './answers';

class Eightball extends Component {

    static defaultProps = { answers };

    constructor(props){
        super(props);
        this.state = { statement: "Think of a question",
                       color: "black" };
        
        this.handleClick = this.handleClick.bind(this);
    }

    getRandom() {
        return Math.floor(Math.random() * this.props.answers.length)
    }

    handleClick(evt) {
        let index = this.getRandom();
        this.setState({ statement: answers[index].msg,
                        color: answers[index].color,
                        });
    }

    render () {
        const colors = {backgroundColor: this.state.color,
                        color: "white"}
        return (
            <div className = "Eightball" 
                 onClick = { this.handleClick } 
                 style = {colors}>
                 <b className = "Eightball-text">{ this.state.statement } </b>
            </div>
        );
    }
}


export default Eightball;