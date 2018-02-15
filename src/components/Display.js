import React, {Component} from 'react';

import ButtonAction from './ButtonAction';

export default class Display extends Component {
    render(){

        const textStyle = {
            fontSize: "20vw",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            color: "rgb(255, 215, 0)",
            textAlign: "center"
        };

        const divStyle = {
            backgroundColor: this.props.cor,
            borderStyle: "solid",
            borderWidth: "2",
            marginBottom: "10px",
            marginTop: "10px"
        };

        return (
            <div>
                <div style={divStyle}>
                    <h1 style={textStyle}>{this.props.label}</h1>
                </div>
                <div className="columns is-2">
                    <div className="column has-text-centered">
                        <ButtonAction styleBt="button is-medium is-dark" pontos="1" handleClick={this.props.handleClick}>+1 Ponto</ButtonAction>
                    </div>
                    <div className="column has-text-centered">
                        <ButtonAction styleBt="button is-medium is-dark" pontos="3" handleClick={this.props.handleClick}>+3 Ponto</ButtonAction>
                    </div>
                    <div className="column has-text-centered">
                        <ButtonAction styleBt="button is-medium is-dark" pontos="-1" handleClick={this.props.handleClick}>-1 Ponto</ButtonAction>
                    </div>
                </div>
            </div>
        )
    }
}
