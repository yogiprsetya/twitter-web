import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputPassword } from '../components/input-password';

const meta = {
  component: InputPassword,
  title: 'InputPassword',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputPassword>;
export default meta;

type Story = StoryObj<typeof InputPassword>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your password',
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: 'mySecretPassword123',
    placeholder: 'Enter your password',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Enter your password',
    disabled: true,
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-64">
      <label htmlFor="password-example" className="text-sm font-medium">
        Password
      </label>
      <InputPassword id="password-example" placeholder="Enter your password" />
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    placeholder: 'Click the eye icon to toggle visibility',
  },
  parameters: {
    docs: {
      description: {
        story: 'Click the eye icon to show/hide password.',
      },
    },
  },
};
