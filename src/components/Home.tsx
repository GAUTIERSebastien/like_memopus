import { useState, useEffect } from "react";
import JsonTerms from "../services/JsonTerms";
import JsonColumns from "../services/JsonColumns";
import JsonCards from "../services/JsonCards";
import Term from './Term';



const Home = () => {
    const [terms, setTerms] = useState<any[]>([]);


    useEffect(() => {
        // Appel la méthode pour charger les termes
        JsonTerms.loadTerms().then(data => {
            setTerms(data);
        }).catch(error => {
            console.error("Erreur lors de la récupération des terms: ", error);
        });
    }, []); 
    return (
        <>
            <div>
                {terms.map((term, index) => (
                    <Term key={index} {...term} />
                ))}
            </div>
        </>
    );
}
export default Home;
