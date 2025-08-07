import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((resp) => {
        setJokes(resp.data);
      })
      .catch((err) => {
        console.log("Error in useEffect ", err);
      });
  }, []);
  return (
    <>
      <h1>Welcome Amina</h1>
      <p>Jokes: {jokes.length}</p>
      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <p>{index+1}</p>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  );
}

export default App;
