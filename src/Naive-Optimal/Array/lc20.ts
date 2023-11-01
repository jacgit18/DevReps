// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

const isValid = (s) => {
  const stack = []
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  }

  for (let i = 0; i < s.length; i++) {
    let c = s[i]
    if (map[c]) {
      stack.push(map[c])
    } else if (c !== stack.pop()) {
      return false
    }
  }

  return !stack.length
}

console.log(isValid("(]"))

try {
  module.exports = isValid
} catch (error) {}
