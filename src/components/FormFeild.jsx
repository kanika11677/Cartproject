const FormFeild = ({dataVal,name, handleChange}) =>{
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                {name.toUpperCase()}
            </label>
            <input
                type="text"
                name={name}
                value={dataVal}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
                placeholder= {`Product ${name}`}
                required
            />
        </div>
    )
}

export default FormFeild