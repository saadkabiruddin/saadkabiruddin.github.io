import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('Academic portfolio', () => {
  async function render() {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    return fixture.nativeElement as HTMLElement;
  }

  it('renders the academic profile and publications', async () => {
    const page = await render();
    expect(page.querySelector('h1')?.textContent).toBe('Saad Kabir Uddin');
    expect(page.querySelectorAll('#publications article')).toHaveLength(3);
  });

  it('resolves every section link without exposing a specialized CV', async () => {
    const page = await render();
    for (const anchor of page.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')) {
      expect(page.querySelector(anchor.getAttribute('href')!)).not.toBeNull();
    }
    expect(page.querySelector('a[download]')).toBeNull();
    expect(page.querySelector('a[href="#cv"]')).toBeNull();
  });
});
