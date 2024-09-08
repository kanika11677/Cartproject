import React, { useState } from 'react';

const SearchBox = ({ onSearch,productlist }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        if(e.target.value.length == 0){
            onSearch("emptySearch");
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (onSearch) {
            // filter product list as per search key word and return filtered data
            const filteredProductList = productlist.filter((pvalue)=>{
                if(pvalue.title.includes(query)) return true;
            });
            // passing filtered product list data to parent component 
            onSearch(filteredProductList);
        }
    };

    return (
        <form onSubmit={handleSearch} className="w-full max-w-sm mx-right mb-10">
            <div className="flex items-center border-b border-teal-500 py-2">
                <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Search product..."
                    value={query}
                    required
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className="flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white py-1 px-2 rounded"
                >
                    Search
                </button>
            </div>
        </form>
    );
};

export default SearchBox;
