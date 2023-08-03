// Write a code on how to calculate the number of vowels and consonants in a string?(Use Javascript only)

function vowelConsonantCounter(text) {
  text = text.toLowerCase();

  let vowel = 0;
  let consonant = 0;

  const vowels = "aeiou";

  for (let i = 0; i < text.length; i++) {
    const letter = text[i];

    if (/[a-z]/.test(letter)) {
      if (vowels.includes(letter)) {
        vowel++;
      } else {
        consonant++;
      }
    }
  }

  return {
    vowels: vowel,
    consonants: consonant,
  };
}

const inputText = "Hello  666 world";
const result = vowelConsonantCounter(inputText);
console.log(result);
