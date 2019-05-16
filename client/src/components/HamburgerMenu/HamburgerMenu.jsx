import React from 'react';
import { Link } from 'react-router-dom'
const HamburgerMenu = (props) => {
    const { locationList, materialList, isMenuClicked } = props;
    const showMenu = isMenuClicked === true ? 'sidebar open' : 'sidebar ';
    
    console.log(props.materialData)
    
    const getData = (e) => {
        props.getDataProp(e)
        props.handleItemClick(e)
    }



    return (
        <div className={showMenu}>
            <div  onClick={props.handleMenuOpen}> <span className="xMark"> x</span> </div>
            <div className="bar materials">
            <Link to='/add-location'>Add New Location</Link>
            <span className="materials-title"> MATERIALS </span>
            {materialList ? materialList.map((material, index) => {
                return <li key={index} data={JSON.stringify(material.locations)} onClick={getData}>{material.name}</li>
                }): <h3>No Data</h3>}
            </div>
            <div className="bar locations">
            <span className="locations-title"> LOCATIONS </span>
            {locationList ? locationList.map((location, index) => {
                return <li 
                            key={index} 
                            name={location.name}
                            postcode={location.postal_code}
                            url={location.url}
                            number={location.phone_number}
                            latitude={location.latitude} 
                            longitude={location.longitude}
                            id={location.id}
                            onClick={props.handleItemClick}>
                        {location.name}
                        </li>
            }) : <h3>No Data</h3>}
            </div>
        </div>
    );
};

export default HamburgerMenu;