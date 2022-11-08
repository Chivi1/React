let obj = [
    {id: '1', name: 'PRODUCTO 1', categoria: 'gorras',stock: '100',price: '1500',  foto:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
    {id: '2', name: 'PRODUCTO 2', categoria: 'gorras',stock: '100',price: '1500',  foto:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
    {id: '3', name: 'PRODUCTO 3', categoria: 'gorras',stock: '100',price: '1500',  foto:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
    {id: '4', name: 'PRODUCTO 4', categoria: 'gorras',stock: '100',price: '1500',  foto:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
    {id: '5', name: 'PRODUCTO 5', categoria: 'gorras',stock: '100',price: '1500',  foto:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'}
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
