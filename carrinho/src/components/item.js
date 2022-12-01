
export default function Item(props){
    return(
            <div className="Item">
                <p>{props.name}</p>
                <p>{props.price}</p>
            </div>
    )
}