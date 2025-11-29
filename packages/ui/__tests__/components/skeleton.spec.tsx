import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Skeleton } from '../../src/components/skeleton';

describe('Skeleton', () => {
  it('should render Skeleton component', () => {
    const { container } = render(<Skeleton />);
    const skeleton = container.querySelector('[data-slot="skeleton"]');
    expect(skeleton).toBeInTheDocument();
  });

  it('should have data-slot="skeleton"', () => {
    const { container } = render(<Skeleton />);
    const skeleton = container.querySelector('[data-slot="skeleton"]');
    expect(skeleton).toBeInTheDocument();
  });

  it('should have className for pulse animation', () => {
    const { container } = render(<Skeleton />);
    const skeleton = container.querySelector('[data-slot="skeleton"]');
    expect(skeleton?.className).toContain('animate-pulse');
  });

  it('should accept custom className', () => {
    const { container } = render(<Skeleton className="custom-skeleton" />);
    const skeleton = container.querySelector('[data-slot="skeleton"]');
    expect(skeleton?.className).toContain('custom-skeleton');
  });

  it('should accept children', () => {
    const { container } = render(<Skeleton>Loading...</Skeleton>);
    const skeleton = container.querySelector('[data-slot="skeleton"]');
    expect(skeleton).toHaveTextContent('Loading...');
  });

  it('should accept other HTML div props', () => {
    const { container } = render(
      <Skeleton id="skeleton-id" role="status" aria-label="Loading skeleton" />
    );
    const skeleton = container.querySelector('[data-slot="skeleton"]');
    expect(skeleton).toHaveAttribute('id', 'skeleton-id');
    expect(skeleton).toHaveAttribute('role', 'status');
    expect(skeleton).toHaveAttribute('aria-label', 'Loading skeleton');
  });

  it('should have rounded-md class', () => {
    const { container } = render(<Skeleton />);
    const skeleton = container.querySelector('[data-slot="skeleton"]');
    expect(skeleton?.className).toContain('rounded-md');
  });
});
