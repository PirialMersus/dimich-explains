import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';


import Select, { SelectPropsType } from "./Select";
import {action} from "@storybook/addon-actions";
import {items} from "../../App";


export default {
    title: 'Select',
    component: Select,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} as Meta;

// const Template: Story<RatingPropsType> = (args) => <Rating {...args} />;

export const SelectIsSelectCollapsedFalse = (props: SelectPropsType) => {
    return (
        <Select
            setValue={action("setValue")}
            items={items}
            value={1}
            isSelectCollapsed={false}
            setIsSelectCollapsed={action("setIsSelectCollapsed")}
        />)
}
export const SelectIsSelectCollapsedTrue = (props: SelectPropsType) => {
    return (
        <Select
            setValue={action("setValue")}
            items={items}
            value={1}
            isSelectCollapsed={true}
            setIsSelectCollapsed={action("setIsSelectCollapsed")}
        />)
}
export const SelectWithValue1 = (props: SelectPropsType) => {
    return (
        <Select
            setValue={action("setValue")}
            items={items}
            value={1}
            isSelectCollapsed={true}
            setIsSelectCollapsed={action("setIsSelectCollapsed")}
        />)
}
export const SelectWithValue2 = (props: SelectPropsType) => {
    return (
        <Select
            setValue={action("setValue")}
            items={items}
            value={2}
            isSelectCollapsed={true}
            setIsSelectCollapsed={action("setIsSelectCollapsed")}
        />)
}
export const SelectWithValue3 = (props: SelectPropsType) => {
    return (
        <Select
            setValue={action("setValue")}
            items={items}
            value={3}
            isSelectCollapsed={true}
            setIsSelectCollapsed={action("setIsSelectCollapsed")}
        />)
}
