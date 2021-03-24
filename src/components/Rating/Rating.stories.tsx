import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import {Rating, RatingPropsType} from "./Rating";
import UncontrolledRating from "../UncontrolledRating/UncontrolledRating";

export default {
    title: 'Rating stories',
    component: Rating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<RatingPropsType> = (args) => <Rating {...args} />;

export const EmptyStars = () => <Rating rating={0} />
export const Rating1 = () => <Rating rating={1} />
export const Rating2 = () => <Rating rating={2}/>
export const Rating3 = () => <Rating rating={3} />
export const Rating4 = () => <Rating rating={4} />
export const Rating5 = () => <Rating rating={5} />
export const Rating6 = () => <Rating rating={6} />
export const ChangeRating = () => {
    return <UncontrolledRating />
}