import Ingredient from './Ingredient'


export default function BurgerStack (props) {
        // call .map on our passed props array
        let burgerIngredients = props.burgerIngredients.reverse().map((item, index) => (
            <li>
                <Ingredient ingredient={item.name} color={item.color} key={`keyB${index}`} />
            </li>
        ))

        return (
            <ul>
                {burgerIngredients}
            </ul>
        )
}
