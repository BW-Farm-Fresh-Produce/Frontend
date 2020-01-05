import React, {useContext} from 'react';
import styled from "styled-components";

// Components
import Product from './Product';
import ProductContext from '../contexts/ProductContext';

const CardsContainer = styled.div`
    display: grid;
    width: calc(100% - 375px);
    max-width: 900px;
    grid-template-columns: repeat(auto-fill, 250px);
    grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 50px;
    text-align: center;
    margin: 0 auto;
    margin-top:150px;
`;

const Products = () => {
const { products, addItem } = useContext(ProductContext);
   return (
	 <div>
	   <CardsContainer>
		{products.length !== 0 &&
		products.map(product => (
	<Product
		addItem={addItem}
		key={product.product_id}
		name={product.name}
		available_quantity={product.available_quantity}
		price={product.price}
		farm={product.farm}
		farm_location_street={product.farm_location_street}
		farm_location_city={product.farm_location_city}
	/>
			))}
		</CardsContainer>
	</div>
	);
};

export default Products;