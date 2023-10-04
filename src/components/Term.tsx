const Term = ({ id, name, onTermSelected }: any) => {
  return (
    <section className="">
      <button className="btn btn-secondary" onClick={() => onTermSelected(id)}>
        {name}
      </button>
    </section>
  );
};

export default Term;
