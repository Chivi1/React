import { useEffect, useState} from "react";
import { useParams } from "react-router-dom"
import { gFetch } from '../../utils/gFetch'

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const {id} = useParams();
  console.log();
  useEffect (()=>{
    gFetch()
        .then(resp =>  setProducts(resp.find(prod => prod.id)))    
        .catch(err => console.log(err))
        .finally(()=>setLoading(false)) 
        }       
    , [])
  return (
    loading
    ?
    <h2>Cargando...</h2>            
    :
    <div>
      { products.map( obj =>  
                                            <div key={obj.id} className='card w-50 mt-2'>
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
                                            </div>)}
    </div>
  )
}

export default ItemDetailContainer