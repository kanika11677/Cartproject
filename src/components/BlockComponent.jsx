const BlockComponent = ({products,cart}) =>{
    return (
        <div className="grid grid-cols-2 gap-4  mb-10">
            <div className="bg-blue-500 p-8 rounded-lg shadow-md">
                <p className="text-white">Product Count: {products.length}</p>
            </div>
            <div className="bg-green-500 p-8 rounded-lg shadow-md">
                <p className="text-white">Cart Item: {cart.length}</p>
            </div>
        </div>
    )
}

export default BlockComponent