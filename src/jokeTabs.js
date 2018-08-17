import React, { Component } from 'react';
import {Tab, Tabs} from 'react-bootstrap';
import Categories from './categories.js'
import Search from './search.js'

class JokeTabs extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleSelect = this.handleSelect.bind(this);
    
        this.state = {
          key: false
        };
      }

    handleSelect(key){
        this.setState({
            key
        })
        this.props.handleTabs(key)
    }
    render() {
        return (
            <Tabs
                activeKey={this.state.key}
                onSelect={this.handleSelect}
                id="controlled-tab-example">
                <Tab eventKey={false} title="Category">
                    <Categories handleDropDown={this.props.handleDropDown} categories={this.props.categories}/>
                </Tab>
                <Tab eventKey={true} title="Search">
                    <Search handleSearch={this.props.handleSearch} />
                </Tab>
                


            </Tabs>
        );
    }
}


export default JokeTabs;