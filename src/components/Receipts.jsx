import React, { useState } from 'react';
import Ingredients from './Ingredients';

const Receipts = () => {
    const [meal, setMeal] = useState('')

    return (
        <div>
            

            <form>
            <p className='text-meal'>Choose the meal</p>

  <div className='radio'>
    <input type="radio" className='meal' id="Soup"
     name="meal" onClick={(e=>setMeal(e.target.id))}/>
    <label htmlFor="Soup"> Soup</label>

    <input type="radio" className='meal' id="Garnish"
     name="meal" onClick={(e=>setMeal(e.target.id))} />
    <label htmlFor="Garnish"> Garnish</label>

    <input type="radio" className='meal' id="Cake"
     name="meal" onClick={(e=>setMeal(e.target.id))} />
    <label htmlFor="Cake"> Cake</label>
  </div>
  
</form>
        <Ingredients meal = {meal} />
        </div>
    );
};

export default Receipts;