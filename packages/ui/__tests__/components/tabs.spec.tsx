import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '../../src/components/tabs';

describe('Tabs', () => {
  it('should render Tabs component', () => {
    render(
      <Tabs>
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        </TabsList>
      </Tabs>
    );
    expect(screen.getByText('Tab 1')).toBeInTheDocument();
  });

  it('should have data-slot="tabs" on root', () => {
    render(
      <Tabs>
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        </TabsList>
      </Tabs>
    );
    const tabsRoot = screen.getByText('Tab 1').closest('[data-slot="tabs"]');
    expect(tabsRoot).toBeInTheDocument();
  });

  it('should have data-slot="tabs-list" on TabsList', () => {
    render(
      <Tabs>
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        </TabsList>
      </Tabs>
    );
    const tabsList = screen
      .getByText('Tab 1')
      .closest('[data-slot="tabs-list"]');
    expect(tabsList).toBeInTheDocument();
  });

  it('should have data-slot="tabs-trigger" on TabsTrigger', () => {
    render(
      <Tabs>
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        </TabsList>
      </Tabs>
    );
    const trigger = screen.getByText('Tab 1');
    expect(trigger).toHaveAttribute('data-slot', 'tabs-trigger');
  });

  it('should have data-slot="tabs-content" on TabsContent', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
      </Tabs>
    );
    const content = screen.getByText('Content 1');
    expect(content).toHaveAttribute('data-slot', 'tabs-content');
  });

  it('should show content that matches active tab', async () => {
    const user = userEvent.setup();
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>
    );

    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();

    const tab2 = screen.getByText('Tab 2');
    await user.click(tab2);

    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('should accept custom className on Tabs', () => {
    render(
      <Tabs className="custom-tabs">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        </TabsList>
      </Tabs>
    );
    const tabsRoot = screen.getByText('Tab 1').closest('.custom-tabs');
    expect(tabsRoot).toBeInTheDocument();
  });

  it('should accept custom className on TabsList', () => {
    render(
      <Tabs>
        <TabsList className="custom-list">
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        </TabsList>
      </Tabs>
    );
    const tabsList = screen.getByText('Tab 1').closest('.custom-list');
    expect(tabsList).toBeInTheDocument();
  });

  it('should accept custom className on TabsTrigger', () => {
    render(
      <Tabs>
        <TabsList>
          <TabsTrigger value="tab1" className="custom-trigger">
            Tab 1
          </TabsTrigger>
        </TabsList>
      </Tabs>
    );
    const trigger = screen.getByText('Tab 1');
    expect(trigger.className).toContain('custom-trigger');
  });

  it('should accept custom className on TabsContent', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1" className="custom-content">
          Content
        </TabsContent>
      </Tabs>
    );
    const content = screen.getByText('Content');
    expect(content.className).toContain('custom-content');
  });
});
