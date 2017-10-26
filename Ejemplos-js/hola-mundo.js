function imprimeNumeros(arreglo)
{
    for(var i = 0; i < arreglo.length; i++)
    {
        document.write(arreglo[i]);
        document.write('<br>');
    }
}

/**
 * Notacion literal de arreglos
 */
var arreglo1 = [3, 5, 7];
var arreglo2 = new Array(9, 11, 13);
imprimeNumeros(arreglo1);
imprimeNumeros(arreglo2);
document.write("Hola desde JS");
window.alert("Yo aqui dando lata");
console.log("Hola para la consola");

/*Notacion literal de objetos*/
var triangulo = {
    base: 4,
    altura: 5,
    area: function(){
        console.log("area = " + this.base*this.altura/2);
    }
};

triangulo.area();