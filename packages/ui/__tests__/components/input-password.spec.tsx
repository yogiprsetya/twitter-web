import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputPassword } from '../../src/components/input-password';

describe('InputPassword', () => {
  it('should render input with type password by default', () => {
    const { container } = render(<InputPassword />);
    const input = container.querySelector('input[type="password"]');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'password');
  });

  it('should show toggle password visibility button', () => {
    render(<InputPassword />);
    const toggleButton = screen.getByRole('button', { name: /show password/i });
    expect(toggleButton).toBeInTheDocument();
  });

  it('should change type to text when show button is clicked', async () => {
    const user = userEvent.setup();
    const { container } = render(<InputPassword />);

    const toggleButton = screen.getByRole('button', { name: /show password/i });
    const input = container.querySelector('input') as HTMLInputElement;

    expect(input).toHaveAttribute('type', 'password');

    await user.click(toggleButton);

    expect(input).toHaveAttribute('type', 'text');
    expect(
      screen.getByRole('button', { name: /hide password/i })
    ).toBeInTheDocument();
  });

  it('should change type back to password when hide button is clicked', async () => {
    const user = userEvent.setup();
    const { container } = render(<InputPassword />);

    const toggleButton = screen.getByRole('button', { name: /show password/i });
    const input = container.querySelector('input') as HTMLInputElement;

    // Click to show
    await user.click(toggleButton);
    expect(input).toHaveAttribute('type', 'text');

    // Click to hide
    const hideButton = screen.getByRole('button', { name: /hide password/i });
    await user.click(hideButton);
    expect(input).toHaveAttribute('type', 'password');
  });

  it('should accept value and onChange', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    const { container } = render(
      <InputPassword value="password123" onChange={handleChange} />
    );

    const input = container.querySelector('input') as HTMLInputElement;
    expect(input).toHaveValue('password123');

    await user.clear(input);
    await user.type(input, 'newpassword');
    expect(handleChange).toHaveBeenCalled();
  });

  it('should accept placeholder', () => {
    render(<InputPassword placeholder="Enter password" />);
    const input = screen.getByPlaceholderText('Enter password');
    expect(input).toBeInTheDocument();
  });

  it('should be disabled when disabled prop is given', () => {
    const { container } = render(<InputPassword disabled />);
    const input = container.querySelector('input');
    expect(input).toBeDisabled();
  });

  it('should accept custom className', () => {
    const { container } = render(<InputPassword className="custom-password" />);
    const wrapper = container.querySelector('.custom-password');
    expect(wrapper).toBeInTheDocument();
  });

  it('should accept other HTML input props', () => {
    render(
      <InputPassword
        id="password-input"
        name="password"
        required
        aria-label="Password input"
      />
    );
    const input = screen.getByLabelText('Password input');
    expect(input).toHaveAttribute('id', 'password-input');
    expect(input).toHaveAttribute('name', 'password');
    expect(input).toBeRequired();
  });
});
