import imagen from '../../assets/bag-fill.svg'

import "../CartWidget/CartWidget.css"

const CartWidget = () => {
    return (
        <div className='cart-widget'>
            <img src={imagen} alt="carrito" />
        </div>
    )
}

export default CartWidget