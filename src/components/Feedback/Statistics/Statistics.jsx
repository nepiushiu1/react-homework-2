import css from '../Feedback.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <div className={css.feedback}>
        Good:
        <span className={css.value}>{good}</span>
      </div>
      <div className={css.feedback}>
        Neutral:
        <span className={css.value}>{neutral}</span>
      </div>
      <div className={css.feedback}>
        Bad:
        <span className={css.value}>{bad}</span>
      </div>
      <div className={css.feedback}>
        Total:
        <span className={css.value}>{total}</span>
      </div>
      <div className={css.feedback}>
        Positive feedback:
        <span className={css.value}>{positivePercentage}%</span>
      </div>
    </>
  );
};
