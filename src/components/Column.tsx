import  Card  from './Card';

const Column = ({ label, cards }: any) => {
  return (
      <div>
          <h2>{label}</h2>
          {cards.map((card: any, index: number) => (
              <Card key={index} {...card} />
          ))}
      </div>
  );
}


export default Column;