import { describe, it, expect } from 'vitest';
import { cn } from '../../src/lib/utils';

describe('cn', () => {
  it('should merge string class names', () => {
    const result = cn('foo', 'bar');
    expect(result).toBe('foo bar');
  });

  it('should handle conditional classes', () => {
    const isActive = true;
    const isDisabled = false;
    const result = cn('base', isActive && 'active', isDisabled && 'disabled');
    expect(result).toBe('base active');
  });

  it('should handle array of class names', () => {
    const result = cn(['foo', 'bar', 'baz']);
    expect(result).toBe('foo bar baz');
  });

  it('should handle object with conditional classes', () => {
    const result = cn({
      foo: true,
      bar: false,
      baz: true,
    });
    expect(result).toBe('foo baz');
  });

  it('should merge Tailwind conflicting classes using twMerge', () => {
    // twMerge should resolve conflicts, keeping the last one
    const result = cn('px-2 py-1', 'px-4');
    expect(result).toBe('py-1 px-4');
  });

  it('should handle mixed input types', () => {
    const result = cn(
      'base-class',
      ['array-class-1', 'array-class-2'],
      {
        'object-class-1': true,
        'object-class-2': false,
      },
      'string-class'
    );
    expect(result).toContain('base-class');
    expect(result).toContain('array-class-1');
    expect(result).toContain('array-class-2');
    expect(result).toContain('object-class-1');
    expect(result).toContain('string-class');
    expect(result).not.toContain('object-class-2');
  });

  it('should handle empty inputs', () => {
    const result = cn();
    expect(result).toBe('');
  });

  it('should handle null and undefined values', () => {
    const result = cn('foo', null, 'bar', undefined, 'baz');
    expect(result).toBe('foo bar baz');
  });

  it('should handle empty strings', () => {
    const result = cn('foo', '', 'bar');
    expect(result).toBe('foo bar');
  });

  it('should merge conflicting padding classes', () => {
    const result = cn('p-2', 'p-4');
    expect(result).toBe('p-4');
  });

  it('should merge conflicting margin classes', () => {
    const result = cn('m-2', 'm-4');
    expect(result).toBe('m-4');
  });

  it('should handle complex Tailwind class conflicts', () => {
    const result = cn('text-sm text-red-500', 'text-lg text-blue-500');
    // twMerge should keep the last conflicting classes
    expect(result).toBe('text-lg text-blue-500');
  });

  it('should preserve non-conflicting classes', () => {
    const result = cn('flex items-center', 'justify-center');
    expect(result).toContain('flex');
    expect(result).toContain('items-center');
    expect(result).toContain('justify-center');
  });
});
