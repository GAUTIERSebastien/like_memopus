export default class JsonTerms {

    private static url = "http://localhost:3001/terms";
  
    static async loadTerms() {
      return fetch(JsonTerms.url)
        .then((response) => {
          return response.json();
        })
        .then((terms) => {
          return terms;
        })
        .catch((error) => {
          console.error(`Erreur attrapée dans loadTerms : ` + error);
        });
    }
}