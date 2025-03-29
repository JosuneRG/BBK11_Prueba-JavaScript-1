// Ejercicio 1
// Declara una función que acepte una palabra como parámetro y la devuelva con todos sus caracteres en mayúsculas y separados por espacios.
// Ejemplo: Para "Ana" devolverá "A N A".
function caracterParm(str)
{
    return str.toUpperCase().split("").join(" ");
}

console.log("Ana en mayus y separado:",caracterParm("Ana"));

// Ejercicio 2
// Declara una función que acepte un nombre como parámetro y devuelva el número de palabras que tiene el nombre. 
// Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.
// // Entregad vuestra solución por campus virtual. Si os da tiempo, pensad varias maneras de resolverlo y enviad vuestras soluciones. 
// Podéis enviar una primera solución y luego añadir otras en comentarios.
function contarPalabras() 
{
    let contador = 1;
    let nombre = "Antonio Alberto Jesús";
    for (let i = 0; i < nombre.length; i++) 
    {
        if (nombre[i] === " " && nombre[i + 1] !== " " && i + 1 < nombre.length) 
        {
            contador++;
        }
    }

    return contador;
}


console.log("Devuelva el número de palabras que tiene el nombre:", contarPalabras());
