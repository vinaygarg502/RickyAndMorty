import React from 'react';
import './Search.scss';

const SearchForm = (props) => {

    const {order, handleInputChange, handleOrderChange} = props;
    
    return (
        <form id ="searchForm">
            <div className="search-form-container">
                <label>Search By Name:</label>
                <input
                    placeholder="Search for..."
                    type="text"
                    name ="searchText"
                    defaultValue=''
                />
                <input type="submit" value ="Search" onClick = {handleInputChange}/>
            </div>
            <div className="order-container">
                <label>
                    <select value={order} onChange={handleOrderChange}>
                    <option value =''>Sort By ID</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                    </select>
                </label>
            </div>
        </form>
    )
}

export default SearchForm;
