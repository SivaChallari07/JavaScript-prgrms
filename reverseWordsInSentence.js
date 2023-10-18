function reverseWordsInSentence(sentence) {
    const words = sentence.split(' ');
    const reversedWords = words.map(word => {
        return word.split('').reverse().join('');
    });
    return reversedWords.join(' ');
}

let inputSentence = prompt("Enter the sentence  :");
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence);