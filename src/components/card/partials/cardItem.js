import React from 'react';
const CardItem = (props) => {
    const {item} = props;
    return (
        <div className="card">
            <div className="card-intro">
                <img src={item.image} alt={item.name}/>
                <div className="card-info">
                    <h4>{item.name}</h4>
                    <p>id: {item.id} - created 2 years ago</p>
                </div>
            </div>
            <div className="card-details">
                <ul>
                    <li>
                    <p className="col-left">Status</p>
                    <p className="col-right">{item.status}</p>
                    </li>
                    <li>
                    <p className="col-left">Species</p>
                    <p className="col-right">{item.species}</p>
                    </li>
                    <li>
                    <p className="col-left">Gender</p>
                    <p className="col-right">{item.gender}</p>
                    </li>
                    <li>
                    <p className="col-left">Origin</p>
                    <p className="col-right">{item.origin.name}</p>
                    </li>
                    <li>
                    <p className="col-left">Last Location</p>
                    <p className="col-right">{item.location.name}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CardItem;
