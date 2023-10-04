import { useState, useEffect } from "react";
import JsonTerms from "../services/JsonTerms";
import JsonColumns from "../services/JsonColumns";
import JsonCards from "../services/JsonCards";
import Term from "./Term";
import Column from "./Column";
import CreateCardForm from "./CreateCardForm";

const Home = () => {
  const [terms, setTerms] = useState<any[]>([]);
  const [columns, setColumns] = useState<any[]>([]);
  const [cards, setCards] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedTermId, setSelectedTermId] = useState<null | number>(null);

  useEffect(() => {
    JsonTerms.loadTerms().then(setTerms).catch(console.error);
    JsonColumns.loadColumns().then(setColumns).catch(console.error);
    JsonCards.loadCards().then(setCards).catch(console.error);
  }, []);

  const handleCardCreated = (newCard: any) => {
    setCards([...cards, newCard]);
    setShowForm(false);
  };

  const handleCardMoved = (updatedCard: any) => {
    setCards((prevCards) =>
      prevCards.map((card) => (card.id === updatedCard.id ? updatedCard : card))
    );
  };

  const displayedCards = selectedTermId
    ? cards.filter((card) => card.tid === selectedTermId)
    : [];

  return (
    <>
      <section className="container">
        <div className="d-flex justify-content-center flex-wrap gap-3">
          {terms.map((term) => (
            <Term key={term.id} {...term} onTermSelected={setSelectedTermId} />
          ))}
        </div>
      </section>

      <section className="container mt-3">
        <button
          className="btn btn-primary mb-3"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Annuler" : "Ajouter une nouvelle carte"}
        </button>
        {showForm && (
          <div className="row justify-content-center">
            <div className="col-md-6">
              <CreateCardForm onCardCreated={handleCardCreated} terms={terms} />
            </div>
          </div>
        )}
      </section>

      <section className="container mt-5">
        <div className="row justify-content-center gap-3">
          {columns.map((column) => {
            const columnCards = displayedCards.filter(
              (card) => card.column === column.id
            );
            return (
              <Column
                key={column.id}
                {...column}
                cards={columnCards}
                onCardMoved={handleCardMoved}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
