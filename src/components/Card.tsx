const Card = (card: any) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Question: {card.question}</h5>
                <p className="card-text">Réponse: {card.answer}</p>
                <p className="card-text">ID: {card.id}</p>
                <p className="card-text">Colonne: {card.column}</p>
                <p className="card-text">TID: {card.tid}</p>
            </div>
        </div>
    );
}

export default Card;
