// onClick for Edit icon triggers render of edit form
import React from 'react';

const Item = props => {
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.name} product`} />


			<div>
				<h1>{props.name}</h1>
				<p>$ {props.price}</p>
				<button>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
