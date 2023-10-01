import { useLoaderData, useFetcher } from "react-router-dom";
import Term from "./Term";

const Terms = () => {
    const terms:any = useLoaderData();
    const fetcher = useFetcher();
    return (
        <>
            <h2>Terms</h2>
            <fetcher.Form action="/add/term" method="POST">
                <label htmlFor="add-term">Name</label>
                <input type="text" name="term_name" id="add-term" />
                <input type="submit" value="Ajouter un term" />
            </fetcher.Form>
            {terms.map((term:any) => <Term key={term.id} term={term} />)}
            </>
     );
}

export default Terms;