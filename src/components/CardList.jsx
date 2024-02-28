import Card from './Card';
import apartments from '../datas/apartments.json';

function CardList() {
    return (
        <div className="card-list">
            {apartments.map((apartment) => (
                <Card
                    key={apartment.id}
                    id={apartment.id}
                    title={apartment.title}
                    cover={apartment.cover}
                />
            ))}
        </div>
    );
}

export default CardList;
