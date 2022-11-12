import { useEffect, useState} from "react";
import { useParams } from "react-router-dom"
import { gFetch } from '../../utils/gFetch'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const {id} = useParams();
  console.log(product);
  useEffect (()=>{
    gFetch()
        .then(resp =>  setProduct(resp.find(prod => prod.id === id)))    
        .catch(err => console.log(err))
        .finally(()=>setLoading(false)) 
        }       
    , [id])
    console.log(product);
  return (
    loading
    ?
    <h2>Cargando...</h2>            
    :
    <div>
      
                                            <div key={product.id} className='card w-50 mt-2'>
                                                <div className='card-header'>
                                                    {product.name}
                                                </div>
                                                <div className='card-body'>
                                                    <center>
                                                        <img src={product.foto} className="w-50" />
                                                    </center>
                                                </div>
                                                <div className='card-footer'>
                                                    precio : {product.price}
                                                </div>
                                            </div>
    </div>
  )
}

export default ItemDetailContainer