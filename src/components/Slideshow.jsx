import { useState } from 'react';
import arrowLeft from '../assets/icons/arrow-left-icon.svg';
import arrowRight from '../assets/icons/arrow-right-icon.svg';
import { PropTypes } from 'prop-types';

export default function Slideshow({ pictures, title }) {
    const [indexPictures, setIndexPictures] = useState(0);
    let numberOfPictures = pictures.length;
    let isNumberOfPicturesGreatherThanOne = numberOfPictures > 1;

    function handleNextClick() {
        setIndexPictures((index) =>
            index === numberOfPictures - 1 ? 0 : index + 1,
        );
    }

    function handlePreviousClick() {
        setIndexPictures((index) =>
            index === 0 ? numberOfPictures - 1 : index - 1,
        );
    }

    return isNumberOfPicturesGreatherThanOne ? (
        <div className="slideshow">
            <img
                src={pictures[indexPictures]}
                alt={`${title} - Image n°${indexPictures + 1}`}
                className="slideshow-img"
            />
            <div
                className="slideshow-arrow-container slideshow-arrow-container--left"
                onClick={handlePreviousClick}
            >
                <img
                    src={arrowLeft}
                    alt="Arrow left icon"
                    className="slideshow-arrow"
                />
            </div>

            <div
                className="slideshow-arrow-container slideshow-arrow-container--right"
                onClick={handleNextClick}
            >
                <img
                    src={arrowRight}
                    alt="Arrow right icon"
                    className="slideshow-arrow"
                />
            </div>
            <p className="slideshow-index-img">{`${indexPictures + 1}/${numberOfPictures}`}</p>
        </div>
    ) : (
        <div className="slideshow">
            <img
                src={pictures[0]}
                alt={`${title} - Image n°1`}
                className="slideshow-img"
            />
        </div>
    );
}

Slideshow.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
};
