import star from '../assets/icons/star-rating-icon.svg';
import starDefault from '../assets/icons/star-rating-default-icon.svg';
import PropTypes from 'prop-types';

export default function Rating({ rating }) {
    const ratingMax = 5;
    const range = Array.from({ length: ratingMax }, (_, index) => index + 1);
    let ratingInt = Number.parseInt(rating);
    let ratingDefault = ratingMax - ratingInt;

    return (
        <div className="rating">
            {range.map((elementRange) =>
                ratingInt >= elementRange ? (
                    <img
                        key={`ratingScale-${elementRange}`}
                        src={star}
                        alt="Star icon"
                        className="rating-icon"
                    />
                ) : null,
            )}

            {range.map((elementRange) =>
                ratingDefault >= elementRange ? (
                    <img
                        key={`ratingDefault-${elementRange}`}
                        src={starDefault}
                        alt="star icon by default"
                        className="rating-default-icon"
                    />
                ) : null,
            )}
        </div>
    );
}

Rating.propTypes = {
    rating: PropTypes.string.isRequired,
};
