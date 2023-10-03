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
    //Modifier la card
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
// Supprimer la card
  static async deleteCard(id: number) {
    return fetch(`${JsonCards.url}/${id}`, {
      method: 'DELETE',
      }).then((response) => {
      if (!response.ok) {
          throw new Error('Erreur lors de la suppression de la card');
      }
      }).catch((error) => {
      console.error(`Erreur attrapée dans deleteCard : ` + error);
      });
  } 
}