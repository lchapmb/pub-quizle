// react import
import { createContext, useState, useContext, useEffect } from "react";

// controller import
import { QuizzleController } from "../controllers/Quizzle.Controller";

// model import
import LetterModel from "../models/LetterModel";

// import components
import Nav from "../components/Nav";
import WordleBoxes from "../components/WordleBoxes";
import Keyboard from "../components/Keyboard";
import Feedback from "../components/Feedback";

// mui imports
import { red, green, orange } from "@mui/material/colors";

// declare type
export type LettersContent = {
  letters: LetterModel[][];
  targetWord: string;
  handleLetterClick: (letter: LetterModel) => void;
  displayGrid: string[][];
  letterBackgroundColor: (letter: string) => string;
  handleDeleteLastLetter: () => void;
};

// create context
export const LettersContext = createContext<LettersContent>({
  letters: [],
  targetWord: "",
  handleLetterClick: () => {},
  displayGrid: [],
  letterBackgroundColor: () => "",
  handleDeleteLastLetter: () => {},
});

// export use context
export const useLettersContext = () => useContext(LettersContext);

export default function Landing() {
  const [targetWord, setTargetWord] = useState("");
  // const [targetPub, setTargetPub] = useState("");
  const [displayGrid, setDisplayGrid] = useState(
    [0, 1, 2, 3, 4].map(() => [0, 1, 2, 3, 4].map(() => ""))
  );
  const [currentRow, setCurrentRow] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const qwerty = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "E", "R", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  const [letters, setLetters] = useState(
    qwerty.map((row) => row.map((letter) => new LetterModel(letter)))
  );

  useEffect(() => {
    QuizzleController.generateQuizzleWord().then((word) => {
      setTargetWord(word);
      return;
    });

    // QuizzleController.generatePubName().then((name) => {
    //   setTargetPub(name);
    // });
  }, []);

  const handleLetterClick = (letter: LetterModel) => {
    console.log(letter);
    let tempArr = [...displayGrid];
    for (let i = 0; i < tempArr[currentRow].length; i++) {
      const col = tempArr[currentRow][i];
      if (!col) {
        tempArr[currentRow][i] = letter.letter;
        break;
      }
    }
    console.log(tempArr);
    setDisplayGrid(tempArr);
  };

  const letterBackgroundColor = (letter: string) => {
    const allLetters = letters[0].concat(letters[1], letters[2]);
    const letterModel = allLetters.find((l) => l.letter === letter);
    if (letterModel) {
      if (letterModel.isWrong) return red[500];
      if (letterModel.isCorrect) return green[500];
      if (letterModel.isUsed) return orange[500];
    }
    return "";
  };

  const handleDeleteLastLetter = async () => {
    let tempArr = [...displayGrid];
    for (let i = 0; i < tempArr[currentRow].length; i++) {
      if (!tempArr[currentRow][i + 1]) {
        tempArr[currentRow][i] = "";
        break;
      }
    }
    setDisplayGrid(tempArr);
  };

  const setLetterAsUsed = (isUsedBool: boolean, gLetter: string) => {
    setLetters(
      letters.map((lettersRow) =>
        lettersRow.map((letter: LetterModel) => {
          if (letter.letter === gLetter) {
            letter.isUsed = true;
            isUsedBool = true;
          }
          return letter;
        })
      )
    );
    return isUsedBool;
  };

  const handleSubmit = async () => {
    let tempArr = [...displayGrid];
    for (let i = 0; i < tempArr[currentRow].length; i++) {
      const col = tempArr[currentRow][i];
      if (!col) {
        setErrorMessage("Please complete the word line");
        return null;
      }
    }

    let guessString = displayGrid[currentRow].join("");
  };

  return (
    <>
      <LettersContext.Provider
        value={{
          letters,
          targetWord,
          handleLetterClick,
          displayGrid,
          letterBackgroundColor,
          handleDeleteLastLetter,
        }}
      >
        <Nav />
        <WordleBoxes />
        <Keyboard />
        <Feedback />
      </LettersContext.Provider>
    </>
  );
}
