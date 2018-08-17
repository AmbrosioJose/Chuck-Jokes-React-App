import React, { Component } from 'react';
import {ListGroupItem} from 'react-bootstrap';


class Joke extends Component {
  render() {
    return (
      <ListGroupItem className="joke">
        <h4>{this.props.value}</h4>
        
      </ListGroupItem>
    );
  }
}


export default Joke;