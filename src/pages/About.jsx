import bannerAbout from '../assets/images/banner-about.jpg';
import Banner from '../components/Banner.jsx';
import Collapse from '../components/Collapse.jsx';

export default function About() {
    const imageTitle = 'Bannière de la page "A propos"';
    return (
        <>
            <Banner image={bannerAbout} imageTitle={imageTitle} />

            <div className="collapse-about">
                <Collapse title="Fiabilité">
                    <p>
                        Les annonces postées sur Kasa garantissent une fiabilité
                        totale. Les photos sont conformes aux logements, et
                        toutes les informations sont régulièrement vérifiées par
                        nos équipes.
                    </p>
                </Collapse>
                <Collapse title="Respect">
                    <p>
                        La bienveillance fait partie des valeurs fondatrices de
                        Kasa. Tout comportement discriminatoires ou de
                        perturbation du voisinage entraînera une exclusion de
                        notre plateforme.
                    </p>
                </Collapse>
                <Collapse title="Service">
                    <p>
                        La bienveillance fait partie des valeurs fondatrices de
                        Kasa. Tout comportement discriminatoires ou de
                        perturbation du voisinage entraînera une exclusion de
                        notre plateforme.
                    </p>
                </Collapse>
                <Collapse title="Sécurité">
                    <p>
                        La sécurité est la priorité de Kasa. Aussi bien pour nos
                        hôtes que pour les voyageurs, chaque logement correspond
                        aux critères de sécurité établis par nos services. En
                        laissant une note aussi bien à l&apos;hôte qu&apos;au
                        locataire, cela permet à nos équipes de vérifier que les
                        standards sont bien respectés. Nous organisonségalement
                        des ateliers sur la sécurité domestique pour nos hôtes.
                    </p>
                </Collapse>
            </div>
        </>
    );
}
