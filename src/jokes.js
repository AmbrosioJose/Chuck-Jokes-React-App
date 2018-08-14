import React, { Component } from 'react';
import {Jumbotron,ListGroup} from 'react-bootstrap';
import axios from 'axios'
import Joke from './joke.js'
class Jokes extends Component {
  constructor(props){
    super(props);
    this.state ={
      categories:[],
    };
  }
  componentWillMount() {
    console.log('will mount')
    let viewModel= this
    axios.get('https://api.chucknorris.io/jokes/categories', {
            headers: {
                Accept: 'application/json'
            }
        })
        .then(function(response){
            
            // for(let category of response.data){
            //     // viewModel.options.push({ text: category, value: category })
            //     console.log(category)

            // }
            viewModel.setState({
              categories: response.data
            })
            console.log(viewModel.categories)
        })
        .catch(function(err){
            alert(err)
        })
  }
  componentDidMount() {
    console.log('Component DID MOUNT!')
  }

  render() {
    return (
      <Jumbotron className="tweets">
        <h2>Jokes Component</h2>
        <ListGroup>
          {this.state.categories.map((listValue)=>{
            return <Joke value={listValue}/>;
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