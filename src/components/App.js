import React, { useState, useEffect } from 'react';
import { Button, Container, Wrapper, Joke, Content } from './AppLook';
import '../index.css';
import loader from '../images/loader.svg';

function App() {
  const [joke, setJokes] = useState('');
  const [fetching, setFetching] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    };
    setLoading(true);
    fetch('https://icanhazdadjoke.com', config)
      .then((res) => res.json())
      .then((data) => {
        setJokes(data.joke);
        setLoading(false);
      });
  }, [fetching]);

  return (
    <Wrapper>
      <Container>
        <h1>Dad Joke</h1>
        <Content>
          {loading ? <img src={loader} alt='spinner' /> : <Joke>{joke}</Joke>}
        </Content>
        <Button onClick={setFetching}>New Joke</Button>
      </Container>
    </Wrapper>
  );
}

export default App;
