import React from 'react';
import Consumer from './components/Consumer';
import Navigation from './components/navbar/Navigation';

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