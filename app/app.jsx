var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Stopwatch = require('Stopwatch');
var PomodoroClock = require('PomodoroClock');


// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// load css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PomodoroClock}/>
      <Route path="stopwatch" component={Stopwatch}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
