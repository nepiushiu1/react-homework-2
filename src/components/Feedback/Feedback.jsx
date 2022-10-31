// import { PropTypes } from 'prop-types';

import css from './Feedback.module.css';

export const Feedback = ({ pressingGood, pressingNeuntral, pressingBad }) => {
  return (
    <>
      <button className={css.btnGood} onClick={pressingGood}>
        <span className={css.description}>Good</span>
      </button>
      <button className={css.btnNeutral} onClick={pressingNeuntral}>
        <span className={css.description}>Neutral</span>
      </button>
      <button className={css.btnBad} onClick={pressingBad}>
        <span className={css.description}>Bad</span>
      </button>
    </>
  );
};
