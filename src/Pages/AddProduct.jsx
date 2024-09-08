import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addProduct } from '../store/actions';

const AddProduct = () => {
    const [formData, setFormData] = useState({
        title: '',
        price: '',
    });

    const [addDataFlag, setaddDataFlag] =  useState(false);
    const dispatch = useDispatch(); // dispatch ADD_PRODUCT action to reducer

    // updating form data state object based on updated input feilds data
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // on form submit product add to redux store object
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add unique ID to the product object
        const newProduct = {
            id: uuidv4(),
            ...formData,
        };
        dispatch(addProduct(newProduct));
        setaddDataFlag(true);
        setTimeout(()=>{setaddDataFlag(false)}, 5000); //on added product hide 'success' message after 5 sec.
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                {addDataFlag && "Data Added Succesfully!!"}
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Add Product</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Product Name"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Price
                    </label>
                    <input
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Price"
                        required
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
