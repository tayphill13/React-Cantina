import React from 'react';
import Header from "./Header";
import KegControl from "./KegControl";
import Container from 'react-bootstrap/Container';

function App() {
  const bodyStyle = {
    backgroundColor: 'black',
    color: 'neon green',
    minHeight: '100vh'
  }
  return (
    <Container fluid style={bodyStyle}>
      <Header />
      <KegControl />
    </Container>
  );
}

export default App;
