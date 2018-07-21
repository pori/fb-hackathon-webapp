import Card from "./Card";

export default function({ cards }) {
  return (
    <div className="gallery">
      {cards.map((card, i) => (
        <Card key={i} image={card.image} date={card.date} />
      ))}
      <style jsx>{`
        .gallery {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 1em;
        }
      `}</style>
    </div>
  );
}
