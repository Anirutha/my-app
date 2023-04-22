import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// create a new component
export function Product({ prod, count, setCount }) {
  const [show, setShow] = useState(true);

  function addtoCart() {
    setCount(count + 1);
    setShow(!show);
  }

  function removetoCart() {
    setCount(count - 1);
    setShow(!show);
  }


  return (
    <div>
      <Card className="text-center" style={{ width: '18rem' }}>
        <Card.Header>
          <img className='card-img-top' src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg' alt='...'></img>
        </Card.Header>
        <Card.Body>
          <Card.Title>{prod.productName}</Card.Title>
          <Card.Text>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </Card.Text>
          <Card.Text><s>$20.00</s>{prod.price}.00-80.00</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          {show ?
            <Button variant="primary"
              onClick={addtoCart}>
              Add to Cart</Button>
            :
            <Button variant="danger"
              onClick={removetoCart}>
              Remove Cart</Button>}
        </Card.Footer>
      </Card>
    </div>
  );
}
