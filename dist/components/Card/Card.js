function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import CardBody from './CardBody';
import CardTitle from './CardTitle';
import CardImg from './CardImg';
import CardText from './CardText';
import { Context } from './Context';
import { roundedProps } from '../../defaultProps/rounded';

const calcBasisClass = (scale, isVertical, breakpoint = 'md') => {
  if (scale && isVertical) {
    return `${breakpoint}:basis-${scale}`;
  }

  return '';
};

const Card = ({
  children,
  rounded,
  bordered,
  vertical,
  proportionsForVertical,
  additionalClasses,
  ...props
}) => {
  const borderedClass = bordered ? 'border border-gray-200' : '';
  const directionClasses = vertical ? 'flex flex-wrap justify-between align-start' : 'flex-none';
  const context = useMemo(() => ({
    vertical,
    basisClassImage: calcBasisClass(proportionsForVertical?.img, vertical, proportionsForVertical?.breakpoint),
    basisClassBody: calcBasisClass(proportionsForVertical?.body, vertical, proportionsForVertical?.breakpoint)
  }), [vertical, proportionsForVertical]);
  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: context
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: [directionClasses, 'bg-white', 'overflow-hidden', roundedProps.classSet[rounded], borderedClass, ...additionalClasses].join(' ')
  }, props), children));
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
  additionalClasses: PropTypes.arrayOf(PropTypes.string)
};
Card.defaultProps = {
  rounded: 'lg',
  bordered: true,
  vertical: false,
  additionalClasses: [],
  proportionsForVertical: {
    body: '1/2',
    img: '1/2',
    breakpoint: 'md'
  }
};
Card.Body = CardBody;
Card.Title = CardTitle;
Card.Img = CardImg;
Card.Text = CardText;
export default Card;