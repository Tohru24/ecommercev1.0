import './App.css';
import Product from './components/product.js';
import Navbar from './components/navbar.js';
import FloatingActionButtons from './components/floating.js';



function App() {
  return (
    <div className="App">
      <Navbar/> /
      <Product/>
      <FloatingActionButtons/>
    </div>
  );
}

export default App;
