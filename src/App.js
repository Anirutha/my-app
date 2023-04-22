
import './App.css';
import { Profiler, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import Figure from 'react-bootstrap/Figure';
import { Product } from './Product';
import ProductData from './ProductData'; 


function App() {
 
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


