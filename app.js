
	var string = prompt('Ingresa una frase: ');
	//Funcion para cifrar
 	function cipher(string){
 		var upper = string.toUpperCase();              //convertimos nuestro string a mayusculas  
 		var cifrado = '';                              
 		var arrayCifrado = [];
 		var stringCifrado = '';
 		for(i=0; i<upper.length; i++) {                //recorrer nuestro string 
 			position = upper.charCodeAt(i);            //para cada posicion obtener indice ASCII 
 			var formula = (position-65+33)%26+65;      //aplicar formula para cifrar 
 			cifrado = String.fromCharCode(formula);    //de los indices ahora obtenemos las letras equivalentes en ASCII 
 			arrayCifrado.push(cifrado);                //ingresamos cada letra en un array
 		 	stringCifrado = arrayCifrado.join('');    //convertimos nuestro array a un string
 		} 
	return  stringCifrado;
	}
 	


 	var string = prompt('Ingresa una frase: ');

 		//Funcion para descifrar
 	function decipher(string){
 		var upper = string.toUpperCase();                    //convertimos nuestro string a mayusculas  
 		var descifrado = '';                              
 		var arrayDescifrado = [];
 		var stringDescifrado = '';
 		for(i=0; i<upper.length; i++) {                      //recorrer nuestro string 
 			position = upper.charCodeAt(i);                  //para cada posicion obtener indice ASCII 
 			var formula = (position-65-33)%26+65;            //aplicar formula para descifrar 
 			descifrado = String.fromCharCode(formula);       //de los indices ahora obtenemos las letras equivalentes en ASCII 
 			arrayDescifrado.push(descifrado);                //ingresamos cada letra en un array
 		 	stringDescifrado = arrayDescifrado.join('');     //convertimos nuestro array a un string
 		} 
	return stringDescifrado;
	}
 	


 

 