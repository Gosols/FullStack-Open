import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    { text: "If it hurts, do it more often", votes: 0 },
    {
      text: "Adding manpower to a late software project makes it later!",
      votes: 0,
    },
    {
      text:
        "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      votes: 0,
    },
    {
      text:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      votes: 0,
    },
    { text: "Premature optimization is the root of all evil.", votes: 0 },
    {
      text:
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      votes: 0,
    },
  ]);

  const [selected, setSelected] = useState(0);
  let rand = 0;
  const [favorite, setFavorite] = useState(0); //index of favorite

  const nextAnecdote = () => {
    rand = Math.floor(Math.random() * anecdotes.length);
    setSelected(rand);
  };

  const vote = () => {
    const copy = [...anecdotes];
    copy[selected].votes += 1;
    setAnecdotes(copy);

    let currentHighest = 0;
    anecdotes.forEach((a) => {
      if (a.votes > currentHighest) {
        setFavorite(anecdotes.indexOf(a));
        currentHighest = a.votes;
        console.log(anecdotes[favorite]);
      }
    });
  };

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      {anecdotes[selected].text} <br />
      <b>Votes: {anecdotes[selected].votes} </b> <br />
      <button onClick={vote}>Vote</button>
      <button onClick={nextAnecdote}>Next anecdote</button>
      <h1>Anecdote with most votes</h1>
      {anecdotes.map((a, index) => {
        if (anecdotes.indexOf(a) === favorite) {
          console.log(a.votes, favorite);
          return <div key={index}>{a.text}</div>;
        } else {
          return null;
        }
      })}
      <>
        <b>with {anecdotes[favorite].votes} points</b>
      </>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
