export const Statistics = () => {
  return (
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
        <span>{this.state.bad}%</span>
      </div>
    </>
  );
};
