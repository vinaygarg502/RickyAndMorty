import React from 'react';
import './Cards.scss';
import CardItem from './partials/cardItem';

const Cards = (props) => {
    const {items, isLoaded} = props;
    return (
        <div className="cards">
            {
                isLoaded && items.map((item) => <CardItem item = {item}/>)
            }
        </div>
    )
}

export default Cards;
