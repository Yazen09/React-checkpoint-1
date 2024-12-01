import React from 'react';
import './App.css';
import { Card, Button } from 'react-bootstrap';
import Name from './Components/Name';
import Price from './Components/Price';
import Description from './Components/Description';
import Image from './Components/Image';


function App() {
  const firstName = "Yazen";
  
  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Card style={{ width: '18rem', margin: 'auto' }}>
        <Image />
        <Card.Body>
          <Card.Title><Name /></Card.Title>
          <Card.Text>
            <Price />
            <Description />
          </Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>

      {firstName ? (
        <div>
          <h3>Hello, {firstName}!</h3>
          <img src="https://example.com/your-image.jpg" alt="Welcome" style={{ width: '150px', borderRadius: '50%' }} />
        </div>
      ) : (
        <h3>Hello, there!</h3>
      )}
    </div>
  );
}

export default App;
