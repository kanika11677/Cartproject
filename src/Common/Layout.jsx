import {React, useEffect} from 'react';
import {Outlet,useNavigate} from 'react-router-dom';
import Header from './Header';
import SideMenu from './SideMenu';

const Layout = () => {

    const isLoggedUser = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();

    // if user is logged in and token is not expired then navigate user to dashboard route else navigate to login page
    useEffect(()=>{
        if(isLoggedUser?.jwtToken){
            navigate('/dashboard');
        }else{
            navigate('/login');
        }
    },[]);

    // logout user delte localstorage jwt toke of user and redirect to login page
    const logoutUser = () =>{
        localStorage.removeItem("user"); // deleting looged in user token
        navigate('/login');
    }

    return (
        <div>
            <Header isLoggedUser = {isLoggedUser} logoutUser={logoutUser}/>
            
            <div className="mx-auto">
                <div className="flex h-screen">
                    {/* Left Panel - Navigation Menu */}
                    <div className="w-1/4 bg-gray-800 text-white">
                        <SideMenu/>
                    </div>

                    {/* Right Panel - Content Area */}
                    <div className="w-3/4 p-8 bg-gray-100">
                        <Outlet/>
                    </div>   
                </div>
            </div>
        </div>
    );
};

export default Layout;
