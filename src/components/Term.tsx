import { Link } from 'react-router-dom';
const Term = (props: any) => {
  return (
    <section className="">
      <button className="btn btn-secondary">
        <Link to={'/terms/' + props.term.id}>{props.term.name}</Link>
      </button>
    </section>
  );
}

export default Term;