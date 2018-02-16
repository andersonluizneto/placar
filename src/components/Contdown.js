import React, {Component} from 'react';


export default class Contdown extends Component{
    constructor() {
        super();
        this.state = { time: {}, seconds: 120 };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
    }

    secondsToTime(secs){
      let hours = Math.floor(secs / (60 * 60));

      let divisor_for_minutes = secs % (60 * 60);
      let minutes = Math.floor(divisor_for_minutes / 60);

      let divisor_for_seconds = divisor_for_minutes % 60;
      let seconds = Math.ceil(divisor_for_seconds);

      let obj = {
        "h": hours,
        "m": minutes,
        "s": seconds
      };
      return obj;
    }

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
    }

    startTimer() {
        if (this.timer == 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    pauseTimer() {
        clearInterval(this.timer);
        let seconds = (this.state.time.m * 60) + this.state.time.s;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });

        // Check if we're at zero.
        if (seconds == 0) {
            clearInterval(this.timer);
        }
    }

    pad(n, l) {
        let s = new String(n);
        while (s.length < l){
            s = '0' + s;
        }
        return s;
    }

    render() {
        return(
            <div>
                <button onClick={this.startTimer}>Start</button>
                <button onClick={this.pauseTimer}>Paulse</button>
                <h1> {this.pad(this.state.time.m, 2)}:{this.pad(this.state.time.s, 2)}</h1>
            </div>
        );
    }
}
