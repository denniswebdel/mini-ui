import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextField from '@mui/material/TextField';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';

export default {
  title: 'Atoms/TextField',
  component: TextField,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />


export const Default = Template.bind({});

Default.args = {
  label: 'Default',
};

export const Error = Template.bind({});

Error.args = {
  label: 'Error',
  error: true,
};

export const Disabled = Template.bind({});

Disabled.args = {
  label: 'Disabled',
  disabled: true,
};

export const HelperText = Template.bind({});

HelperText.args = {
  label: 'HelperText',
  helperText: 'some helpful text',
};

export const ErrorHelperText = Template.bind({});

ErrorHelperText.args = {
  label: 'ErrorHelperText',
  helperText: 'error message',
  error: true
};

export const StartIcon = Template.bind({});

StartIcon.args = {
  label: 'StartIcon',
  helperText: 'some interesting text',
  InputProps: {
    startAdornment: <PhoneRoundedIcon />,
  }
};

export const EndIcon = Template.bind({});

EndIcon.args = {
  label: 'EndIcon',
  helperText: 'some interesting text',
  InputProps: {
    endAdornment: <LockRoundedIcon />,
  }
};

export const TypeText = Template.bind({});

TypeText.args = {
  label: 'TypeText',
  helperText: 'some interesting text',
  type: 'text'
};

export const Small = Template.bind({});

Small.args = {
  label: 'Small',
  helperText: 'some interesting text',
  size: 'small'
};

export const Medium = Template.bind({});

Medium.args = {
  label: 'Medium',
  helperText: 'some interesting text',
  size: 'medium'
};

export const FullWidth = Template.bind({});

FullWidth.args = {
  label: 'FullWidth',
  helperText: 'some interesting text',
  fullWidth: true
};

export const Multiline = Template.bind({});

Multiline.args = {
  label: 'Multiline',
  helperText: 'some interesting text',
  multiline: true,
  rows:'4'
};

