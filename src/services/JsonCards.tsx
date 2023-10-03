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
}