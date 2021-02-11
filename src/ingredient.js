export default function Ingredient(props) {
        return(
            <div>
                <p style={{backgroundColor: props.color}} key={props.key}>
                    {/* render individual ingredient */}
                    {props.ingredient}
                </p>
            </div>
        )
}
