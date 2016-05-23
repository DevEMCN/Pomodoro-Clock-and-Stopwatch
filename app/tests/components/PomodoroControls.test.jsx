var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var PomodoroControls = require('PomodoroControls');

describe('PomodoroControls', () => {
  it('should exists', () => {
      expect(PomodoroControls).toExist();
  });

  it('should call onSetCountdown if valid seconds entered', () => {
    var spy = expect.createSpy();
    var pomodoroControls = TestUtils.renderIntoDocument(<PomodoroControls onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(pomodoroControls));

    pomodoroControls.refs.seconds.value = '109';

    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  });

  it('should call onSetCountdown if invalid data entered', () => {
    var spy = expect.createSpy();
    var pomodoroControls = TestUtils.renderIntoDocument(<PomodoroControls onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(pomodoroControls));

    pomodoroControls.refs.seconds.value = '109b';

    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
