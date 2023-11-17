import React, { useContext } from 'react';
import { useApi } from '../contexts/ContextProducts';
 
const Filters = () => {
const {setCategory, category} = useApi();

    const handleClick = (event) =>{
        const inputValue = event.target.value;
        setCategory(inputValue)
        console.log(category);
        console.log("CLické")
    }
    return (
        <div>
            <button className='button' value="men's clothing" onClick={handleClick}>Vêtements Hommes</button>
            <button className='button' value="jewelry">Bijoux</button>
            <button className='button' value="electronics">Électroniques</button>
            <button className='button' value="women's clothing">Vêtements Femmes</button>
        </div>
    );
};

export default Filters;