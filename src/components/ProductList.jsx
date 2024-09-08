import {React,useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addToCart,removeFromProductList,removeFromCart,addProductList  } from '../store/actions';
import SnackbarNotification from './SnackbarNotification';
import axiosInstance from '../Config/axiosInstance';
import SearchBox from './SearchBox';
import BlockComponent from './BlockComponent';
import TableRowComp from './TableRowComp';

const ProductList = () => {
    const products = useSelector(state => state.products.products); // fetching product list from redux store 'product' key
    const cart = useSelector(state => state.cart.cart); // fetching cart list from redux store 'cart' key
    const [loading, setLoadingFlag] = useState(false); // when product are fetching from api load flag will track data loading status
    const [filterProduct, setFilterProduct] = useState({}); // product list filter flad will update on product search event
    const [invalidSearch, setInvalidSearch] = useState(); // if no search result found flag will update
    const dispatch = useDispatch();
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    // when product list updated then set product list dummy data received from server to redux store
    useEffect(() => {
        // if api made request for product and redux store has store product data then fetch product list from redux store else send api request
        if(products.length <= 0){
            setLoadingFlag(true); // data is loading from API
            productList();
        }else{
            setFilterProduct(products); // filter product list flag to update product list
        }
    },[]);

    // fetching Product list from dummy Api and setting in redux store
    const productList = async function () {
        const productListResp = await axiosInstance.get('products?limit=10&skip=10&select=title,price');  
        const products = productListResp.data;
        setLoadingFlag(false); // data is loading from API
        setFilterProduct(products.products); // filter product list flag to update product list
        dispatch(addProductList(products.products)); // after fetching product list from apu store in redux store object
    }

    // adding product in cart on 'add to cart' update redux store object
    const handleAddItem = (product) => {
        dispatch(addToCart(product));
        setSnackbarOpen(true);
    };

    // removing product from cart on 'remove' update redux store object
    const handleRemoveItem = (id) => {
        dispatch(removeFromProductList(id)); // remove product from product list
        dispatch(removeFromCart(id)); // remove product from cart list
    };

    // closing 'item added to cart' pop-up box notification
    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    // on product list 'search' event
    const handleSearch = (filterProducts) => {
        if(filterProducts == 'emptySearch'){
            setInvalidSearch('');
            setFilterProduct(products);
        }else{
            if(filterProducts.length<=0){
                setFilterProduct([]);
                setInvalidSearch("No data Found!!");
            }else{
                setInvalidSearch('');
                setFilterProduct(filterProducts);
            }
        }
    };

    if(loading) return "Loading Data...";

    return (
        <div className="container mx-auto p-4">

            <BlockComponent products={products} cart={cart}/>

            <div className="overflow-x-auto">
            <h1 className="text-2xl font-bold mb-4">Product List</h1>

                {/* search box panel */}
                <div className="bg-gray-100 flex items-left justify-left">
                    <SearchBox onSearch={handleSearch} productlist = {filterProduct}/>
                </div>


                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 bg-gray-200 text-left text-sm font-medium text-gray-600">ID</th>
                            <th className="py-2 px-4 bg-gray-200 text-left text-sm font-medium text-gray-600">Product Title</th>
                            <th className="py-2 px-4 bg-gray-200 text-left text-sm font-medium text-gray-600">Price</th>
                            <th className="py-2 px-4 bg-gray-200 text-left text-sm font-medium text-gray-600">Add To Cart</th>
                            <th className="py-2 px-4 bg-gray-200 text-left text-sm font-medium text-gray-600">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invalidSearch &&  <h1 className="text-1xl font-bold mb-4 py-4 px-4">{invalidSearch}</h1>}

                        {filterProduct.length >0 && filterProduct.map(product => (
                            <TableRowComp key={product.id} product={product} handleAddItem = {handleAddItem} handleRemoveItem={handleRemoveItem}/>
                        ))}
                    </tbody>
                    <SnackbarNotification open={snackbarOpen} onClose={handleSnackbarClose} message="Item added to cart!"/>
                </table>
            </div>
        </div>
    );
};

export default ProductList;
