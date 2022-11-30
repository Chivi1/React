import { memo } from "react"
import { Link } from "react-router-dom"
import "./item.css"

const Item = memo( ({ product }) => {
return (
    <div className='card'>
        <Link to={`/detail/${product.id}`}>
            <div className='card-header'>
                {product.name}
            </div>
            <div className='card-body'>
                    <img src={product.foto} className="foto" />
            </div>
            <div className='card-footer'>
                <p>Categoria: {product.categoria}</p>
                <p>Precio : {product.price}</p>
            </div>
        </Link>
    </div> 
    )
}) 



export default Item
