import React, { Component } from 'react';
import {FormGroup, FormControl,  Button,ButtonToolbar} from 'react-bootstrap';


class Search extends Component {
    state = {
        search:''
    }
    
    onChange= (e)=>{
        this.setState({search: e.target.value})
    }
    onClick =() =>{
        this.props.handleSearch(this.state.search)
    }
    handleKeyPress = (event) =>{
        if(event.key === 'Enter'){
            this.props.handleSearch(this.state.search)
          }
    }
    
    render() {
        const wellStyles = { maxWidth: 500, margin: '10px auto' };
        return (
            <div className="well" style={wellStyles}>
            <FormGroup controlId="formControlsSelect">
                <FormControl   placeholder="Search Term" type="text" onKeyUp={this.handleKeyPress} onChange={this.onChange} ></FormControl>
                <ButtonToolbar>
                    <Button  bsStyle="primary" onClick={this.onClick} bsSize="large" block>Go</Button>
                </ButtonToolbar>
            </FormGroup>
            </div>
            

        );
    }
}


export default Search;