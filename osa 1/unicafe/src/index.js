import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ value, handleClick }) => {
  return <button onClick={handleClick}>{value}</button>;
};

const Stats = ({ feedback }) => {
  const sum = feedback.good + feedback.neutral + feedback.bad;
  const average = (sum / 3).toFixed(1);
  const percentage = ((feedback.good / sum) * 100).toFixed(1) + "%";

  console.log(sum, average, percentage);

  if (sum === 0 && average === "0.0" && percentage === "NaN%") {
    return <div>No feedback given</div>;
  }
  return (
    <table>
      <tbody>
        <StatsLine text="good" value={feedback.good} />
        <StatsLine text="neutral" value={feedback.neutral} />
        <StatsLine text="bad" value={feedback.bad} />
        <StatsLine text="all" value={sum} />
        <StatsLine text="average" value={average} />
        <StatsLine text="positive" value={percentage} />
      </tbody>
    </table>
  );
};

const StatsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}:</td>
      <td>{value}</td>
    </tr>
  );
};

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClick = (value) => {
    const add = feedback[value] + 1;
    return () => {
      setFeedback({ ...feedback, [value]: add });
    };
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button value="good" handleClick={handleClick("good")} />
      <Button value="neutral" handleClick={handleClick("neutral")} />
      <Button value="bad" handleClick={handleClick("bad")} />
      <h1>Stats</h1>
      <Stats feedback={feedback} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
