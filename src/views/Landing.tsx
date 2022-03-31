// react import
import { createContext, useState, useContext, useEffect } from "react";

// controller import
import { QuizzleController } from "../controllers/Quizzle.Controller";

// import components
import Nav from "../components/Nav";
import WordleBoxes from "../components/WordleBoxes";
import Keyboard from "../components/Keyboard";
import Feedback from "../components/Feedback";

// declare types
export type AnswerContent = {
  targetWord: string;
};

// create context
export const AnswerContext = createContext<AnswerContent>({
  targetWord: "",
});

// export use context
export const useAnswerContext = () => useContext(AnswerContext);

export default function Landing() {
  const [targetWord, setTargetWord] = useState("");
  const [targetPub, setTargetPub] = useState("");

  useEffect(() => {
    QuizzleController.generateQuizzleWord().then((word) => {
      setTargetWord(word);
      return;
    });

    QuizzleController.generatePubName().then((name) => {
      setTargetPub(name);
    });
  }, []);

  return (
    <>
      <AnswerContext.Provider value={{ targetWord }}>
        <Nav />
        <WordleBoxes />
        <Keyboard />
        <Feedback />
      </AnswerContext.Provider>
    </>
  );
}
