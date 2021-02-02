import './App.css';
import { render } from '@testing-library/react';

function App() {
  let patty = "yummy"
  let ingredients = [
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
  

    return(
      <div>
        <h1>Welcome to Burger Shake</h1>
        <h2>Today's order are fresh from the grill!!</h2>
        <p>{ingredients.map((ingredient)=>{
          return 
        })}</p>
      </div>
    )

}

export default App;
