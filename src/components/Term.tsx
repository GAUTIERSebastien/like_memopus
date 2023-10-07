import React from "react";
import TermInterface from "../interfaces/TermInterface";

type TermProps = Omit<TermInterface, "open" | "selected"> & {
  onTermSelected: (id: number) => void;
};

const Term: React.FC<TermProps> = ({ id, name, onTermSelected }) => {
  return (
    <section className="">
      <button className="btn btn-secondary" onClick={() => onTermSelected(id)}>
        {name}
      </button>
    </section>
  );
};

export default Term;
