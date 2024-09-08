import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Common/Layout';
import AddProduct from './Pages/AddProduct';
import Cart from './components/Cart';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="addProduct" element={<AddProduct />} />
                </Route>
                <Route path="login" element = {<Login/>}/>
            </Routes>
        </Router>
    );
}

export default App;
