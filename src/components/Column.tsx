import  Card  from './Card';

const Column = ({ label, cards }: any) => {
  return (
    <div className="col-md-2">
          <h5>{label}</h5>
          {cards.map((card: any, index: number) => (
              <Card key={index} {...card} />
          ))}
      </div>
  );
}


export default Column;