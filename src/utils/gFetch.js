let obj = [
    {id: "1" , name: 'GORRA ROSA', categoria: 'gorras', stock: '100',price: '1500',  foto:'https://via.placeholder.com/500/0000FF/808080/?text=GorraRosa'},
    {id: "2" , name: 'REMERA BLANCA', categoria: 'remeras', stock: '100',price: '1500',  foto:'https://via.placeholder.com/500/0000FF/808080/?text=Remera.Blanca'},
    {id: "3" , name: 'LLAVERO', categoria: 'accesorios', stock: '100',price: '1500',  foto:'https://via.placeholder.com/500/0000FF/808080/?text=LLAVERO'},
    {id: "4" , name: 'GORRA NEGRA', categoria: 'gorras', stock: '100',price: '1500',  foto:'https://via.placeholder.com/500/0000FF/808080/?text=GorraNegra'},
    {id: "5" , name: 'REMERA NEGRA', categoria: 'remeras', stock: '100',price: '1500',  foto:'https://via.placeholder.com/500/0000FF/808080/?text=RemeraNegra'},
    {id: "6" , name: 'GATITO', categoria: 'remeras', stock: '100',price: '1500',  foto:'http://placekitten.com/500/500'}
]

export const gFetch = (id) => {
    // comporobaciones
    return new Promise( ( resuleto, rechazada ) => {
        // ACCIONES
        setTimeout(()=>{
            resuleto(obj)
        }, 2000)
        // rechazada('promesa rechazada')
    })
    // .catch()
}
