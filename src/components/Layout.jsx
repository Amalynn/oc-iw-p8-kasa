import PropTypes from 'prop-types';

function Layout({ children }) {
    return <div className="main-container">{children}</div>;
}

export default Layout;

Layout.proTypes = {
    children: PropTypes.element,
};
