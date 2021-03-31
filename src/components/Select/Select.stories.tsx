import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/react/types-6-0';

import {Select, SelectPropsType} from "./Select";
import UncontrolledAccordion from "../UncontrolledAccordion/UncontrolledAccordion";

export default {
    title: 'Accordion',
    component: Select,
    argTypes: {
        color: {
            control: 'color',
            table: {
                category: 'Colors'
            }
        }
    }
} as Meta;

const Template: Story<SelectPropsType> = (args) => <Select {...args}/>

export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
    items: [
        {
            title: "Gena", value: "2232332111"
        },
        {
            title: "Kolya", value: "--------"
        },
        {
            title: "Sergey", value: "!@#%^&*(*()"
        }
    ]
}

export const UnCollapsedMode = Template.bind({})
UnCollapsedMode.args = {
    items: [
        {
            title: "Gena", value: "2232332111"
        },
        {
            title: "Kolya", value: "--------"
        },
        {
            title: "Sergey", value: "!@#%^&*(*()"
        }
    ]
}

export const ModeChanging = () => {
    return <UncontrolledAccordion title="Click me"/>
}