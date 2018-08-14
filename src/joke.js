import React, { Component } from 'react';
import {ListGroupItem} from 'react-bootstrap';


class Joke extends Component {
  render() {
    return (
      <ListGroupItem className="joke">
        <h3>{this.props.value}</h3>
        
      </ListGroupItem>
    );
  }
}


export default Joke;