import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import CardBody from './CardBody';
import CardTitle from './CardTitle';
import CardImg from './CardImg';
import CardText from './CardText';
import { Context } from './Context';
import { roundedProps } from '../../defaultProps/rounded';

const Card = ({ children,
    rounded,
    bordered,
    vertical,
    proportionsForVertical,
    additionalClasses,
    ...props }) => {
    const borderedClass = bordered ? 'border border-gray-200' : '';
    const context = useMemo(() => ({ vertical, proportionsForVertical }), [vertical, proportionsForVertical]);
    const directionClasses = vertical ? 'flex flex-wrap lg:flex-nowrap align-start' : 'flex-none';
    useEffect(() => {
        context.vertical = vertical;
        context.proportionsForVertical = proportionsForVertical;
    }, [context, vertical, proportionsForVertical]);
    return (
        <Context.Provider value={context}>
            <div
                className={[
                    directionClasses,
                    'bg-white',
                    'overflow-hidden',
                    roundedProps.classSet[rounded],
                    borderedClass,
                    ...additionalClasses,
                ].join(' ')}
                {...props}
            >
                {children}
            </div>
        </Context.Provider>
    );
};

class ProportionsForVertical {
    body;

    img;

    breakpoint;
}

Card.propTypes = {
    /**
     * Is this the rounded card?
     */
    rounded: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
    /**
     * Should the card has a border?
     */
    bordered: PropTypes.bool,
    /**
     * Should the card be vertical?
     */
    vertical: PropTypes.bool,
    /**
     * Should the card be vertical?
     */
    proportionsForVertical: PropTypes.objectOf(ProportionsForVertical),
    /**
     * Additional classes for card
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

Card.defaultProps = {
    rounded: 'lg',
    bordered: true,
    vertical: false,
    additionalClasses: [],
    proportionsForVertical: { body: '1/2', img: '1/2', breakpoint: 'md' },
};

Card.Body = CardBody;
Card.Title = CardTitle;
Card.Img = CardImg;
Card.Text = CardText;

export default Card;
