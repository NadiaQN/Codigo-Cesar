

Crear una variable con un prompt para hacer ingreso de una palabra a cifrar
El string ingresado entra a la función cipher
 Será convertido a mayúsculas
 Luego recorreremos cada letra del string para obtener su indice ASCII
 Aplicamos la formula para obtener una nueva letra ASCII (x+n)%26
 Con los nuevos indices usaremos una función para obtener las letras equivalentes a su indice ASCII
 Ponemos cada letra en un array
 Y luego convertimos ese array en un string
  
Finalmente retornamos la nueva palabra cifrada con un alert.

Fin de la primera función.


Segunda función para descifrar
El string ingresado entra a la función decipher
 será convertido a mayúsculas
 Luego recorreremos cada letra del string para obtener su indice ASCII
 Aplicamos la formula para obtener su nueva letra ASCII (x-n)%26
 Con los nuevos indices usaremos una función para obtener las letras equivalentes a su indice ASCII
 Ponemos cada letra en un array
 Y luego convertimos ese array en un string

Finalmente retornamos la nueva palabra descifrada con un alert

Fin de la segunda función.