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

  useEffect(() => {
    // Appel les méthodes pour charger les terms,cards et columns
    JsonTerms.loadTerms()
      .then((data) => {
        setTerms(data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des terms: ", error);
      });

    JsonColumns.loadColumns()
      .then((data) => {
        setColumns(data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des columns: ", error);
      });

    JsonCards.loadCards()
      .then((data) => {
        setCards(data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des cards: ", error);
      });
  }, []);

  const handleCardCreated = (newCard: any) => {
    setCards([...cards, newCard]);
    setShowForm(false);
  };
  return (
    <>
      <section className="container">
        <div className="d-flex justify-content-center flex-wrap gap-3">
          {terms.map((term, index) => (
            <Term key={index} {...term} />
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
          {columns.map((column, index) => {
            const columnCards = cards.filter(
              (card) => card.column === column.id
            );
            return <Column key={index} {...column} cards={columnCards} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
