
function writeCards(names, str) {
    const thankYou = []
    for(let i = 0; i < names.length; i++) {
    thankYou.push(`Thank you, ${names[i]}, for the wonderful ${str} gift!`)
    }
    return thankYou;
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")

function countDown(int) {
    let i = int
    while ( i > -1) {
        console.log(i--);
    }
}
console.log(countDown())