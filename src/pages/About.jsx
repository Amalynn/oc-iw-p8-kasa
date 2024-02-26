import bannerAbout from '../assets/images/banner-about.jpg';
import Banner from '../components/Banner.jsx';

export default function About() {
    const imageTitle = 'Bannière de la page "A propos"';
    return (
        <>
            <Banner image={bannerAbout} imageTitle={imageTitle} />
        </>
    );
}
