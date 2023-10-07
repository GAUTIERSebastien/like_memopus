import { useState, useEffect } from "react";
import JsonTerms from "../services/JsonTerms";
import JsonColumns from "../services/JsonColumns";
import JsonCards from "../services/JsonCards";
import Term from "./Term";
import Column from "./Column";
import CreateCardForm from "./CreateCardForm";
import TermInterface from "../interfaces/TermInterface";
import ColumnInterface from "../interfaces/ColumnInterface";
import CardInterface from "../interfaces/CardInterface";

const Home: React.FC = () => {
  const [terms, setTerms] = useState<TermInterface[]>([]);
  const [columns, setColumns] = useState<ColumnInterface[]>([]);
  const [cards, setCards] = useState<CardInterface[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedTermId, setSelectedTermId] = useState<null | number>(null);

  useEffect(() => {
    JsonTerms.loadTerms().then(setTerms).catch(console.error);
    JsonColumns.loadColumns().then(setColumns).catch(console.error);
    JsonCards.loadCards().then(setCards).catch(console.error);
  }, []);

  const handleCardCreated = (newCard: CardInterface) => {
    setCards([...cards, newCard]);
    setShowForm(false);
  };

  const handleCardMoved = (updatedCard: CardInterface) => {
    setCards((prevCards) =>
      prevCards.map((card) => (card.id === updatedCard.id ? updatedCard : card))
    );
  };

  const displayedCards = selectedTermId
    ? cards.filter((card) => card.tid === selectedTermId)
    : [];

  return (
    <>
      <h1 className="d-flex justify-content-center">Memopus</h1>
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

      <section className="container-fluid mt-5">
        <div className="row justify-content-center gap-2">
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
