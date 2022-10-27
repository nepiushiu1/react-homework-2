import React from 'react';
// import { Statistics } from './Statistics/Statistics';

class Feedback extends React.Component {
  constructor() {
    super();
    this.state = { good: 0, neutral: 0, bad: 0, total: 0 };
  }

  //   const refs={ good:this.state.good}

  pressingGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1, total: prevState.total + 1 };
    });
  };

  pressingNeuntral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1, total: prevState.total + 1 };
    });
  };

  pressingBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1, total: prevState.total + 1 };
    });
  };

  render() {
    const positiveFeedback = (this.state.good / this.state.total) * 100 || 0;
    return (
      <>
        <div>
          <h2>Please leave feedback</h2>
          <button onClick={this.pressingGood}>Good</button>
          <button onClick={this.pressingNeuntral}>Neutral</button>
          <button onClick={this.pressingBad}>Bad</button>
        </div>
        <div>
          <h2>Statistics</h2>
          {this.state.total === 0 && (
            <div>
              <p>There is no feedback</p>
            </div>
          )}
          {/* <Statistics /> */}

          {this.state.total !== 0 && (
            <>
              <div>
                Good:
                <span>{this.state.good}</span>
              </div>
              <div>
                Neutral:
                <span>{this.state.neutral}</span>
              </div>
              <div>
                Bad:
                <span>{this.state.bad}</span>
              </div>
              <div>
                Total:
                <span>{this.state.total}</span>
              </div>
              <div>
                Positive feedback:
                <span>{positiveFeedback.toFixed()}%</span>
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}

export default Feedback;
