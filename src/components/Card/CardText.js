import React from 'react';
import PropTypes from 'prop-types';

const CardText = ({ children, additionalClasses = [] }) => (
    <p className={['text-base', 'font-light', 'my-4', ...additionalClasses].join(' ')}>
        {children}
    </p>
);

CardText.propTypes = {
    /**
     * Additional classes for card text
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

CardText.defaultProps = {
    additionalClasses: [],
};

export default CardText;
