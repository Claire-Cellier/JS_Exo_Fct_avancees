// Given an array of names of people but mixing lower case and upper case letters, you will have to:
// - Create a function that contains the logic to refactor those names so it converts a name like `anTHoNY` to `Anthony`.
// - A function that accepts two parameters: an array and a callback function that is in charge of refactoring all items inside that array
// - Return the original array but with all names properly typed

const people = ['JoHn', 'ChrISTiana', 'anThoNY', 'MARia', 'jaMeS', 'MIChaEl', 'jeNNIFeR'];


function capitalizeName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }

function refactorNamesInPlace(arr, callback) {
    arr.forEach((name, index) => {
      arr[index] = callback(name); // Applique la fonction de reformatage à chaque élément
    });
    return arr; // Retourne le même tableau, mais modifié
}

refactorNamesInPlace(people, capitalizeName);
console.log(people);

function refactorNamesInPlace(arr, callback) {
    arr.forEach((name, index) => {
      arr[index] = callback(name); // Applique la fonction de reformatage à chaque élément
    });
    return arr; // Retourne le même tableau, mais modifié
  }