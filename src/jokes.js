import React, { Component } from 'react';
import {Jumbotron,ListGroup} from 'react-bootstrap';
//import axios from 'axios'
import Joke from './joke.js'
class Jokes extends Component {
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

          {this.props.value.length>0 ?(
            <Joke value={this.props.value}/>
          ):('')}

          {this.props.previousFacts.length>0 ?(
            <p>Previous Jokes:</p>
          ):('')}
          {this.props.previousFacts.map((listValue,index)=>{
            return <Joke value={listValue} key ={index}/>;
          })}
        </ListGroup>



      </Jumbotron>
    );
  }
}


// axios.get('https://api.chucknorris.io/jokes/categories', {
//             headers: {
//                 Accept: 'application/json'
//             }
//         })
//         .then(function(response){
            
//             for(let category of response.data){
//                 // viewModel.options.push({ text: category, value: category })
//                 console.log(category)

//             }
//         })
//         .catch(function(err){
//             alert(err)
//         })

export default Jokes;