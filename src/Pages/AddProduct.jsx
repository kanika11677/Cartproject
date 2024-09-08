import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addProduct } from '../store/actions';
import FormFeild from '../components/FormFeild';

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
        setFormData({
            title: '',
            price: '',
        });
        setTimeout(()=>{setaddDataFlag(false)}, 5000); //on added product hide 'success' message after 5 sec.
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                {addDataFlag && (
                    <div className='bg-green-500 text-white font-bold py-2 px-4 rounded-lg mb-10'>Data Added Succesfully!!</div>
                )}
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Add Product</h2>

                <FormFeild dataVal = {formData.title} handleChange = {handleChange} name = "title"/>

                <FormFeild dataVal = {formData.price} handleChange = {handleChange} name = "price"/>

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
