import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: ['primary', 'default', 'dashed', 'text', 'link'],
            },
        },
        danger: { control: 'boolean' },
        disabled: { control: 'boolean' },
        loading: { control: 'boolean' },
        onClick: { action: 'clicked' },
    },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: 'primary',
    children: 'Primary Button',
};

export const Default = Template.bind({});
Default.args = {
    variant: 'default',
    children: 'Default Button',
};

export const Dashed = Template.bind({});
Dashed.args = {
    variant: 'dashed',
    children: 'Dashed Button',
};

export const Text = Template.bind({});
Text.args = {
    variant: 'text',
    children: 'Text Button',
};

export const Link = Template.bind({});
Link.args = {
    variant: 'link',
    children: 'Link Button',
};

export const Danger = Template.bind({});
Danger.args = {
    variant: 'primary',
    danger: true,
    children: 'Danger Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
    variant: 'primary',
    disabled: true,
    children: 'Disabled Button',
};

export const Loading = Template.bind({});
Loading.args = {
    variant: 'primary',
    loading: true,
    children: 'Loading Button',
};