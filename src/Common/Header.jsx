import { Link } from "react-router-dom";
import classNames from 'classnames';

const Header = ({isLoggedUser,logoutUser}) =>{

    return (
    <header className="bg-blue-600 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold"><Link to="/dashboard" className="hover:text-gray-200">Alpha</Link></h1>
            <div>
                <span className='shadow-md bg-blue-500 py-2 px-4 rounded'>Welcome: {isLoggedUser?.userdata}</span>
                <span className={classNames('py-2 px-4 bg-red-500 rounded shadow-md cursor-pointer')} onClick={logoutUser}>Logout</span>
            </div>
        </div>
    </header>
    )
}

export default Header