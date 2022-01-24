import React from 'react';

import Card from '../components/Card/Card';
import { Body } from './CardBody.stories';
import { Image } from './CardImg.stories';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Flotiq components/Card',
    component: Card,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
    <div style={{ width: '18rem' }}>
        <Card {...args}>
            <Image {...Image.args} />
            <Body {...Body.args} />
        </Card>
    </div>
);

const VerticalTemplate = (args) => (
    <div>
        <Card {...args}>
            <Body {...Body.args} />
            <Image {...Image.args} />
        </Card>
    </div>
);

const SimpleTemplate = (args) => (
    <div style={{ width: '18rem' }}>
        <Card {...args}>
            <Body {...Body.args} />
        </Card>
    </div>
);

export const Standard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Standard.args = {
    ...Card.defaultProps,
};

export const Vertical = VerticalTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Vertical.args = {
    ...Card.defaultProps,
    vertical: true,
};

export const WithoutImage = SimpleTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithoutImage.args = {
    ...Card.defaultProps,
};
