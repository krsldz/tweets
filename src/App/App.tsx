import React from "react";
import { useEffect, useState } from "react";
import { Tweet } from "./types";
import "./App.css";

function App() {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const result = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await result.json();
      setTweets(data.slice(0, 6));
    };
    getPosts();
  }, []);

  return (
    <>
      <h1>My Tweets</h1>
      <div className="form">
        <input placeholder="name" />
        <input placeholder="email" />
        <input placeholder="tweet" />
        <button>Create</button>
      </div>
      <div>
        {tweets.map((tweet) => (
          <div key={tweet.id} className="tweetWrap">
             <button>Delete</button>
            <h3>{tweet.name}</h3>
            <h5>{tweet.email}</h5>
            <div>{tweet.body}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
