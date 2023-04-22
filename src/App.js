
import './App.css';
import { Profiler, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import { Product } from './Product';



function App() {
  const data = [
    {
      
      productName: "Fancy Product",
      price: 40.00,
     
    },
    {
      
      productName: "Special Item",
      price: 18,
    },
    {
      
      productName: "Sale Item",
      price: 25,
      
    },
    {
      productName: "Popular Item",
      price: 40,
      
    },
    {
      productName: "Sale Item",
      price: 25,

    },
    {
      productName: "Fancy Product",
      price: 120,

    },
    {
      productName: "Special Item",
      price: 18,
    },
    {
      productName: "Popular Item",
      price: 40,
    },
  ]

  const [count, setCount]=useState(0)
  return (
    <div className="App">

      <div className="cart-value">
      <Badge bg="success">Cart {count}</Badge>
      </div>

      <div className="card-container">
      {data.map((product,idx) => (
        <Product
          key={idx}
          prod={product}
          count={count}
          setCount={setCount}
        />
      ))}
    </div>
    </div>
  );
}

export default App;


