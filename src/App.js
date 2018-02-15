import React, { Component } from 'react';

import Display from './components/Display';

export default class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            ptHong: 0,
            ptChong: 0
        }
    }


    // Manipulador do Hong
    handleHong = (pt) => {
        let ptHong = this.state.ptHong;
        ptHong += parseInt(pt, 10);
        (ptHong < 0) ? this.setState({ptHong: 0}) : this.setState({ptHong});
    }

    // Manipulador do Chong
    handleChong = (pt) => {
        let ptChong = this.state.ptChong;
        ptChong += parseInt(pt, 10);
        (ptChong < 0) ? this.setState({ptChong: 0}) : this.setState({ptChong});
    }

    render() {
        return (
            <div className="App">
                <div className="columns">
                    <div className="column">
                        <h1 className="is-size-4 has-text-left">Hong</h1>
                        <Display cor="#ff0000" label={this.state.ptHong} handleClick={this.handleHong} />
                    </div>
                    <div className="column">
                        <h1 className="is-size-4 has-text-right">Chong</h1>
                        <Display cor="#0000ff" label={this.state.ptChong} handleClick={this.handleChong} />
                    </div>
                </div>
            </div>
        );
    }
}
