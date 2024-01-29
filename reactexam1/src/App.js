import React from 'react';
// import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import Counter from './Counter';
import Container from './Container';

function App() {
  const number = 5;

  const counterProps = {
    initialValue: 5,
  }

  return (
    <Container>
      <div>
        <MyHeader />
        <Counter {...counterProps}/>
      </div>
    </Container>
  );
}

export default App;
