window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".net"];

  function generatePhrasesRandom() {
    const names = [pronoun, adj, noun];
    const randomWords = names.map(item => {
      let numberRandom = Math.floor(Math.random() * item.length);
      return item[numberRandom];
    });

    const randomDomain = domain[Math.floor(Math.random() * domain.length)];
    return randomWords.join("") + randomDomain;
  }

  function updatePhrase() {
    let random = generatePhrasesRandom();
    const textHTML = document.querySelector("#title");
    textHTML.innerHTML = random;
  }
  updatePhrase();
};

// window.onload = function () {

//     let pronoun = ['the', 'our'];
//     let adj = ['great', 'big'];
//     let noun = ['jogger', 'racoon'];
//     let domain = ['.com', '.net', '.es']

//     // let pronounindex = Math.floor(Math.random() * pronoun.length)
//     // let adjindex = Math.floor(Math.random() * pronoun.length)
//     // let nounindex = Math.floor(Math.random() * pronoun.length)
//     let names = ['pronoun', 'adj', 'noun']
//     let generatePhrases = ' '
//     for (let i = 0; i < names.length; i++) {
//         let indexRandom;
//         if (names[i] === 'pronoun') {
//             indexRandom = Math.floor(Math.random() * pronoun.length)
//             generatePhrases += (pronoun[indexRandom])
//         } else if (names[i] === 'adj') {
//             indexRandom = Math.floor(Math.random() * adj.length)
//             generatePhrases += (adj[indexRandom])
//         } else if (names[i] === 'noun') {
//             indexRandom = Math.floor(Math.random() * noun.length)
//             generatePhrases += (noun[indexRandom])
//         }
//     }
//     let domainText = ''

//         const phrases = document.querySelector('#title')
//     phrases.innerHTML = generatePhrases
// };
