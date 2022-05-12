const button = document.querySelector('.btn');
const result = document.querySelector('.result');

button.addEventListener("click", isPalindrome);

function isPalindrome() {
    word = document.querySelector('.input-text').value;
    word_length = word.length;

    let start = word.substring(0, Math.floor(word_length / 2)).toLowerCase();
    let end = word.substring(word_length - Math.floor(word_length / 2)).toLowerCase();

    let flip = [...end].reverse().join("");
    if(start == flip) {
        result.innerHTML = `${word.toUpperCase()} is a palindrome`;
    } else {
        result.innerHTML = `${word.toUpperCase()} is NOT a palindrome`;
    }
}
