import axios from "axios";

export abstract class QuizzleController {
  static generateQuizzleWord = async () => {
    const res = await axios.get(
      `https://api.github.com/gists/fe2b58729defad2ace4d70957d221dcb`
    );
    const clue = res.data.files.wordleClue.content;
    return clue;
  };

  static generatePubName = async () => {
    const res = await axios.get(
      `https://api.github.com/gists/7e702d2d3cc93feef867b1b258aa01f2`
    );
    const pub = res.data.files.pub.content;
    return pub;
  };

  static checkIfStringIsWord = async (word: string) => {
    if (!word) return false;

    word = word.toLowerCase();

    if (word.includes(" ")) word = word.split(" ")[0];

    const res = await axios.get(
      `https://api.datamuse.com/words?sp=${word}&md=d&max=1`
    );

    if (res.data.length === 0) return false;

    let isWord = false;

    for (let i = 0; i < res.data.length; i++) {
      if (res.data[i].word === word) {
        isWord = true;
        break;
      }
    }
    return isWord;
  };
}
