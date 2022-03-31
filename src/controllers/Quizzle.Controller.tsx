import axios from "axios";

export abstract class QuizzleController {
  static generateQuizzleWord = async () => {
    // const res = await axios.get(
    //   `https://api.github.com/gists/fe2b58729defad2ace4d70957d221dcb`
    // );
    // const clue = res.data.files.wordleClue.content;
    return "pints";
  };

  static generatePubName = async () => {
    //   const res = await axios.get(
    //     `https://api.github.com/gists/7e702d2d3cc93feef867b1b258aa01f2`
    //   );
    //   const pub = res.data.files.pub.content;
    return "Costello's";
  };
}
