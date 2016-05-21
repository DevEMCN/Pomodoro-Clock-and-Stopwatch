var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Pomodoro Clock and Stopwatch</li>
            <li>
              <IndexLink to="/" activeClassName="active-link">Pomodoro Clock</IndexLink>
            </li>
            <li>
              <Link to="/stopwatch" activeClassName="active-link">Stopwatch</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Created by <a href="https://github.com/DevEMCN" target="_blank">DevEMCN</a></li>
          </ul>
        </div>
      </div>
    );
};

module.exports = Nav;
