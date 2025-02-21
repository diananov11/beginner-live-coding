// Kerjakan tes mu disini
function sumArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArr([8, 3, 9, 2, 5]));
console.log(sumArr([1, 1, 1, 1, 1]));
console.log(sumArr([0, 0, 0]));
console.log(sumArr([5, 7]));
console.log(sumArr([8]));

// [8,3,9,2,5] -> return 27
// [1,1,1,1,1] -> return 5
// [0,0,0] -> return 0
// [5,7] -> return 12
// [8] -> return 8

//soal 2
const data = [
  {
    name: "Alpha",
    class: "Dragon",
    club: ["Bola", "Bulutangkis"],
  },
  {
    name: "Beta",
    class: "Lizard",
    club: ["Membaca", "Bulutangkis"],
  },
];
// Alpha ada di kelas Dragon, dia mengikuti club Bola, Bulutangkis
// Beta ada di kelas Lizard, dia mengikuti club Membaca, Bulutangkis

for (let i = 0; i < data.length; i++) {
  let person = data[i];
  console.log(
    `${person.name} ada di kelas ${
      person.class
    }, dia mengikuti club ${person.club.join(", ")} `
  );
}
