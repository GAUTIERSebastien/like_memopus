import React, { useState } from 'react';
import JsonCards from '../services/JsonCards';

const CreateCardForm = ({ onCardCreated }: any) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newCard = { question, answer };
        JsonCards.createCard(newCard).then(card => {
            setQuestion('');
            setAnswer('');
            onCardCreated(card);
        });
    };

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">Nouvelle Carte</h5>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="newQuestion" className="form-label">Question</label>
                        <input type="text" className="form-control" id="newQuestion" value={question} onChange={(e) => setQuestion(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="newAnswer" className="form-label">Réponse</label>
                        <input type="text" className="form-control" id="newAnswer" value={answer} onChange={(e) => setAnswer(e.target.value)} required />
                    </div>
                    <button className="btn btn-primary">Ajouter</button>
                </form>
            </div>
        </div>
    );
}

export default CreateCardForm;
