import React, { Component } from 'react';
import {FormGroup, FormControl, Button, ButtonToolbar} from 'react-bootstrap';


class Categories extends Component {
    state = {
        choice : ''
    }
    onChange = (event) =>{
        this.setState({choice: event.target.value})
    }
    onClick = () =>{
        this.props.handleDropDown(this.state.choice)
    }

    render() {
        const wellStyles = { maxWidth: 500, margin: '10px auto' };
        return (
            <div className="well" style={wellStyles}>
            <FormGroup controlId="formControlsSelect">
                    <FormControl componentClass="select" name="selectedCategory" placeholder="select"  onChange={this.onChange}>
                        {this.props.categories.map( (listValue)=>{
                            return <option value={listValue} key={listValue}>{listValue}</option>;
                        })}
                </FormControl>
                <ButtonToolbar>
                    <Button  bsStyle="primary"  onClick={this.onClick} bsSize="large" block>Go</Button>
                </ButtonToolbar>

            </FormGroup>
            </div>
        );
    }
}


export default Categories;