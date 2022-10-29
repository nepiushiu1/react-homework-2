import React from 'react';
import { Statistics } from './Statistics/Statistics';

import css from './Feedback.module.css';

class Feedback extends React.Component {
  constructor() {
    super();
    this.state = { good: 0, neutral: 0, bad: 0 };
  }

  pressingGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  pressingNeuntral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  pressingBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  render() {
    const total = this.state.bad + this.state.good + this.state.neutral || 0;
    const positiveFeedback = (this.state.good / total) * 100 || 0;
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
          {total === 0 && (
            <div>
              <p className={css.feedback}>There is no feedback</p>
            </div>
          )}

          {total !== 0 && (
            <>
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={total}
                positivePercentage={positiveFeedback.toFixed()}
              ></Statistics>
            </>
          )}
        </div>
      </>
    );
  }
}

export default Feedback;
