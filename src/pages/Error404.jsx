import { Link } from 'react-router-dom';

export default function Error404() {
    return (
        <main>
            <section className="error404">
                <h1>404</h1>
                <p>Oups! La page que vous demandez n&apos;existe pas</p>
                <Link to="/">Retourner sur la page d&apos;accueil</Link>
            </section>
        </main>
    );
}
