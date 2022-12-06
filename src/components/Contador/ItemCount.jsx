import { useState } from "react"

import '../../components/Contador/ItemCount.css'

const ItemCount = ({initial=1, onAdd}) => {
    const [count, setCount] = useState(initial);
    const reduceCount = () => {
        setCount (count - 1);
    }
    const addCount = () => {
        setCount  (count + 1);
    }
    const addCantidad = () => {
        onAdd(count)
    }

return (
    <div className='contador'>
        <button disabled = {count <= 1} onClick={reduceCount}>-</button>
        <span>{count}</span>
        <button onClick={addCount}>+</button> 
            <div className="add">
                <button onClick={addCantidad}>Agregar al carrito</button>
            </div>
    </div>
)}

export default ItemCount