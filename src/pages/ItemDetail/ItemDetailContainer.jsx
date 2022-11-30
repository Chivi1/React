import { collection, doc, getDoc, getFirestore, query, where } from "firebase/firestore";
import { useEffect, useState, useContext } from "react";
import { useParams, Link  } from "react-router-dom";

import ItemDetail from "../../components/ItemDetail/ItemDetail";

import { gFetch } from '../../utils/gFetch'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const Firestore = getFirestore()
    const catalogo = collection (Firestore, 'productos')
    let filtro = query(catalogo, where('categoria', '==', id))
      getDoc(filtro)
      .then((doc) => setProduct(   { id: doc.id, ...doc.data() }  ))
        .catch(err => console.log(err))
          .finally(()=>setLoading(false))
    },[id])
console.log(product);
//useeffect anterior
  /*  useEffect(() => {
    gFetch()
      .then(resp => setProduct(resp.find(prod => prod.id === id)))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }
    , [id]); */
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