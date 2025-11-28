import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../components/button';

const meta = {
  component: Button,
  title: 'Button',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Tweet',
    variant: 'primary',
    size: 'med',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Cancel',
    variant: 'secondary',
    size: 'med',
  },
};

export const Link: Story = {
  args: {
    children: 'Learn more',
    variant: 'link',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center">
      <Button size="small">Small Button</Button>
      <Button size="med">Medium Button</Button>
      <Button size="big">Big Button</Button>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};
