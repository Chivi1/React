import { useEffect, useState } from 'react'
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
                    
                    { products.map( obj =>  <div key={obj.id} className='card w-50 mt-2'>
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
                                            </div> )  }     
                    
                </div>
    )
}

export default ItemListContainer