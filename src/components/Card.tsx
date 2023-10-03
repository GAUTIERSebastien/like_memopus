const Card = (card: any) => {
    return (
        <div className="card">
            <div className="card-body">
                <h6 className="card-title">Question: {card.question}</h6>
                <p className="card-text">Réponse: {card.answer}</p>
            </div>
        </div>
    );
}

export default Card;
