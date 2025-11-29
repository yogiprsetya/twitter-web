import { describe, it, expect } from 'vitest';
import {
  SIDEBAR_MENU,
  NAVIGATION_MENU,
} from '../../src/layouts/navigation-menu';
import { render } from '@testing-library/react';

describe('navigation-menu', () => {
  describe('SIDEBAR_MENU', () => {
    it('should be an array', () => {
      expect(Array.isArray(SIDEBAR_MENU)).toBe(true);
    });

    it('should have 7 menu items', () => {
      expect(SIDEBAR_MENU).toHaveLength(7);
    });

    it('should have all required properties for each menu item', () => {
      SIDEBAR_MENU.forEach((item) => {
        expect(item).toHaveProperty('label');
        expect(item).toHaveProperty('link');
        expect(item).toHaveProperty('icon');
        expect(item.icon).toHaveProperty('default');
        expect(item.icon).toHaveProperty('selected');
        expect(typeof item.label).toBe('string');
        expect(typeof item.link).toBe('string');
      });
    });

    it('should have correct menu items in order', () => {
      const expectedLabels = [
        'Home',
        'Explore',
        'Notification',
        'Messages',
        'Bookmarks',
        'Lists',
        'Profile',
      ];
      const actualLabels = SIDEBAR_MENU.map((item) => item.label);
      expect(actualLabels).toEqual(expectedLabels);
    });

    it('should have correct links for each menu item', () => {
      const expectedLinks = [
        '/',
        '/explore',
        '/notification',
        '/messages',
        '/bookmarks',
        '/lists',
        '/profile',
      ];
      const actualLinks = SIDEBAR_MENU.map((item) => item.link);
      expect(actualLinks).toEqual(expectedLinks);
    });

    it('should render default icons correctly', () => {
      SIDEBAR_MENU.forEach((item) => {
        const { container } = render(item.icon.default);
        expect(container.firstChild).toBeTruthy();
      });
    });

    it('should render selected icons correctly', () => {
      SIDEBAR_MENU.forEach((item) => {
        const { container } = render(item.icon.selected);
        expect(container.firstChild).toBeTruthy();
      });
    });

    it('should have unique labels', () => {
      const labels = SIDEBAR_MENU.map((item) => item.label);
      const uniqueLabels = new Set(labels);
      expect(uniqueLabels.size).toBe(labels.length);
    });

    it('should have unique links', () => {
      const links = SIDEBAR_MENU.map((item) => item.link);
      const uniqueLinks = new Set(links);
      expect(uniqueLinks.size).toBe(links.length);
    });
  });

  describe('NAVIGATION_MENU', () => {
    it('should be an array', () => {
      expect(Array.isArray(NAVIGATION_MENU)).toBe(true);
    });

    it('should have 5 menu items', () => {
      expect(NAVIGATION_MENU).toHaveLength(5);
    });

    it('should have all required properties for each menu item', () => {
      NAVIGATION_MENU.forEach((item) => {
        expect(item).toHaveProperty('label');
        expect(item).toHaveProperty('link');
        expect(item).toHaveProperty('icon');
        expect(item.icon).toHaveProperty('default');
        expect(item.icon).toHaveProperty('selected');
        expect(typeof item.label).toBe('string');
        expect(typeof item.link).toBe('string');
      });
    });

    it('should have correct menu items in order', () => {
      const expectedLabels = [
        'Feeds',
        'Lists',
        'Explore',
        'Notification',
        'Messages',
      ];
      const actualLabels = NAVIGATION_MENU.map((item) => item.label);
      expect(actualLabels).toEqual(expectedLabels);
    });

    it('should have correct links for each menu item', () => {
      const expectedLinks = [
        '/',
        '/lists',
        '/explore',
        '/notification',
        '/messages',
      ];
      const actualLinks = NAVIGATION_MENU.map((item) => item.link);
      expect(actualLinks).toEqual(expectedLinks);
    });

    it('should render default icons correctly', () => {
      NAVIGATION_MENU.forEach((item) => {
        const { container } = render(item.icon.default);
        expect(container.firstChild).toBeTruthy();
      });
    });

    it('should render selected icons correctly', () => {
      NAVIGATION_MENU.forEach((item) => {
        const { container } = render(item.icon.selected);
        expect(container.firstChild).toBeTruthy();
      });
    });

    it('should have unique labels', () => {
      const labels = NAVIGATION_MENU.map((item) => item.label);
      const uniqueLabels = new Set(labels);
      expect(uniqueLabels.size).toBe(labels.length);
    });

    it('should have unique links', () => {
      const links = NAVIGATION_MENU.map((item) => item.link);
      const uniqueLinks = new Set(links);
      expect(uniqueLinks.size).toBe(links.length);
    });

    it('should have "Feeds" as first item with link "/"', () => {
      expect(NAVIGATION_MENU[0].label).toBe('Feeds');
      expect(NAVIGATION_MENU[0].link).toBe('/');
    });
  });
});
