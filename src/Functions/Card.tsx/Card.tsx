import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const PlaceholderCard = () => (
  <div className="p-4 border rounded shadow space-y-2 mb-4">
    <Skeleton height={20} width={150} />
    <Skeleton height={15} count={2} />
  </div>
);

type cardsType = {
  title: string;
  description: string;
};

const DataCard = ({ title, description }: cardsType) => (
  <div className="p-4 border rounded shadow">
    <h2 className="text-lg font-bold">{title}</h2>
    <p>{description}</p>
  </div>
);

const CardList = () => {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState<cardsType[]>([]);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setCards([
        { title: "Card 1", description: "Description 1" },
        { title: "Card 2", description: "Description 2" },
      ]);
      setLoading(false);
    }, 2000); // Simulate 2s loading
  }, []);

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
      {loading
        ? Array.from({ length: 2 }).map((_, i) => <PlaceholderCard key={i} />)
        : cards.map((card, i) => <DataCard key={i} {...card} />)}
    </div>
  );
};

export default CardList;
