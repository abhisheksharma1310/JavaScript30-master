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
const fifteen = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
console.log("List of inventors for those who were born in the 1500's.");
console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const inventorsNames = inventors.map((inventor) => {
  return { firstName: inventor.first, lastName: inventor.last };
});
console.log("Inventors Names");
console.table(inventorsNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const inventorsByBirth = inventors.sort((a, b) => a.year - b.year);
console.log("The inventors by birthdate, oldest to youngest");
console.table(inventorsByBirth);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalInventorsLive = inventors.reduce(
  (acc, curr) => (acc += curr.passed - curr.year),
  0
);
console.log("Totals years all the inventors live all together.");
console.log(totalInventorsLive);

// 5. Sort the inventors by years lived
const inventorsByYearsLived = inventors.sort(
  (a, b) => a.passed - a.year - (b.passed - b.year)
);
console.log("Inventors by years they lived.");
console.table(inventorsByYearsLived);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const oulevards = inventors.filter((inventor) =>
  (inventor.first + inventor.last).includes("de")
);
console.log(
  "List of Boulevards in Paris that contain 'de' anywhere in the name."
);
console.table(oulevards);

// 7. sort Exercise
// Sort the people alphabetically by last name
const sortedByLastName = people
  .map((name) => ({
    first: name.split(", ")[1],
    last: name.split(", ")[0],
  }))
  .sort((a, b) => (a.first > b.first ? 1 : -1));
console.log("People list sorted alphabetically by last name.");
console.table(sortedByLastName);

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

const totalInstances = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
console.log("Total instances of each of data item");
console.table([totalInstances]);
