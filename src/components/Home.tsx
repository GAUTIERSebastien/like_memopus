import { useState, useEffect } from "react";
import JsonTerms from "../services/JsonTerms";
import JsonColumns from "../services/JsonColumns";
import JsonCards from "../services/JsonCards";
import Term from './Term';
import Column from './Column';



const Home = () => {
    const [terms, setTerms] = useState<any[]>([]);
    const [columns, setColumns] = useState<any[]>([]);


    useEffect(() => {
        // Appel la méthode pour charger les termes
        JsonTerms.loadTerms().then(data => {
            setTerms(data);
        }).catch(error => {
            console.error("Erreur lors de la récupération des terms: ", error);
        });

        JsonColumns.loadColumns().then(data => {
            setColumns(data);
        }).catch(error => {
            console.error("Erreur lors de la récupération des columns: ", error);
        });


    }, []); 
    return (
        <>
            <section>
                {terms.map((term, index) => (
                    <Term key={index} {...term} />
                ))}
            </section>
            <section>
                {columns.map((column, index) => (
                    <Column key={index} {...column} />
                ))}
            </section>
            
        </>
    );
}
export default Home;
