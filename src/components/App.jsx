import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import ApartmentDetails from '../pages/ApartmentDetails.jsx';
import Error404 from '../pages/Error404.jsx';
import Layout from './Layout.jsx';

export default function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route
                        path="/apartment/:id"
                        element={<ApartmentDetails />}
                    />
                    <Route path="/error404" element={<Error404 />} />
                    <Route
                        path="*"
                        element={<Navigate to="/error404" replace />}
                    />
                </Routes>
            </Layout>

            <Footer />
        </BrowserRouter>
    );
}
