/*crea un programa que sea capaz de transformar texto
natural a codigo morse y viceversa*/

const morse{
    "H": "....",
    "O": "---",
    "L":".-..",
    "A":".-",
}

const convertir (str) => {
    return str.toUpperCase().split(" ").map(elemento =>{
        return morse[elemento])
    }
       
    
}