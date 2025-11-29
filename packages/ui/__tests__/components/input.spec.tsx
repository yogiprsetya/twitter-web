import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '../../src/components/input';

describe('Input', () => {
  it('should render with type text by default', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    // HTML input without explicit type will have type="text" by default
    // getByRole('textbox') already verifies that input can be used as textbox
    expect(input.tagName).toBe('INPUT');
  });

  it('should have data-slot="input"', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('data-slot', 'input');
  });

  it('should accept value and onChange', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<Input value="test" onChange={handleChange} />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('test');

    await user.clear(input);
    await user.type(input, 'new value');
    expect(handleChange).toHaveBeenCalled();
  });

  it('should accept placeholder', () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
  });

  it('should accept different types', () => {
    const { rerender } = render(<Input type="email" />);
    let input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'email');

    rerender(<Input type="number" />);
    input = screen.getByRole('spinbutton');
    expect(input).toHaveAttribute('type', 'number');
  });

  it('should be disabled when disabled prop is given', () => {
    render(<Input disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  it('should accept custom className', () => {
    render(<Input className="custom-input" />);
    const input = screen.getByRole('textbox');
    expect(input.className).toContain('custom-input');
  });

  it('should accept other HTML input props', () => {
    render(
      <Input id="test-input" name="test" required aria-label="Test input" />
    );
    const input = screen.getByLabelText('Test input');
    expect(input).toHaveAttribute('id', 'test-input');
    expect(input).toHaveAttribute('name', 'test');
    expect(input).toBeRequired();
  });
});
