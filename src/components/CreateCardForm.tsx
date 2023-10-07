import React, { useState } from "react";
import JsonCards from "../services/JsonCards";
import TermInterface from "../interfaces/TermInterface";

interface CreateCardFormProps {
  onCardCreated: (card: any) => void;
  terms: TermInterface[];
}

const CreateCardForm: React.FC<CreateCardFormProps> = ({
  onCardCreated,
  terms,
}) => {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [selectedTerm, setSelectedTerm] = useState<string | number>(
    terms[0]?.id.toString() || ""
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCard = {
      question,
      answer,
      tid: parseInt(selectedTerm.toString(), 10),
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
              {terms.map((term) => (
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
