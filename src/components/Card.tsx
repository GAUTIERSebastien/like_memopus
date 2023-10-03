import React, { useState } from 'react';
import JsonCards from '../services/JsonCards';

const Card = (props: any) => {
    const [isEditing, setIsEditing] = useState(false);
    const [question, setQuestion] = useState(props.question);
    const [answer, setAnswer] = useState(props.answer);

    const saveChanges = () => {
        const updatedCard = { ...props, question, answer };
        JsonCards.updateCard(updatedCard).then(() => {
            setIsEditing(false);
        });
    };

    return (
        <div className="card mb-3">
            <div className="card-body">
                {isEditing ? (
                    <div>
                        <div className="mb-3">
                            <label htmlFor="questionInput" className="form-label">Question</label>
                            <input type="text" className="form-control" id="questionInput" value={question} onChange={(e) => setQuestion(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="answerInput" className="form-label">Réponse</label>
                            <input type="text" className="form-control" id="answerInput" value={answer} onChange={(e) => setAnswer(e.target.value)} />
                        </div>
                        <button className="btn btn-success" onClick={saveChanges}>Enregistrer</button>
                        <button className="btn btn-secondary ms-2" onClick={() => setIsEditing(false)}>Annuler</button>
                    </div>
                ) : (
                    <>
                        <h6 className="card-title">Question: {question}</h6>
                        <p className="card-text">Réponse: {answer}</p>
                        <button className="btn btn-primary" onClick={() => setIsEditing(true)}>Modifier</button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Card;
