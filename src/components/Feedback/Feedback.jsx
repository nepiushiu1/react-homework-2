import React from 'react';
// import { Statistics } from './Statistics/Statistics';

import css from './Feedback.module.css';

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
          <h2 className={css.name}>Please leave feedback</h2>
          <button className={css.btnGood} onClick={this.pressingGood}>
            <span className={css.description}>Good</span>
          </button>
          <button className={css.btnNeutral} onClick={this.pressingNeuntral}>
            <span className={css.description}>Neutral</span>
          </button>
          <button className={css.btnBad} onClick={this.pressingBad}>
            <span className={css.description}>Bad</span>
          </button>
        </div>
        <div>
          <h2 className={css.name}>Statistics</h2>
          {this.state.total === 0 && (
            <div>
              <p>There is no feedback</p>
            </div>
          )}
          {/* <Statistics /> */}

          {this.state.total !== 0 && (
            <>
              <div className={css.feedback}>
                Good:
                <span className={css.value}>{this.state.good}</span>
              </div>
              <div className={css.feedback}>
                Neutral:
                <span className={css.value}>{this.state.neutral}</span>
              </div>
              <div className={css.feedback}>
                Bad:
                <span className={css.value}>{this.state.bad}</span>
              </div>
              <div className={css.feedback}>
                Total:
                <span className={css.value}>{this.state.total}</span>
              </div>
              <div className={css.feedback}>
                Positive feedback:
                <span className={css.value}>{positiveFeedback.toFixed()}%</span>
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}

export default Feedback;
