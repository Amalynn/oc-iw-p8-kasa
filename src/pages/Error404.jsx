import { Link } from 'react-router-dom';
import BrowserTabTitle from '../components/BrowserTabTitle.jsx';

export default function Error404() {
    return (
        <main>
            <BrowserTabTitle tabTitle={'Erreur 404 - Page introuvable'} />
            <section className="error404">
                <h1>404</h1>
                <p>Oups! La page que vous demandez n&apos;existe pas</p>
                <Link to="/">Retourner sur la page d&apos;accueil</Link>
            </section>
        </main>
    );
}
