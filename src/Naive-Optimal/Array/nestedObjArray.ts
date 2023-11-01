let taxRatesForAll = [
  { rate: 0.1, r1: 9700, r2: 0, status: "S" },
  { rate: 0.12, r1: 39475, r2: 9700, status: "S" },
  { rate: 0.22, r1: 84200, r2: 39475, status: "S" },
  { rate: 0.24, r1: 160725, r2: 84200, status: "S" },
  { rate: 0.32, r1: 204100, r2: 160725, status: "S" },
  { rate: 0.35, r1: 510000, r2: 204100, status: "S" },
  { rate: 0.37, r1: 99999999, r2: 510000, status: "S" },
  { rate: 0.1, r1: 19400, r2: 0, status: "M" },
  { rate: 0.12, r1: 78950, r2: 19400, status: "M" },
  { rate: 0.22, r1: 168400, r2: 78950, status: "M" },
  { rate: 0.24, r1: 321450, r2: 168400, status: "M" },
  { rate: 0.32, r1: 408200, r2: 321450, status: "M" },
  { rate: 0.35, r1: 612350, r2: 408200, status: "M" },
  { rate: 0.37, r1: 99999999, r2: 612350, status: "M" },
  { rate: 0.1, r1: 13850, r2: 0, status: "H" },
  { rate: 0.12, r1: 52850, r2: 13850, status: "H" },
  { rate: 0.22, r1: 84200, r2: 52850, status: "H" },
  { rate: 0.24, r1: 160000, r2: 84200, status: "H" },
  { rate: 0.32, r1: 204100, r2: 160000, status: "H" },
  { rate: 0.35, r1: 510300, r2: 204100, status: "H" },
  { rate: 0.37, r1: 99999999, r2: 510300, status: "H" },
]

let salary = 150000
let i = 0
let status = "H"

let taxRates = taxRatesForAll.filter((m) => m.status == status)

while (salary > taxRates[i].r1) {
  let taxPaid = (taxRates[i].r1 - taxRates[i].r2) * taxRates[i].rate
  taxRates[i].taxPaid = taxPaid
  console.log(taxRates[i])
  i++
}

let taxPaid = (salary - taxRates[i].r2) * taxRates[i].rate

taxRates[i].taxPaid = taxPaid
console.log(taxRates[i])

let totalPaid = taxRates
  .filter((f) => f.taxPaid != undefined)
  .map(m >= m.taxPaid)
  .reduce((a, c) => a + c, 0)

console.log(i, { totalPaid })
