import { collection, doc, getDoc, getFirestore, query, where } from "firebase/firestore";
import { useEffect, useState, useContext } from "react";
import { useParams, Link  } from "react-router-dom";

import ItemDetail from "../../components/ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const { id } = useParams();
  
  useEffect(() => {
    const Firestore = getFirestore()
    const catalogo = collection (Firestore, 'productos')
    let filtro = doc(catalogo, id)
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