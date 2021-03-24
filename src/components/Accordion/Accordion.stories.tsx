import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/react/types-6-0';

import {Accordion, AccordionPropsType} from "./Accordion";
import UncontrolledAccordion from "../UncontrolledAccordion/UncontrolledAccordion";

export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            table: {
                category: 'Colors'
            }
        }
    }
} as Meta;

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
    title: "Collapsed mode on",
    collapsed: true
}

export const UnCollapsedMode = Template.bind({})
UnCollapsedMode.args = {
    title: "Collapsed mode off",
    collapsed: false
}

export const ModeChanging = () => {
    return <UncontrolledAccordion title="Click me"/>
}