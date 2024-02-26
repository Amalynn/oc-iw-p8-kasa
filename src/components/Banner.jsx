import PropTypes from 'prop-types';

function Banner({ bannerTitle, image, imageTitle }) {
    return (
        <section className="hero-banner">
            <img src={image} alt={imageTitle} />
            <div className="text-overlay hero-banner-title">
                <h1>{bannerTitle}</h1>
            </div>
        </section>
    );
}

Banner.propTypes = {
    bannerTitle: PropTypes.string,
    image: PropTypes.string.isRequired,
    imageTitle: PropTypes.string.isRequired,
};

Banner.defaultProps = {
    bannerTitle: '',
};

export default Banner;
