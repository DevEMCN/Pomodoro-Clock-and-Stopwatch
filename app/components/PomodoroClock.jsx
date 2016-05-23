var React = require('react');
var Clock = require('Clock');
var PomodoroControls = require('PomodoroControls');

var PomodoroClock = React.createClass(
{
  getInitialState: function()
  {
    return {count: 0};
  },
  handleSetCountdown: function(seconds){
    this.setState({
      count: seconds
    });
  },
  render: function()
  {
    var {count} = this.state;
    return(
      <div>
        <Clock totalSeconds={count}/>
        <PomodoroControls onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }
});


module.exports = PomodoroClock;
