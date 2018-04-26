import React, {Component} from 'react';


export default class Contdown extends Component{
    constructor() {
        super();
        this.state = { time: {}, seconds: 120, isPaused:false};
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
        if (this.timer === 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    pauseTimer() {
        let seconds = (this.state.time.m * 60) + this.state.time.s;
        if(this.state.isPaused){
            this.timer = setInterval(this.countDown, 1000);
        }
        else{
          clearInterval(this.timer);
          this.setState({
              time: this.secondsToTime(seconds),
              seconds: seconds,isPaused:true,
          });
        }
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,isPaused:false,
        });

        // Check if we're at zero.
        if (seconds === 0) {
            clearInterval(this.timer);
        }
    }

    pad(n) {
        return n<10?'0'+n.toString():n;
    }

    render() {
      const timerStyle={fontWeight:'bold',fontSize:'2rem',
        color:this.state.seconds<=10?'red':'',
        transition:'color ease-in 0.1s',
      };
        return(
            <div>
                <button onClick={this.startTimer}>Start</button>
                <button onClick={this.pauseTimer}>
                  {this.state.isPaused?'Continue':'Pause'}
                </button>
                <h1 style={timerStyle}
                 className={this.state.isPaused||this.state.seconds<=10?'blinking':''}
                >
                  {this.pad(this.state.time.m)}:{this.pad(this.state.time.s)}
                </h1>
            </div>
        );
    }
}
