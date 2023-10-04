import React, { useState } from "react";
import JsonCards from "../services/JsonCards";

const CreateCardForm = ({ onCardCreated, terms }: any) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [selectedTerm, setSelectedTerm] = useState(terms[0]?.id || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCard = {
      question,
      answer,
      tid: parseInt(selectedTerm),
      column: 1,
      selected: false,
    };
    JsonCards.createCard(newCard).then((card) => {
      setQuestion("");
      setAnswer("");
      onCardCreated(card);
    });
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Nouvelle Carte</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="newQuestion" className="form-label">
              Question
            </label>
            <input
              type="text"
              className="form-control"
              id="newQuestion"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="newAnswer" className="form-label">
              Réponse
            </label>
            <input
              type="text"
              className="form-control"
              id="newAnswer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="termSelect" className="form-label">
              Term
            </label>
            <select
              className="form-control"
              id="termSelect"
              value={selectedTerm}
              onChange={(e) => setSelectedTerm(e.target.value)}
            >
              {terms.map((term: any) => (
                <option key={term.id} value={term.id}>
                  {term.name}
                </option>
              ))}
            </select>
          </div>
          <button className="btn btn-primary">Ajouter</button>
        </form>
      </div>
    </div>
  );
};

export default CreateCardForm;
