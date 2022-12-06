import image from '../../assets/bag-fill.svg'

import "../CartWidget/CartWidget.css"

const CartWidget = () => {
    return (
        <div className='cart-widget'>
            <img src={image} alt="carrito" />
        </div>
    )
}

export default CartWidget