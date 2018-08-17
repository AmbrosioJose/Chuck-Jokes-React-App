import React, { Component } from 'react';
import {Jumbotron,ListGroup} from 'react-bootstrap';
//import axios from 'axios'
import Joke from './joke.js'
class SearchedJokes extends Component {
  constructor(props){
    super(props);
    this.state ={
      category:'',
    };
  }

  render() {
    return (
      <Jumbotron className="tweets">
        <h2>Facts of Life</h2>
        <ListGroup>
          {this.props.searchResults.map((listValue,index)=>{
            return <Joke value={listValue} key ={index}/>;
          })}
        </ListGroup>



      </Jumbotron>
    );
  }
}

export default SearchedJokes;