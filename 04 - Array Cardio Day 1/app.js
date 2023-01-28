// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const Invetor1500 = inventors.filter(
  (inv) => inv.year >= 1500 && inv.year < 1600
);
console.table(Invetor1500);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const names = inventors.map((inv) => inv.first + " " + inv.last);
console.table(names);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const increasing_BD = inventors.sort((a, b) => a.year - b.year);
console.table(increasing_BD);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

const totalAge = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalAge);

// 5. Sort the inventors by years lived
const longAge = inventors.sort((a, b) => {
  let lastguy = a.passed - a.year;
  let nextguy = b.passed - b.year;
  return lastguy > nextguy ? 1 : -1;
});
console.table(longAge);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector(".mw-category");
// const links = [...category.querySelectorAll("a")];
// const allBoulevards = links.map((link) => link.title);
// const de = allNames.filter((Element) => Element.includes("de"));

// 7. sort Exercise
// Sort the people alphabetically by last name

const sortedLastname = people.sort((a, b) => {
  let previous = a.split(",");
  let next = b.split(",");
  return previous[1] > next[1] ? 1 : -1;
});
console.table(sortedLastname);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];
let quantity = {};
data.map((Element) => {
  if (quantity[`${Element}`]) {
    quantity[`${Element}`]++;
  } else {
    quantity[`${Element}`] = 1;
  }
});
console.table(quantity);
