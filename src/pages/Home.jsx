import Banner from '../components/Banner.jsx';
import bannerHome from '../assets/images/banner-home.jpg';
import CardList from '../components/CardList.jsx';
import BrowserTabTitle from '../components/BrowserTabTitle.jsx';

export default function Home() {
    const bannerTitle = 'Chez vous, partout et ailleurs';
    const imageTitle = "Bannière de la page d'acceuil";

    return (
        <>
            <BrowserTabTitle tabTitle={'Accueil'} />
            <Banner
                bannerTitle={bannerTitle}
                image={bannerHome}
                imageTitle={imageTitle}
            />
            <main>
                <CardList />
            </main>
        </>
    );
}
