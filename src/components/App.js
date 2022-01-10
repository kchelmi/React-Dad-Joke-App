import React, { useState, useEffect } from 'react';
import { Button, Container, Wrapper, Joke } from './AppLook';
import '../index.css';

function App() {
  const [joke, setJokes] = useState('');
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    };
    fetch('https://icanhazdadjoke.com', config)
      .then((res) => res.json())
      .then((data) => {
        setJokes(data.joke);
      });
  }, [fetching]);

  return (
    <Wrapper>
      <Container>
        <h1>Dad Joke</h1>
        <Joke>{joke}</Joke>
        <Button onClick={setFetching}>New Joke</Button>
      </Container>
    </Wrapper>
  );
}

export default App;
