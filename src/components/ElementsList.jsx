import PropTypes from 'prop-types';

function ElementsList({ list, typeList, customClassName }) {
    let styleList = typeList === 'row' ? 'list-row' : 'list-column';

    return (
        <ul className={`list-reset ${styleList} ${customClassName}`}>
            {list.map((element, index) => (
                <li key={`item-${index}`}>{element}</li>
            ))}
        </ul>
    );
}

export default ElementsList;

ElementsList.propTypes = {
    list: PropTypes.array.isRequired,
    typeList: PropTypes.oneOf(['row', 'column']).isRequired,
    customClassName: PropTypes.string,
};

ElementsList.defaultProps = {
    customClassName: '',
};
