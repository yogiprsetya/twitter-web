import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, AvatarImage, AvatarFallback } from '../components/avatar';

const meta = {
  component: Avatar,
  title: 'Avatar',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://invalid-url.com/image.png" alt="User" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
};

export const FallbackOnly: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar className="size-8">
        <AvatarImage src="https://github.com/shadcn.png" alt="Small" />
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar className="size-12">
        <AvatarImage src="https://github.com/shadcn.png" alt="Medium" />
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar className="size-16">
        <AvatarImage src="https://github.com/shadcn.png" alt="Large" />
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
      <Avatar className="size-24">
        <AvatarImage src="https://github.com/shadcn.png" alt="XLarge" />
        <AvatarFallback>XL</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const MultipleAvatars: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="User 1" />
        <AvatarFallback>U1</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/vercel.png" alt="User 2" />
        <AvatarFallback>U2</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>U3</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const WithCustomFallback: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
        <AvatarFallback className="bg-primary-blue text-white">
          JD
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://invalid-url.com/image.png" alt="User" />
        <AvatarFallback className="bg-dark-4 text-white font-bold">
          AB
        </AvatarFallback>
      </Avatar>
    </div>
  ),
};
