// 1. Randomize the order of the following number set: "22, 14, 3, 4, 37, 6, 7, 81, 9, 10"

function randomize(arr) {
  let arrNew = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    let randomIndex = Math.floor(Math.random() * i);
    arrNew.push(arr.splice(randomIndex, 1)[0]);
  }
  return arrNew.join(", ");
}

console.clear();
console.log(
  `The following number set: 
  "22, 14, 3, 4, 37, 6, 7, 81, 9, 10" 
has been randomized into: 
  "${randomize([22, 14, 3, 4, 37, 6, 7, 81, 9, 10])}"`
);

// 2. Find the mean of the following number set: "22, 14, 3, 4, 37, 6, 7, 81, 9, 10"

function mean(arr) {
  let sumArr = 0;
  for (let i = 0; i < arr.length; i++) {
    sumArr += arr[i];
  }
  return sumArr / arr.length;
}

console.log(
  `The mean of this same set is: ${mean([22, 14, 3, 4, 37, 6, 7, 81, 9, 10])}`
);

// 3. Fetch and parse the json data at http://bpbuild.com/devtest/data.php to produce the following table:

fetch("http://bpbuild.com/devtest/data.php")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((obj) => {
      let TableRow = document.createElement("tr");
      ["firstname", "lastname", "email", "gender"].forEach((identifier) => {
        let rowData = document.createElement("td");
        rowData.innerText = obj[identifier];
        TableRow.appendChild(rowData);
      });
      document.querySelector("table").appendChild(TableRow);
    });
  });

// Bonus
// Use the shortest possible regular expression or replacement method using php, ruby or javascript to put a smiley face after every word that ends in a vowel in this sentence.
let vowels = "aeiou";
console.log(
  "Use the shortest possible regular expression or replacement method using php, ruby or javascript to put a smiley face after every word that ends in a vowel in this sentence"
    .split(" ")
    .map((word) =>
      vowels.includes(word.charAt(word.length - 1)) ? word + "\u263A" : word
    )
    .join(" ")
);
