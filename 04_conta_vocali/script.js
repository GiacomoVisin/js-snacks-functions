/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function vocalString(string) {
    const vocal = [`a`, `e`, `i`, `o`, `u`]
    let count = 0;                                  // declaration function
    for (let i = 0; i < string.length; i++) {
        if (vocal.includes(string[i].toLowerCase())) {
            count++
        }
    }
    return count
}



const vocalString = (string) => {
    const vocals = [`a`, `e`, `i`, `o`, `u`]
    let count2 = 0                                          // function arrow
    for (let i = 0; i < string.length; i++) {
        if (vocals.includes(string[i].toLowerCase())) {
            count2++
        }
    }
    return count2
}






// Invoca la funzione qui e stampa il risultato in console
vocalString(word)
console.log(vocalString(word));



//Risultato atteso se si passa 'javascript': 3 (a, a, i)