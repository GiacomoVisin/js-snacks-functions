/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function newArray(arr) {                  // function declaration
    const newNames = []

    for (let i = 0; i < names.length; i++){
        newNames.push(names[i][0])
    }
    return newNames
}


const newArray = (arr) => {
     const newNames = []                        // function arrow

    for (let i = 0; i < names.length; i++){
        newNames.push(names[i][0])
    }
    return newNames
}




// Invoca la funzione qui e stampa il risultato in console
newArray(names)
console.log(newArray());



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

