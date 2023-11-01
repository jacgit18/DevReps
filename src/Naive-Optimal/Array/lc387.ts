//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i]
      }
    }
  }
  return undefined
}

function firstRecurringCharacter2(input) {
  let map = {}
  for (let i = 0; i < input.length; i++) {
    // However because when this gets to zero the way javascript works it put zero here but in an IF statement

    // zero is what we call falsie and Javascript and that has to do with type coarsen and Javascript something

    // that a lot of people get annoyed about with the language.

    // So what we would need to do is to make sure that we we specify that we want this to not equal on defined.

    // So as soon as it doesn't equal undefined I want you to returned this item.
    if (map[input[i]] !== undefined) {
      return input[i]
    } else {
      map[input[i]] = i
    }
  }
  return undefined
}

console.log(firstRecurringCharacter2([1, 5, 5, 1, 3, 4, 6]))

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
