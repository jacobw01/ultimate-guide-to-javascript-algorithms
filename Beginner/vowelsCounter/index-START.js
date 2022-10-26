/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


function vowelsCounter(text) {
    const vowels = ['a', 'e', 'i', 'o', 'u']

    let count = 0
    
    for(let i = 0; i <= text.length; i++){
        if(vowels.includes(text[i].toLowerCase())){
            count++
        }
    }
    return count
}
/* 
function vowelsCounter(text) {
    const vowels = ['a', 'e', 'i', 'o', 'u']

    const count = 0

    for(let letter of text.toLowerCase()){
        if(vowels.includes(letter)){
            count++
        }
    }
    return count
}

function vowelsCounter(text) {
    let matchingInstances = text.match(//[aeiou]/gi)

    return matchingInstances.length
}
 */
console.log(vowelsCounter('jake'))

module.exports = vowelsCounter;
