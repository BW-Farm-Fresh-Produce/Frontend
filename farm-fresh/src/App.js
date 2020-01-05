import React, {useState} from 'react';
 //import Consumer from './components/Consumer';
import NavBar from './components/navigation/NavBar';
import { Route } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import data from './data';
import Products from './components/Products';
//Context
import CartContext from './contexts/CartContext';
import ProductContext from './contexts/ProductContext';



function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);


	const addItem = item => {
		setCart([...cart, item]);
	};
    
    return (
      < ProductContext.Provider value={{ products, addItem }}>
		 < CartContext.Provider value={cart}>
      <div className="App">
      <NavBar/> 
      <Route exact path="/" component={Products} />
			<Route path="/cart" component={ShoppingCart} />
      {/* <PrivateRoute to="/inventory"/> */}
      </div>
      </CartContext.Provider>
			</ProductContext.Provider>
);
  }


export default App;


