import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";

import ItemDetail from "../../components/ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const { id } = useParams();
  
  useEffect(() => {
    const Firestore = getFirestore()
    const items = collection (Firestore, 'productos')
    let filtro = doc(items, id)
      getDoc(filtro)
      .then((doc) => setProduct(   { id: doc.id, ...doc.data() }  ))
        .catch(err => console.log(err))
          .finally(()=>setLoading(false))
    },[id])
  return (
  <div>
    {loading
      ?
      <h2>Cargando...</h2>
      :
      <ItemDetail product={product} />
          }
        
  </div>
  )
}

export default ItemDetailContainer