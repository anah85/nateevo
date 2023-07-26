/*crea un programa que sea capaz de transformar texto
natural a codigo morse y viceversa*/

const morseCodeMap = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
  };
  
  // Función para convertir texto a código Morse
  function textoACodigoMorse(texto) {
    return texto
      .toUpperCase()
      .split('')
      .map((char) => morseCodeMap[char] || char)
      .join(' ');
  }
  
  // Función para convertir código Morse a texto
  function codigoMorseATexto(codigoMorse) {
    return codigoMorse
      .trim()
      .split(' ')
      .map((morse) => Object.keys(morseCodeMap).find((key) => morseCodeMap[key] === morse) || morse)
      .join('');
  }
const textoEjemplo = "HELLO WORLD";
const codigoMorseEjemplo = "-.-. --- -.. .. -. ..--- ----- .----";
console.log(textoACodigoMorse(textoEjemplo));
console.log(codigoMorseATexto(codigoMorseEjemplo));