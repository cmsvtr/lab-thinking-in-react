import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import products from './data.json'
import { useState } from 'react';
import ProductsPage from './components/ProductsPage';

function App() {
  const [allItems, setAllItems] = useState(products) 
  
  return (
    <div className="App">

      <ProductsPage allItems={allItems} setAllItems={setAllItems}/>

    </div>
  );
}

export default App;
