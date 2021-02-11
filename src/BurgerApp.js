import React, { useState } from 'react';
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'





export default function BurgerApp() {
  
  const ingredients = [
    {name: 'Kaiser Bun', color: 'saddlebrown'},
    {name: 'Sesame Bun', color: 'sandybrown'},
    {name: 'Gluten Free Bun', color: 'peru'},
    {name: 'Lettuce Wrap', color: 'olivedrab'},
    {name: 'Beef Patty', color: '#3F250B'},
    {name: 'Soy Patty', color: '#3F250B'},
    {name: 'Black Bean Patty', color: '#3F250B'},
    {name: 'Chicken Patty', color: 'burlywood'},
    {name: 'Lettuce', color: 'lawngreen'},
    {name: 'Tomato', color: 'tomato'},
    {name: 'Bacon', color: 'maroon'},
    {name: 'Onion', color: 'lightyellow'}
  ]
    const [burgerIngredients, setBurgerIngredients] = useState([])


    const addToBurger = (e) =>{
      
      let newIngredient = {name: e.target.innerText, color: e.target.style.backgroundColor}
      setBurgerIngredients([...burgerIngredients, newIngredient])
      // let currentBurger = useState(burgerIngredients)
      // // create an object with name and color props that collects vals from 
      // //push object tro currentBurger
      //     currentBurger.push(newIngredient)
      
      // this.setState({
      //   burgerIngredients: currentBurger
      // })
    }

    const clearBurger = (e) =>{
      setBurgerIngredients([])
    }
      return(
        <div>
          <h1>Welcome to Burger Shake</h1>
          <h2>Today's order are fresh from the grill!!</h2>
            <ul>
              <li>ingredient list</li>
            </ul>
            <div style={{display: "flex"}}>
          <IngredientList ingredients={ingredients} addToBurger={addToBurger} />
          <BurgerPane burgerIngredients={burgerIngredients} clearBurger={clearBurger}/>
            </div>
        </div>
      )
  }


