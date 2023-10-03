export default class JsonColumns {

    private static url = "http://localhost:3001/columns";
  
    static async loadColumns() {
      return fetch(JsonColumns.url)
        .then((response) => {
          return response.json();
        })
        .then((columns) => {
          return columns;
        })
        .catch((error) => {
          console.error(`Erreur attrapée dans loadColumns : ` + error);
        });
    }
}