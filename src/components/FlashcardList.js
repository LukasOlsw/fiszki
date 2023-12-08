import React from "react";
import Flashcard from "./Flashcard";

const FlashcardList = (props) => {
  return (
    <div className="cardList">
      {props.flashcards.map((flashcard) => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />;
      })}
    </div>
  );
};

export default FlashcardList;
