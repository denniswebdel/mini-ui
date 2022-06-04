import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '@mui/material/Button';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Default',
  color: 'default',
};

export const Outline = Template.bind({});

Outline.args = {
  children: 'Outline',
  color: 'primary',
  variant: 'outlined'
};

export const Text = Template.bind({});

Text.args = {
  children: 'Text',
  color: 'primary',
  variant: 'text'
};

export const DisableShadow = Template.bind({});

DisableShadow.args = {
  children: 'DisableShadow',
  color: 'primary',
  disableElevation: true
};

export const Disabled = Template.bind({});

Disabled.args = {
  children: 'Disabled',
  color: 'primary',
  disabled: true
};
export const DisabledText = Template.bind({});

DisabledText.args = {
  children: 'Disabled Text',
  color: 'primary',
  variant: 'text',
  disabled: true
};

export const StartIcon = Template.bind({});

StartIcon.args = {
  children: 'Start Icon',
  color: 'primary',
  startIcon: <LocalGroceryStoreRoundedIcon />
};

export const EndIcon = Template.bind({});

EndIcon.args = {
  children: 'End Icon',
  color: 'primary',
  endIcon: <LocalGroceryStoreRoundedIcon />
};

export const Small = Template.bind({});

Small.args = {
  children: 'small',
  size: 'small',
  color: 'primary'
};
export const Medium = Template.bind({});

Medium.args = {
  children: 'medium',
  size: 'medium',
  color: 'primary'
};
export const Large = Template.bind({});
Large.args = {
  children: 'large',
  size: 'large',
  color: 'primary'
};

export const DefaultColor = Template.bind({});

DefaultColor.args = {
  children: 'Default Color',
  color: 'default',
};
export const PrimaryColor = Template.bind({});

PrimaryColor.args = {
  children: 'Primary Color',
  color: 'primary',
};
export const SecondaryColor = Template.bind({});

SecondaryColor.args = {
  children: 'Secondary Color',
  color: 'secondary',
};
export const DangerColor = Template.bind({});

DangerColor.args = {
  children: 'Danger Color',
  color: 'warning',
};

