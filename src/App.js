import React, { Component } from 'react';
import './App.css';
import Jokes from './jokes.js'
import {Grid, Row, Col, PageHeader} from 'react-bootstrap'
// import Categories from './categories.js'
// import Search from './search.js'
import axios from 'axios'
import SearchedJokes from './searchedJokes.js'
import JokeTabs from './jokeTabs.js'
class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      categories:[],
      selectedCategory:'none',
      isFetchingFact:false,
      isSearching:false,
      search:'',
      currentFact:'',
      previousFacts:[],
      searchResults:[]
    };
  }

  componentWillMount() {
    let viewModel= this
    axios.get('https://api.chucknorris.io/jokes/categories', {
            headers: {
                Accept: 'application/json'
            }
        })
        .then(function(response){
            
            let tempCategories=[]
            tempCategories=response.data
            tempCategories.unshift('any')
            viewModel.setState({
              categories: tempCategories
            })
        })
        .catch(function(err){
            alert(err)
        })
  }
  handleTabs = (key) =>{
    this.setState({ isSearching: key });
  }
  handleSearch = (query) =>{
    this.setState({ search: query });
    this.searchForFact(query)
  }

  handleDropDown = (choice) =>{
    this.setState({ 
      selectedCategory: choice,
      isSearching:false
    });
    this.getFacts(choice)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PageHeader> Chuck Norris </PageHeader>
        </header>
        <JokeTabs handleTabs={this.handleTabs}
          handleSearch={this.handleSearch}
          handleDropDown={this.handleDropDown}
          categories={this.state.categories}
          />
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
            {this.state.isSearching ?(
              <SearchedJokes  searchResults={this.state.searchResults}/>
            ):(
              <Jokes value={this.state.currentFact} previousFacts={this.state.previousFacts}/>
            )} 
            </Col>
          </Row>
        </Grid>


        
        

      </div>
    );
  }

  searchForFact= (search)=>{
    let viewModel = this
    viewModel.setState({
      isFetchingFact : true,
      isSearching : true
    })

    const tempResults = []

    let url='https://api.chucknorris.io/jokes/search?query='+search

    axios.get(url, {
        headers: {
            Accept: 'application/json'
        }
    })
    .then(function(response){
      viewModel.setState({
        isFetchingFact : false,
        searchResults : []
      })

        // const wordLength = search.length
        // const highlightStart = '<mark>'
        // const highlightEnd = '</mark>'

        for(let result of response.data.result){
            // let indexOfAdjust=0
            // let addedCharacters = 0
            // const matchingStringsStart = []
            // let temp = result.value.toLowerCase()
            //get the index of of all matching instances of the search 
            // while(temp.indexOf(search.toLowerCase())!==-1){
            //     indexOfAdjust+=temp.indexOf(search.toLowerCase())
            //     matchingStringsStart.push(indexOfAdjust)
            //     temp=temp.slice(indexOfAdjust+1)

            // }

            let fact =result.value
            //add html to highlight to a fact 
            // for(let startIndex of matchingStringsStart){

            //     fact = fact.substr(0,addedCharacters + startIndex) + highlightStart + fact.substr(addedCharacters + startIndex)
            //     addedCharacters+=highlightStart.length
            //     fact = fact.substr(0,addedCharacters + startIndex + wordLength) + highlightEnd + fact.substr(addedCharacters + startIndex + wordLength)
            //     addedCharacters+=highlightEnd.length+1
                
            // }
            //push the edited fact to the searchResults array

            tempResults.push(fact)

            
            
        }
        viewModel.setState({
          searchResults: tempResults
        })
            
    })
    .catch(function(err){
        console.log(err)
    })
}

  getFacts= (category)=>{
    this.setState({
      isFetchingFact : true,
      isSearching : false
    })
    
    // We need to be able to reference our vue object (model) from 
    // within the .get and .then functions below.  Since 'this' will
    // change with each function call, we store a reference to the 
    // current 'this' here
    let viewModel = this

    let url=''


    if(category!=='any'){
        url='https://api.chucknorris.io/jokes/random?category='+category
    }else{
        url='https://api.chucknorris.io/jokes/random?category='
    }

    axios.get(url, {
        headers: {
            Accept: 'application/json'
        }
    })
    .then((response)=>{

        viewModel.state.isFetchingFact = false
        const previousFactsPlusOne = viewModel.state.previousFacts
        // Add the current fact to the previous facts array
        if (viewModel.state.currentFact)
        previousFactsPlusOne.push(viewModel.state.currentFact)

        // Assign the new fact to the 'currentFact' property

        viewModel.setState({
          previousFacts: previousFactsPlusOne,
          currentFact:response.data.value
        })

    })
    .catch(function(err){
        alert(err)
    })
  }

}


export default App;
