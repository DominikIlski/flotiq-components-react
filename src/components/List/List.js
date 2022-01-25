import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const List = ({ items, style, level, additionalClasses, ...props }) => {
    const ListType = style === 'ordered' ? 'ol' : 'ul';
    const listStyleClass = {
        ordered: 'list-decimal',
        unordered: 'list-disc',
    };
    const safeLevel = Math.max(level, 1);
    const marginClass = safeLevel === 1 ? 'ml-0' : 'ml-6';
    return (
        <ListType
            className={[
                'space-y-4',
                listStyleClass[style],
                'list-inside',
                marginClass,
                ...additionalClasses,
            ].join(' ')}
            {...props}
        >
            {items.map((item) => (
                <Fragment key={item.content}>
                    <li
                        dangerouslySetInnerHTML={{ __html: item.content }}
                        className="text-sm md:text-lg"
                    />
                    {(item.items && item.items.length > 0) && (
                        <List items={item.items} style={style} level={safeLevel + 1} />)}
                </Fragment>
            ))}
        </ListType>
    );
};

const Items = {
    content: PropTypes.string.isRequired,
};
Items.items = PropTypes.arrayOf(PropTypes.shape(Items));

List.propTypes = {
    /**
     * List content
     */
    items: PropTypes.arrayOf(PropTypes.shape(Items)).isRequired,
    /**
     * List style
     */
    style: PropTypes.oneOf(['ordered', 'unordered']),
    /**
     * List level
     */
    level: PropTypes.number,
    /**
     * Additional classes for list
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

List.defaultProps = {
    style: 'unordered',
    level: 1,
    additionalClasses: [],
};

export default List;
