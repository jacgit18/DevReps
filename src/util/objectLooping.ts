// Original Object
const person: { [key: string]: string | number } = { name: 'John', age: 30, job: 'Engineer' };

// 1. Using for...in Loop
for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(`${key}: ${person[key]}`);
  }
}

// 2. Using Object.keys()
const keys = Object.keys(person);
keys.forEach((key) => {
  console.log(`${key}: ${person[key]}`);
});

// 3. Using Object.values()
const values = Object.values(person);
values.forEach((value) => {
  console.log(value);
});

// 4. Using Object.entries()
const entries = Object.entries(person);
entries.forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
})

// 5. Using Object.getOwnPropertyNames()
const propertyNames = Object.getOwnPropertyNames(person);
propertyNames.forEach((name) => {
  console.log(`${name}: ${person[name]}`);
})

// 6. Using a for...of Loop (ES6)
for(const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

// 7. Using forEach() with Object.keys() or Object.entries() (ES6)
Object.keys(person).forEach((key) => {
  console.log(`${key}: ${person[key]}`);
});
