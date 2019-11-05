import React, { Component } from 'react';
import Header from './components/Header';
import Timer from './components/Timer/Timer';

export default class App extends Component {

    constructor(){
        super();

        this.state = {
            title: 'Timer Application'
        };
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} />
                <div className="mt-5">
                    <Timer />
                </div>
            </div>
        );
    }
}