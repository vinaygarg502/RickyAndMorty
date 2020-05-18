import React from 'react';
import './Filters.scss';

const Filter = (props) => {
    const {getFilteredCharacters} = props;

    const Categories = {
        'Species':['human', 'mythology', 'alien'],
        'Gender':['male', 'female'],
        'Origin':['unknown','earth','abadango']
    };
    const categoryArray = Object.keys(Categories);

    return (
        <div className="filter-container">
        <h2>Filters</h2>
        {
            categoryArray.map((category) => (
                <div className="form-group">
                    <h3>{category}</h3>
                    {
                        (Categories[category]).map((item)=>(
                            <div>
                                <label>
                                <input
                                    name={category+"-"+item}
                                    type="checkbox"
                                    onChange = {getFilteredCharacters} />
                                    {item}
                                </label>
                            </div>
                        ))
                    }           
                </div>
            ))
        }
        </div>
    )
}

export default Filter;