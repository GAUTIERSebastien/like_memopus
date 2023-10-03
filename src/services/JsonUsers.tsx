export default class JsonUsers {
    private static url = "http://localhost:3001/users";

    static async loadUsers(username: string) {
        return fetch(`${JsonUsers.url}?username=${username}`)
            .then((response) => {
                return response.json();
            })
            // Prend le premier utilisateur qui correspond
            .then((users) => {
                return users[0]; 
            })
            .catch((error) => {
                console.error(`Erreur attrapée dans loadUsers : ` + error);
            });
    }

}
