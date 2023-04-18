// React
import React, { useState, useEffect } from "react";
// Components
import { Card } from "./Card";

const images = [
  { src: "https://i.imgur.com/lF4xRMH.png", matched: false },
  { src: "https://i.imgur.com/RSQuQbW.png", matched: false },
  { src: "https://i.imgur.com/Kh36Chv.png", matched: false },
  { src: "https://i.imgur.com/HQke0I9.png", matched: false },
  { src: "https://i.imgur.com/fzSDTfe.png", matched: false },
  { src: "https://i.imgur.com/352v8ZO.png", matched: false }
];

export const Game = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // Shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: index }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  // Handle a choice
  const handleChoice = card => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // Compare cards and match them
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // Reset turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
  };

  // Check best score
  useEffect(() => {
    let filteredArray = cards && cards.filter(card => card.matched);
    if (
      Object.entries(filteredArray).toString() ===
      Object.entries(cards).toString()
    ) {
      if (turns >= 6) {
        bestScore
          ? setBestScore(prevState => (prevState > turns ? turns : prevState))
          : setBestScore(prevState => prevState + turns);
      }
    }
  }, [cards]);

  // Shuffle cards on first load
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <section className="mt-8 max-w-3xl mx-auto">
      <header className="flex flex-col justify-center items-center md:flex-row md:justify-between">
        <button
          onClick={shuffleCards}
          className="relative text-center font-bold text-2xl text-main-white py-2 px-4 bg-none rounded-full border-2 border-main-white cursor-pointer transition duration-500 ease-out hover:bg-main-white hover:text-main-black md:text-3xl"
        >
          New Game
        </button>
        <div className="pt-3 pb-1 text-center text-main-white sm:text-lg md:text-right">
          <p>Best Score: {bestScore}</p>
          <p>Turns: {turns}</p>
        </div>
      </header>
      <div className="w-[90%] max-w-3xl my-4 mx-auto grid grid-cols-3 gap-2 md:w-full sm:gap-4 sm:grid-cols-4">
        {cards &&
          cards.map(card => (
            <Card
              card={card}
              key={card.id}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          ))}
      </div>
    </section>
  );
};
