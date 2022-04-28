import React from 'react';

const Ingredients = ({meal}) => {

    switch(meal) {
        case 'Soup':
    return (
        <div className='list-ingr'>
                <ol>
                    <li>1 tbsp vegetable oil</li>
                    <li>1 onion, chopped</li>
                    <li>1 tsp ground coriander</li>
                    <li>1 potato, chopped</li>
                    <li>450g carrots, peeled and chopped</li>
                    <li>1.2l vegetable or chicken stock</li>
                    <li>handful coriander (about ½ a supermarket packet)</li>
                </ol>
                    
                
            
        </div>
    )
    break;
    case 'Garnish':
    return (
        <div className='list-ingr'>
                    <ol>
                    <li>2 large carrots, julienned</li>
                    <li>2 medium turnips, julienned</li>
                    <li>1 parsnip, juliennedr</li>
                    <li>Salt and pepper</li>
                </ol>
            
        </div>
    )
    break;
    case 'Cake':
    return (
        <div className='list-ingr'>
                    <ol>
                    <li>Soft, light crumb from cake flourl</li>
                    <li>Fluffy from extra egg whites</li>
                    <li>1 tsp ground coriander</li>
                    <li>Buttery and cakey from creamed butter</li>
                    <li>Stick-to-your-fork moist from eggs & buttermilk</li>
                    <li>Extra flavor from pure vanilla extract</li>
                    
                </ol>
            
        </div>
    )
    break;

default:
    break;
};
}

export default Ingredients;