import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../src/layouts/theme-provider';
import * as React from 'react';

// Mock next-themes
vi.mock('next-themes', () => {
  const MockThemeProvider = ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => {
    return (
      <div data-testid="theme-provider" data-props={JSON.stringify(props)}>
        {children}
      </div>
    );
  };

  return {
    ThemeProvider: MockThemeProvider,
  };
});

describe('ThemeProvider', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render children correctly', () => {
    render(
      <ThemeProvider>
        <div>Test Content</div>
      </ThemeProvider>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('should render ThemeProvider wrapper', () => {
    render(
      <ThemeProvider>
        <div>Test</div>
      </ThemeProvider>
    );
    const provider = screen.getByTestId('theme-provider');
    expect(provider).toBeInTheDocument();
  });

  it('should pass props to NextThemesProvider', () => {
    const testProps = {
      attribute: 'class',
      defaultTheme: 'light',
      enableSystem: true,
    };

    render(
      <ThemeProvider {...testProps}>
        <div>Test</div>
      </ThemeProvider>
    );

    const provider = screen.getByTestId('theme-provider');
    const props = JSON.parse(provider.getAttribute('data-props') || '{}');
    expect(props.attribute).toBe('class');
    expect(props.defaultTheme).toBe('light');
    expect(props.enableSystem).toBe(true);
  });

  it('should handle multiple children', () => {
    render(
      <ThemeProvider>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </ThemeProvider>
    );
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
    expect(screen.getByText('Child 3')).toBeInTheDocument();
  });

  it('should handle empty children', () => {
    render(<ThemeProvider>{null}</ThemeProvider>);
    const provider = screen.getByTestId('theme-provider');
    expect(provider).toBeInTheDocument();
    expect(provider.children.length).toBe(0);
  });

  it('should handle ReactNode children', () => {
    const Component = () => <div>Component Child</div>;
    render(
      <ThemeProvider>
        <Component />
      </ThemeProvider>
    );
    expect(screen.getByText('Component Child')).toBeInTheDocument();
  });

  it('should pass through all NextThemesProvider props', () => {
    const allProps = {
      attribute: 'class',
      defaultTheme: 'dark',
      enableSystem: false,
      disableTransitionOnChange: true,
      storageKey: 'theme',
      themes: ['light', 'dark'],
      forcedTheme: 'light',
      enableColorScheme: true,
      nonce: 'test-nonce',
    };

    render(
      <ThemeProvider {...allProps}>
        <div>Test</div>
      </ThemeProvider>
    );

    const provider = screen.getByTestId('theme-provider');
    const props = JSON.parse(provider.getAttribute('data-props') || '{}');
    expect(props.attribute).toBe('class');
    expect(props.defaultTheme).toBe('dark');
    expect(props.enableSystem).toBe(false);
    expect(props.disableTransitionOnChange).toBe(true);
    expect(props.storageKey).toBe('theme');
    expect(props.themes).toEqual(['light', 'dark']);
    expect(props.forcedTheme).toBe('light');
    expect(props.enableColorScheme).toBe(true);
    expect(props.nonce).toBe('test-nonce');
  });
});
