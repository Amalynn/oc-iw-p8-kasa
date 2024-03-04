import { useEffect, useState } from 'react';
import { useRef } from 'react';
import PropTypes from 'prop-types';
import arrowIcon from '../assets/icons/arrow-icon.svg';

export default function Collapse({ title, children, customClassNames }) {
    const ref = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setContentHeight(ref.current.scrollHeight);
        } else {
            setContentHeight(0);
        }
    }, [isOpen]);

    return (
        <section className={`collapse ${customClassNames}`}>
            <div className="collapse-header">
                <h2>{title}</h2>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen ? true : false}
                >
                    <img
                        src={arrowIcon}
                        className={isOpen ? 'rotate' : ''}
                        alt="Arrow icon"
                    />
                </button>
            </div>
            <div
                ref={ref}
                className={`collapse-body ${isOpen ? 'open' : ''}`}
                style={{ height: `${contentHeight}px` }}
            >
                <div className="collapse-body-content">{children}</div>
            </div>
        </section>
    );
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    customClassNames: PropTypes.string,
};

Collapse.defaultProps = {
    customClassNames: '',
};
