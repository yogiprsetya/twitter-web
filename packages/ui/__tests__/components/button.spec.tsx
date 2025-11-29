import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../../src/components/button';

describe('Button', () => {
  it('should render with given text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should have data-slot="button"', () => {
    render(<Button>Test</Button>);
    const button = screen.getByText('Test');
    expect(button).toHaveAttribute('data-slot', 'button');
  });

  it('should call onClick handler when clicked', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<Button onClick={handleClick}>Click me</Button>);

    await user.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled prop is given', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByText('Disabled');
    expect(button).toBeDisabled();
  });

  it('should use primary variant by default', () => {
    render(<Button>Default</Button>);
    const button = screen.getByText('Default');
    expect(button.className).toContain('bg-primary-blue');
  });

  it('should use secondary variant when given', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByText('Secondary');
    expect(button.className).toContain('bg-transparent');
    expect(button.className).toContain('border-primary-blue');
  });

  it('should use link variant when given', () => {
    render(<Button variant="link">Link</Button>);
    const button = screen.getByText('Link');
    expect(button.className).toContain('bg-transparent');
  });

  it('should use med size by default', () => {
    render(<Button>Default Size</Button>);
    const button = screen.getByText('Default Size');
    expect(button.className).toContain('h-10');
  });

  it('should use small size when given', () => {
    render(<Button size="small">Small</Button>);
    const button = screen.getByText('Small');
    expect(button.className).toContain('h-[30px]');
  });

  it('should use big size when given', () => {
    render(<Button size="big">Big</Button>);
    const button = screen.getByText('Big');
    expect(button.className).toContain('h-12');
  });

  it('should accept custom className', () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByText('Custom');
    expect(button.className).toContain('custom-class');
  });

  it('should accept other HTML button props', () => {
    render(
      <Button type="submit" aria-label="Submit">
        Submit
      </Button>
    );
    const button = screen.getByText('Submit');
    expect(button).toHaveAttribute('type', 'submit');
    expect(button).toHaveAttribute('aria-label', 'Submit');
  });
});
