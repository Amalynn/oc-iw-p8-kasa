import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Card({ id, title, cover }) {
    return (
        <Link to={`/apartment/${id}`}>
            <div className="card">
                <img src={cover} alt={title} />
                <div className="text-overlay card-title">
                    <h2>{title}</h2>
                </div>
            </div>
        </Link>
    );
}

export default Card;

Card.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    cover: PropTypes.string,
};
