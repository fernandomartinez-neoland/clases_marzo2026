import {clase} from './clases.js'
// le asignamos la clase a una variable usando la palabra "new" antes del nombre de la clase
// al asignarle "new <nombre de la clase>" se esta creando un objeto independiente a una variable
// cada que hagamos esta declaracion a una variable nueva, cada variable nueva representa un objeto independiente con las mismas caracteristicas, asi como cuando todos compran el mismo modelo de telefono, son objetos independientes que hacen lo mismo, pero lo que se haga en uno no afecta a los demas

const saludando= new clase();

// para acceder auna propiedad o metodo de la clase toca recorrer la variable (que viene en representacion de la clase) como si se tratase de un json, siendo que en un json se recorre diciendo "variable.propiedad", ene ste caso seria "variable.metodo"
saludando.saludar()