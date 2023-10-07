import React, { useState, useEffect } from "react";
import Card from "./Card";
import JsonCards from "../services/JsonCards";
import JsonColumns from "../services/JsonColumns";

interface ColumnProps {
  label: string;
  cards: any[];
  columns: any[];
  onCardMoved: (updatedCard: any) => void;
}

const Column: React.FC<ColumnProps> = ({
  label,
  cards,
  columns,
  onCardMoved,
}) => {
  const [localColumns, setLocalColumns] = useState(columns);

  useEffect(() => {
    JsonColumns.loadColumns().then(setLocalColumns).catch(console.error);
  }, []);

  const moveCard = (
    direction: "left" | "right",
    cardId: number,
    currentColumnId: number
  ) => {
    let columnIndex = localColumns.findIndex(
      (column) => column.id === currentColumnId
    );
    if (columnIndex === -1) return;

    let newColumnIndex =
      direction === "left"
        ? (columnIndex - 1 + localColumns.length) % localColumns.length
        : (columnIndex + 1) % localColumns.length;

    if (newColumnIndex < 0 || newColumnIndex >= localColumns.length) return;

    let newColumnId = localColumns[newColumnIndex].id;
    let updatedCard = {
      ...cards.find((card) => card.id === cardId),
      column: newColumnId,
    };

    // Met à jour la base de données
    JsonCards.updateCard(updatedCard).then((cardFromDb) => {
      onCardMoved(cardFromDb);
    });
  };

  return (
    <div className="col-md-2">
      {" "}
      <h5 className="text-center mb-4">{label}</h5>{" "}
      {cards.map((card) => (
        <Card
          key={card.id}
          {...card}
          moveCard={(direction: "left" | "right") =>
            moveCard(direction, card.id, card.column)
          }
        />
      ))}
    </div>
  );
};

export default Column;
