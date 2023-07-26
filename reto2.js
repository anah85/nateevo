/*escribe una funcion que calcule si un numero 
dado es numero de Amstrong, aquel que es igual a la suma de las 
n-ésimas potencias de sus digitos*/

function numeroDeArmstrong(numero) {
    // Convertimos el número en un arreglo de dígitos
    const digitos = numero.toString().split('').map(Number);
    const n = digitos.length;
  
    // Calculamos la suma de las n-ésimas potencias de los dígitos
    const sumaPotencias = digitos.reduce((acumulado, digito) => acumulado + Math.pow(digito, n), 0);
  
    // Comprobamos si el número es un número de Armstrong
    return sumaPotencias === numero;
  }

  const numero = 153;
  console.log(numeroDeArmstrong(numero));





