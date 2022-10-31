import React from 'react';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import css from './App.module.css';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

class App extends React.Component {
  state = { good: 0, neutral: 0, bad: 0 };

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

  countTotalFeedback = () => {
    return this.state.bad + this.state.good + this.state.neutral || 0;
  };

  countPositiveFeedbackPercentage = () => {
    return (this.state.good / this.countTotalFeedback()) * 100 || 0;
  };

  render() {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <>
        <div className={css.conteiner}>
          <div>
            <Section title="Please leave feedback" />
            <>
              <Feedback
                pressingGood={this.pressingGood}
                pressingNeuntral={this.pressingNeuntral}
                pressingBad={this.pressingBad}
              />
            </>
          </div>
          <div>
            <Section title="Statistics" />
            {total === 0 ? (
              <div>
                <Notification message="There is no feedback" />
              </div>
            ) : (
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
        </div>
      </>
    );
  }
}

export default App;
