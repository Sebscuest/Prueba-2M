'use strict'
/*Crear una función constructora para crear un Estudiante con las siguientes propiedades:

nombre, 
correo
promedio.
Una Funcion validarPromedio Que devuelva "Aprobado" si el promedio es mayor a 70 y "Reprobado" si es menor.
Una Función obtenerUsuario que devuelva únicamente el nombre de usuario del email
 Crear un objeto a partir de la función anterior y comprobar funciones */

function Student(nombre,correo,promedio){
    this,nombre=nombre;
    this.correo=correo;
    this.promedio=promedio;

    this.validaPromedio=function(){
        if (this.promedio>=70) {
            return ("Aprobado");
        }else{ 
            return ("Reprobado");
              }
    }
this.obtenerUsuario = function(){
    let sebas= correo.indexOf("@");
    return this.correo.substring(0,sebas);
    }
}

let Estudiante1 = new Student("sebas","kscuesta@sudamericano.edu.ec","75"
)

alert(Estudiante1.validaPromedio());
alert( Estudiante1.obtenerUsuario());