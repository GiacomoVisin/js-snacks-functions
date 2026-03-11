/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name2 = 'Mario';


// Dichiara la funzione qui.
function helloNamebyHour(name2) {
    const now = new Date();
    const hour = now.getHours();
    let greeting = ``;

    if (hour <= 13) {
        greeting = `Buongiorno`
        console.log(`${greeting} ${name2}`);
    }
    else if (hour > 13 && hour <= 17) {
        greeting = `Buon pomeriggio`
        console.log(`${greeting} ${name2}`);
    }
    else {
        greeting = `Buonasera`
        console.log(`${greeting} ${name2}`);
    }
    return (`${greeting} ${name2}`)
}

// Invoca la funzione qui e stampa il risultato in console
helloNamebyHour(name2)
console.log(helloNamebyHour(name2));




//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.