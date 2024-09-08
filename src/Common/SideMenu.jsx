import { Link } from "react-router-dom"
import classNames from "classnames"
import { useLocation } from "react-router-dom"

const SideMenu = () =>{
    const urlPath = useLocation();

    return (
        <nav>
            <ul>
                <Link to="/dashboard"><li className={classNames(urlPath.pathname == '/dashboard' ? "bg-green-500" : "" ,'py-4 px-4 mb-4 hover:text-gray-200')}>
                Products</li></Link>

                <Link to="/addProduct"><li className={classNames(urlPath.pathname == '/addProduct' ? "bg-green-500" : "" ,'mb-4 py-4 px-4 hover:text-gray-200')}>Add Product</li></Link>

                <Link to="/cart"><li className={classNames(urlPath.pathname == '/cart' ? "bg-green-500" : "" ,'mb-4 py-4 px-4 hover:text-gray-200')}>Cart</li></Link>

                <Link to="/login"><li className={classNames('mb-4 py-2 px-4 hover:text-gray-200 rounded')}>Login</li></Link>
            </ul>
        </nav>
    )
}

export default SideMenu