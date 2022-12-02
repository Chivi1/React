import { useState } from "react"
import '../../components/Contador/ItemCount.css'

const ItemCount = ({initial=1, onAdd}) => {
    const [count, setCount] = useState(initial);
    const restar = () => {
        setCount (count - 1);
    }
    const sumar = () => {
        setCount  (count + 1);
    }
    const addCantidad = () => {
        onAdd(count)
    }

return (
    <div className='contador'>
        <button disabled = {count <= 1} onClick={restar}>-</button>
        <span>{count}</span>
        <button onClick={sumar}>+</button> 
            <div className="add">
                <button onClick={addCantidad}>Agregar al carrito</button>
            </div>
    </div>
)}

export default ItemCount