import React, { useContext, useEffect } from 'react';
import { useApi } from '../contexts/ContextProducts';
 
const Filters = () => {
const {setCategory, category, resetFilter, setResetFilter} = useApi();

        const handleFilter = (event) =>{
            const inputValue = event.target.value;
            setCategory([...category, inputValue]);
        }
        const handleReset = () => {
            setCategory(resetFilter);
        };
    
    useEffect(() => {
        console.log(category);
        console.log("CLické")
    }, [category])

    return (
        <div>
            <button onClick={handleReset} >X Réinitialiser.</button>
            <button value="men's clothing" onClick={handleFilter}>Vêtements Hommes</button>
            <button value="jewelry" onClick={handleFilter}>Bijoux</button>
            <button value="electronics" onClick={handleFilter}>Électroniques</button>
            <button value="women's clothing" onClick={handleFilter}>Vêtements Femmes</button>
        </div>
    );
};

export default Filters;