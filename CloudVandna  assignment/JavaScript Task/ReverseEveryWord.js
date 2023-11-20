function reverseWordsInSentence(sentence) {
    let reversedSentence = '';
    let word = '';

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ' || i === sentence.length - 1) {
            if (i === sentence.length - 1) {
                word += sentence[i];
            }
            let reversedWord = '';
            for (let j = word.length - 1; j >= 0; j--) {
                reversedWord += word[j];
            }
            reversedSentence += reversedWord;
            if (i !== sentence.length - 1) {
                reversedSentence += ' ';
            }
            word = '';
        } else {
            word += sentence[i];
        }
    }

    return reversedSentence;
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence);

