/*crear una funcion que dado un array de 10 numeros, nos devuelva el array
 pero que tenga colocado los numeros primos en las primares posiciones dejando 
 el resto para el final */
  
 function esPrimo(numero) {
    if (numero < 2) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) return false;
    }
    return true;
  }
  
  function ordenarNumerosPrimos(array) {
    const primos = [];
    const noPrimos = [];
  
    for (let num of array) {
      if (esPrimo(num)) {
        primos.push(num);
      } else {
        noPrimos.push(num);
      }
    }
  
    return primos.concat(noPrimos);
  }

  const arrayNumeros = [17, 4, 23, 8, 11, 6, 13, 10, 5, 9];
  const arrayOrdenado = ordenarNumerosPrimos(arrayNumeros);
  console.log(arrayOrdenado);

