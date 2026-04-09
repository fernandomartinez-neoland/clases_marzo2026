//  las clases se declaran parecido a las funciones, la diferencia es que estas no llevan parentesis, pero si que pueden recibir parametros (que veremos como funciona eso mas adelante)
export class clase{

    // las variables al igual que en una funcion solo existen dentro de la clase, no pueden exsistir fuera de esta

    // las variables de una clase se les puede considerar como propiedades (asi como las de un json)
    // las variables de una clase se declaran sin el uso de la palabra "const", "let" ni "var"
    nombre="fernando";
    saludar(){
        // los metodos funcionan igual que las funciones, estos reciben parametros y aqui se pueden declarar variables igual que en una funcion (const, let, var) pero se sigue cumplendo la regla de que lo que se hace dentro del metodo existe solo en el metodo

        // si quiero usar un metodo o propiedad de la clase debo usar la palabra reservada "this" que hace referencia a la clase, seguido deel nombre de la propiedad (this.propiedad)
        console.log(`hola ${this.nombre}`)
    }
}