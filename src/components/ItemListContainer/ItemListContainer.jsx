import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'

import "./ItemListContainer.css"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {categoriaId} = useParams()
    
    useEffect(() => {
    const Firestore = getFirestore()
    const catalogo = collection (Firestore, 'productos')
    
    if (categoriaId) {
        let filter = query(catalogo, where('categoria', '==', categoriaId) )  
                getDocs(filter)
                .then((resp) => setProducts( resp.docs.map(doc => ( { id: doc.id, ...doc.data() } ) ) ))
                .catch(err => console.log(err))
                .finally(()=>setLoading(false)) 
                .then((doc) => setProduct(   { id: doc.id, ...doc.data() }  ))
                
            }else{
                getDocs(catalogo)
                .then((resp) => setProducts( resp.docs.map(doc => ( { id: doc.id, ...doc.data() } ) ) ))
                .catch(err => console.log(err))
                .finally(()=>setLoading(false)) 
                .then((doc) => setProduct(   { id: doc.id, ...doc.data() }  ))
            }       
    }, [categoriaId])
    
    
    return (
        loading 
            ? 
                <h2>Cargando...</h2>            
            :
                <div>
                    <h1>Tienda</h1>  
                    <div className='tienda'>
                    <ItemList products={products} />
                    </div>
                </div>
                    )}
export default ItemListContainer