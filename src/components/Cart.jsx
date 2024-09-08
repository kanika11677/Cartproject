import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store/actions';

const Cart = () => {
    const cart = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Cart</h1>
            {cart.length == 0 && 
            <>Empty Cart</>
            }
            <ul className="space-y-4">
                {cart.map(item => (
                    <li key={item.id} className="p-4 bg-white shadow rounded-lg flex justify-between items-center">
                        <div>
                            <h2 className="text-xl font-semibold">{item.title}</h2>
                            <p className="text-gray-600">{item.price}</p>
                        </div>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={() => dispatch(removeFromCart(item.id))}>
                        Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
