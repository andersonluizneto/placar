import React, {Component} from 'react';

export default class ButtonAction extends Component{
    render() {

        return (
            //<button className={this.props.styleBt} onClick={() => { this.props.handleClick(this.props.children) }}>{this.props.children}</button>
            <button className={this.props.styleBt} onClick={this.props.handleClick.bind(this, this.props.pontos)}>{this.props.children}</button>
        );
    }
}

