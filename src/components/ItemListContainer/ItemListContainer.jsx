import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'

import "./ItemListContainer.css"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
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
                
            }else{
                getDocs(catalogo)
                .then((resp) => setProducts( resp.docs.map(doc => ( { id: doc.id, ...doc.data() } ) ) ))
                .catch(err => console.log(err))
                .finally(()=>setLoading(false)) 
            }       
    }, [categoriaId])
    
    return (
        loading 
            ? 
                <h2>Cargando...</h2>            
            :
                <div>
                    <div className='titulo'>
                        <h1>{categoriaId ? categoriaId: "Tienda"} </h1> 
                    </div>
                    <div className='tienda'>
                    <ItemList products={products} />
                    </div>
                </div>
                    )}
export default ItemListContainer