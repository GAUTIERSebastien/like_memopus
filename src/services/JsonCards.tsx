export default class JsonCards {

    private static url = "http://localhost:3001/cards";
  
    static async loadCards() {
      return fetch(JsonCards.url)
        .then((response) => {
          return response.json();
        })
        .then((cards) => {
          return cards;
        })
        .catch((error) => {
          console.error(`Erreur attrapée dans loadCards : ` + error);
        });
    }

    static async updateCard(card: any) {
      return fetch(`${JsonCards.url}/${card.id}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(card),
      }).then((response) => {
          return response.json();
      }).catch((error) => {
          console.error(`Erreur lors de la mise à jour de la card: ` + error);
      });
  }
  
}