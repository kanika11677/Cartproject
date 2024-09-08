const TableRowComp = ({product,handleAddItem,handleRemoveItem}) =>{
    return (
        <tr key={product.id} className="border-b">
            <td className="py-2 px-4 text-sm">{product.id}</td>
            <td className="py-2 px-4 text-sm">{product.title}</td>
            <td className="py-2 px-4 text-sm">${product.price}</td>
            <td className="py-2 px-4 text-sm">
                <button onClick={()=>{handleAddItem(product)}}  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Add to Cart
            </button></td>
            <td className="py-2 px-4 text-sm">
                <button
                onClick={() => handleRemoveItem(product.id)}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600" >
                Remove
                </button>
            </td>
        </tr>
    )
}

export default TableRowComp