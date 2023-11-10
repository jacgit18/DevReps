let Sentence: String = "A man, a plan, a canal: Panama"

export const palVaidaor = (sen: String) => {
  // use a reguar expression remove anything that is not a word
  sen = sen.replace(/\W/g, "").toLowerCase()
  for (let i = 0; i < sen.length / 2; i++) {
    if (sen[i] !== sen[sen.length - i - 1]) {
      return false
    }
  }
  return true
}


