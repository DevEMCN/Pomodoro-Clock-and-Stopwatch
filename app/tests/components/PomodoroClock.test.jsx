var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var PomodoroClock = require('PomodoroClock');

describe('PomodoroClock', () => {
  it('should exists', () => {
      expect(PomodoroClock).toExist();
  });

  describe('handleSetCountdown', () => {
    it('should set state to started and countdown', (done) => {
        var countdown = TestUtils.renderIntoDocument(<PomodoroClock/>);
        countdown.handleSetCountdown(10);

        expect(countdown.state.count).toBe(10);
        expect(countdown.state.countdownStatus).toBe('started');

        setTimeout(() => {
          expect(countdown.state.count).toBe(9);
          done();
        }, 1001);
    });

    it('should set state to started and countdown', (done) => {
        var countdown = TestUtils.renderIntoDocument(<PomodoroClock/>);
        countdown.handleSetCountdown(1);

        setTimeout(() => {
          expect(countdown.state.count).toBe(0);
          done();
        }, 3001);
    });
  });
});
