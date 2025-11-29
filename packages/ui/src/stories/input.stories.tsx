import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '~/components/input';

const meta = {
  component: Input,
  title: 'Input',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    type: 'text',
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: 'Hello World',
    type: 'text',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter your email',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: 'Enter a number',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-64">
      <label htmlFor="input-example" className="text-sm font-medium">
        Label
      </label>
      <Input id="input-example" placeholder="Enter text..." />
    </div>
  ),
};
