import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { gFetch } from '../../utils/gFetch'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        gFetch()
        .then(resp =>  setProducts(resp))    
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))         
    }, [])

    return (
        loading 
            ? 
                <h2>Cargando...</h2>            
            :
                <div>
                    <h1>ItemListContainer</h1>  
                    
                    { products.map( obj =>  
                                            <div key={obj.id} className='card w-50 mt-2'>
                                                <Link to= {`/detail/${obj.id}`}>
                                                <div className='card-header'>
                                                    {obj.name}
                                                </div>
                                                <div className='card-body'>
                                                    <center>
                                                        <img src={obj.foto} className="w-50" />
                                                    </center>
                                                </div>
                                                <div className='card-footer'>
                                                    precio : {obj.price}
                                                </div>
                                                </Link> 
                                            </div>)}
                </div>
                    )}
export default ItemListContainer