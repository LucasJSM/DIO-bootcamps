// Simple exercise without all verifications

// First solution
const getWord = (word) => {
  if (word === undefined || word === null) {
    return console.log(`WRITE A WORD\n`);
  }

  const splitedWord = String(word).split("");
  const reverseWord = String(word).split("").reverse();
  const wordLength = String(word).length;

  let count = 0;

  const isPalindrome = getPalindrome(
    splitedWord,
    reverseWord,
    wordLength,
    count
  );

  if (isPalindrome === wordLength) {
    console.log(`PALINDROME\n${splitedWord} : ${reverseWord}\n`);
  } else {
    console.log(`NOT PALINDROME\n${splitedWord} : ${reverseWord}\n`);
  }
};

const getPalindrome = (splitedWord, reverseWord, wordLength, count) => {
  for (let i = 0; i < wordLength; i++) {
    if (splitedWord[i] == reverseWord[i]) {
      count++;
    }
  }

  return count;
};

getWord("raiar");
getWord("ama");
getWord("ovo");
getWord("radar");
getWord();

// Second solution
const verifiedPalindrome1 = (string) => {
  if (!string) return `ISN'T PALINDROME ${string}`;

  return string.split("").reverse().join("") === string;
};

console.log(verifiedPalindrome1("ama"));
console.log(verifiedPalindrome1("gato"));
console.log(verifiedPalindrome1());
console.log(verifiedPalindrome1(null));

// Third solution
const verifiedPalindrome2 = (string) => {
  if (!string) return `ISN'T PALINDROME ${string}`;

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

console.log(verifiedPalindrome2("ama"));
console.log(verifiedPalindrome2("gato"));
console.log(verifiedPalindrome2());
console.log(verifiedPalindrome2(null));