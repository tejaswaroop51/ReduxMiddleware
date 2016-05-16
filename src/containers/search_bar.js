/**
 * Created by tvankada on 5/16/16.
 */

import React, {Component} from 'react'

import { connect } from 'react-redux';

import {fetchWeather} from '../actions/index';

import { bindActionCreators} from 'redux'; // takes the action and it will flow across all reducers

export default class SearchBar extends Component{

    constructor(props){

        super(props);

        this.state = { term :''};

        this.onInputChange = this.onInputChange.bind(this);

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){

        this.setState({term : event.target.value});


    }

    onFormSubmit(event){

        event.preventDefault();

        // We need to go and fetch weather data

        this.props.fetchWeather(this.state.term);

        this.setState({term : ''});
    }

    render(){

        return(

            <form className="input-group" onSubmit={this.onFormSubmit}>

                <input value={this.state.term}

                 placeholder="Get a five day forecast for your favourite cities."

                 className="form-control"

                  onChange={this.onInputChange}
                />

                <span className="input-group-btn">

                    <button type="submit" className="btn btn-secondary">Submit</button>

                </span>
            </form>
        );
    }

}

function mapDispatchToProps(dispatch){

    return bindActionCreators({fetchWeather},dispatch );

}

// Promote SearchBar component to container - it needs to know about this new method , fetchWeather. Make it available as a prop

export default connect(null,mapDispatchToProps)(SearchBar);