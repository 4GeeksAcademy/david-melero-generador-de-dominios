window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".net"];

  let textFor = '<ul class="list-group">';
  textFor += '<li class="list-group-item bg-success text-light">With for </li>';
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let h = 0; h < noun.length; h++) {
        for (let k = 0; k < domain.length; k++) {
          textFor +=
            '<li class="list-group-item bg-primary text-light">' +
            pronoun[i] +
            adj[j] +
            noun[h] +
            domain[k] +
            "</li>";
        }
      }
    }
  }
  textFor += "</ul>"; // Corregido el cierre de la etiqueta ul
  document.querySelector("#for").innerHTML = textFor;

  // Aquí utilizo el for of
  let textOf = '<ul class="list-group">';
  textOf +=
    '<li class="list-group-item bg-success text-light">With for of </li>';

  for (const item of pronoun) {
    for (const element of adj) {
      for (const iterator of noun) {
        for (const ele of domain) {
          textOf += `
                  <li class="list-group-item">
                   ${item}${element}${iterator}${ele}
                   </li>`;
        }
      }
    }
  }
  textOf += "</ul>";
  document.querySelector("#of").innerHTML = textOf;

  // Aquí utilizo .map()
  let textMap = '<ul class="list-group">';
  textMap += '<li class="list-group-item bg-success text-light">With map </li>';
  pronoun.forEach(item => {
    adj.forEach(element => {
      noun.forEach(iterator => {
        domain.forEach(ele => {
          textMap += `<li class= "list-group-item">${item}${element}${iterator}${ele}</li>`;
        });
      });
    });
  });
  textMap += "</ul>";
  document.querySelector("#map").innerHTML = textMap;
};
