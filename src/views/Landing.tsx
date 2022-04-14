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
  handleDeleteLastLetter: () => void;
  handleSubmit: () => void;
  errorMessage: string;
  currentRow: number;
};

// create context
export const LettersContext = createContext<LettersContent>({
  letters: [],
  targetWord: "",
  handleLetterClick: () => {},
  displayGrid: [],
  handleDeleteLastLetter: () => {},
  handleSubmit: () => {},
  errorMessage: "",
  currentRow: 0,
});

// export use context
export const useLettersContext = () => useContext(LettersContext);

export default function Landing() {
  const [targetWord, setTargetWord] = useState("");
  const [targetPub, setTargetPub] = useState("");
  const [displayGrid, setDisplayGrid] = useState(
    [0, 1, 2, 3, 4, 5].map(() => [0, 1, 2, 3, 4].map(() => ""))
  );
  const [currentRow, setCurrentRow] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const qwerty = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  const [letters, setLetters] = useState(
    qwerty.map((row) => row.map((letter) => new LetterModel(letter)))
  );

  useEffect(() => {
    QuizzleController.generateQuizzleWord().then((word) => {
      setTargetWord(word.toUpperCase());
    });

    QuizzleController.generatePubName().then((name) => {
      setTargetPub(name);
    });
  }, []);

  const handleLetterClick = (letter: LetterModel) => {
    let tempArr = [...displayGrid];
    for (let i = 0; i < tempArr[currentRow].length; i++) {
      const col = tempArr[currentRow][i];
      if (!col) {
        tempArr[currentRow][i] = letter.letter;
        break;
      }
    }
    setDisplayGrid(tempArr);
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
    console.log(gLetter);
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
    // check current row is complete
    let tempArr = [...displayGrid];
    for (let i = 0; i < tempArr[currentRow].length; i++) {
      const col = tempArr[currentRow][i];
      if (!col) {
        setErrorMessage("Please complete the word line");
        return null;
      }
    }

    console.log(displayGrid[currentRow]);

    let guessString = displayGrid[currentRow].join("");

    //check current word is an actual word
    const isWord = await QuizzleController.checkIfStringIsWord(guessString);

    if (!isWord) {
      setErrorMessage("That is not a word, your guess must be an actual word");
      return null;
    }

    // check each letter relates to current guess row
    for (let l = 0; l < guessString.split("").length; l++) {
      let gLetter = guessString.split("")[l];
      let isCorrect = false;
      let isUsedBool = false;
      const guessId = `guess_${currentRow}_${l}`;
      const guessBox = document.getElementById(guessId);
      if (gLetter === targetWord.split("")[l]) {
        // check letter is correct and in correct position
        setLetters(
          letters.map((row, i) =>
            row.map((letter, ii) => {
              if (letter.letter === gLetter) {
                letter.isCorrect = true;
                isCorrect = true;
                if (guessBox) guessBox.style.backgroundColor = green[500];
              }
              return letter;
            })
          )
        );
      } else {
        // check letter is correct but in wrong place
        for (let ti = 0; ti < targetWord.split("").length; ti++) {
          const targetLetter = targetWord.split("")[ti];
          if (gLetter === targetLetter) {
            isUsedBool = setLetterAsUsed(isUsedBool, gLetter);
            if (guessBox) guessBox.style.backgroundColor = orange[500];
          }
        }
      }
      if (!isCorrect && !isUsedBool) {
        // the letter is wrong and unused
        setLetters(
          letters.map((row) =>
            row.map((letter) => {
              if (letter.letter === gLetter) {
                letter.isWrong = true;
                if (guessBox) guessBox.style.backgroundColor = red[500];
              }
              return letter;
            })
          )
        );
      }
    }

    // check guessed word is target word
    if (guessString === targetWord) {
      // the word is correct
      setErrorMessage(`WINNER! Next stop: ${targetPub}`);
      setCurrentRow(currentRow + 1);
      return null;
    }

    // increment the current row
    setCurrentRow(currentRow + 1);

    // check if the current row is the last row
    if (currentRow === displayGrid.length - 1) {
      setErrorMessage("You have not won this time...");
      return null;
    }

    setErrorMessage("");
  };

  return (
    <>
      <LettersContext.Provider
        value={{
          letters,
          targetWord,
          handleLetterClick,
          displayGrid,
          handleDeleteLastLetter,
          handleSubmit,
          errorMessage,
          currentRow,
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
