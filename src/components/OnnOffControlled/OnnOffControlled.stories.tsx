import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta} from '@storybook/react/types-6-0';

import {OnnOffControlled} from "./OnnOffControlled";
import {OnnOff} from "../OnnOff/OnnOff";

export default {
    title: 'OnOff',
    component: OnnOffControlled,
} as Meta;

// const Template: Story<OnnOffControlledPropsType> = (args) => <OnnOffControlled {...args} />;

export const OnnOffWithOnProps = () => <OnnOffControlled on/>
export const OnnOffWithOffProps = () => <OnnOffControlled on={false}/>
export const ModeChangingWithDefaultValueOn = () => {
    return <OnnOff defaultValue={true}/>
}
export const ModeChangingWithDefaultValueOff = () => {
    return <OnnOff defaultValue={false}/>
}