export default class JsonServer {
    private static url = "http://localhost:3001/users";

    static async getUserByUsername(username: string) {
        return fetch(`${JsonServer.url}?username=${username}`)
            .then((response) => {
                return response.json();
            })
            .then((users) => {
                return users[0]; // Prend le premier utilisateur qui correspond
            })
            .catch((error) => {
                console.error(`Erreur attrapée dans getUserByUsername : ` + error);
            });
    }

}
