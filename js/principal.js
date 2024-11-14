/*Sean los productos (categoría, nombre y precio): se pide una función que retorne los
nombres de los productos de una categoría dada.
Especificaciones de la función:
Función: productosDeCategoria
Parámetros: Un array de objetos de productos y una categoría
Retorno: Un array de nombres de productos de la categoría
Restricciones: el array retornado será un array de strings.*/

let productosDeCategoria = (array, categoria) => {
    let nombres =[];
    for(let i=0; i<array.length; i++){
        if(array[i].categoría==categoria){
            nombres.push(array[i].nombre);
        }
    }
    return nombres;
};

let array = [ 
    {categoría: "Tecnología", nombre: "Celular", precio: 1000},
    {categoría: "Deporte", nombre: "Juguete", precio: 500},
    {categoría: "Libros", nombre: "Calculo", precio: 300},
    {categoría: "Deporte", nombre: "Pelota", precio: 400},
    {categoría: "Tecnología", nombre: "Televisor", precio: 2000},
];

let salida = document.getElementById("salida");

salida.innerHTML = JSON.stringify(productosDeCategoria(array, "Tecnología"));
salida.innerHTML += "<br>" + JSON.stringify(productosDeCategoria(array, "Deporte"));
salida.innerHTML += "<br>" + JSON.stringify(productosDeCategoria(array, "Libros"));