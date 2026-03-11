/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function firstChar (array,character){
    const firstCharacterNames= []
                                                                        // function declaration
    for (let i = 0; i < array.length; i++){
        if(array[i][0].toUpperCase() === character.toUpperCase()){
            firstCharacterNames.push(array[i])
        }
    }
          return firstCharacterNames
}


const firstChar2 = (array2,character) => {
    const firstCharacterNames = []                                  //arrow function
    for (let i=0; i < array2.length; i++){
        if (array2[i][0].toUpperCase() === character.toUpperCase()){
            firstCharacterNames.push(array2[i])
        }
    }
        return firstCharacterNames
}






// Invoca la funzione qui e stampa il risultato in console
firstChar(names,`A`)
console.log(firstChar(names,`A`));

firstChar2(names,`L`)
console.log(firstChar2(names,`L`));




//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]