import { useState, useEffect } from 'react';

const HomeScreen = () => {
  const [products, setProducts] = useState([
    { name: 'product1', price: 100.0 },
    { name: 'product2', price: 200.0 },
  ]);

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Hook Example</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeScreen;
