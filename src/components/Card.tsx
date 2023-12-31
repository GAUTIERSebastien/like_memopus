import React, { useState } from "react";
import JsonCards from "../services/JsonCards";
import CardInterface from "../interfaces/CardInterface";

type MoveDirection = "left" | "right";

interface CardProps extends Omit<CardInterface, "moveCard"> {
  moveCard?: (direction: MoveDirection) => void;
}

const Card: React.FC<CardProps> = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [question, setQuestion] = useState(props.question);
  const [answer, setAnswer] = useState(props.answer);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");

  const saveChanges = async () => {
    const updatedCard = {
      id: props.id,
      tid: props.tid,
      column: props.column,
      selected: props.selected,
      question,
      answer,
    };

    await JsonCards.updateCard(updatedCard);
    setIsEditing(false);
  };

  const renderResponseSection = () => (
    <div className="mb-3">
      <label htmlFor="userAnswerInput" className="form-label">
        Votre réponse
      </label>
      <input
        type="text"
        className="form-control"
        id="userAnswerInput"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
      <div className="mt-2 d-flex justify-content-between">
        <button className="btn btn-info" onClick={() => setShowAnswer(true)}>
          Réponse
        </button>
        <button
          className="btn btn-outline-dark"
          onClick={() => setShowAnswer(false)}
        >
          Cacher la réponse
        </button>
      </div>
      {showAnswer && (
        <div className="alert alert-info mt-2" role="alert">
          Réponse: {answer}
        </div>
      )}
    </div>
  );

  return (
    <div className="card mb-3">
      <div className="card-body">
        {isEditing ? (
          <>
            <div className="mb-3">
              <label htmlFor="questionInput" className="form-label">
                Question
              </label>
              <input
                type="text"
                className="form-control"
                id="questionInput"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="answerInput" className="form-label">
                Réponse
              </label>
              <input
                type="text"
                className="form-control"
                id="answerInput"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-between">
              <button className="btn btn-success" onClick={saveChanges}>
                Enregistrer
              </button>
              <button
                className="btn btn-danger"
                onClick={async () => {
                  await JsonCards.deleteCard(props.id);
                  window.location.reload();
                }}
              >
                Supprimer
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setIsEditing(false)}
              >
                Annuler
              </button>
            </div>
          </>
        ) : (
          <>
            <section className="d-flex justify-content-between mb-3">
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => props.moveCard && props.moveCard("left")}
              >
                ←
              </button>
              <h6 className="card-title mb-0">{question}</h6>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => props.moveCard && props.moveCard("right")}
              >
                →
              </button>
            </section>
            {renderResponseSection()}
            <button
              className="btn btn-primary mt-2"
              onClick={() => setIsEditing(true)}
            >
              Modifier
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
