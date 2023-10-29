let Sentence = "A man, a plan, a canal: Panama";

const palVaidaor = (sen) => {
    // use a reguar expression remove anything that is not a word
    sen = sen.replace(/\W/g, '').toLowerCase()
    for (let i = 0; i < sen.length/2; i++) {


        if (sen[i] !== sen[sen.length-i-1]) {
            return false;
        }
    }
    return true;


}


console.log(palVaidaor(Sentence))

try {
    module.exports = palVaidaor;
  } catch (error) {}