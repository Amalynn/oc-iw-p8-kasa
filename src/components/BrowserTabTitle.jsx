import { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function BrowserTabTitle({ tabTitle }) {
    useEffect(() => {
        document.title = `Kasa | ${tabTitle}`;
    }, [tabTitle]);

    return null;
}

BrowserTabTitle.propTypes = {
    tabTitle: PropTypes.string.isRequired,
};
