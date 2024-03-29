import React from 'react';
import styled from 'styled-components';
import Button from '@xln/shared/es/Button';

const Container = styled.div`
  width: calc(100% - 2em);
  max-width: 48em;
  margin-left: auto;
  margin-right: auto;
`;

function App() {
  return (
    <Container>
      <h1>React App</h1>
      <Button>Shared Button</Button>
    </Container>
  );
}

export default App;
