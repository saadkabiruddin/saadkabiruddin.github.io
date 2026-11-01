import { DOCUMENT } from '@angular/common';
import {
  afterNextRender,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import {
  experience,
  projects,
  publications,
  underReviewPublications,
  skills,
} from './portfolio.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  host: { '(document:click)': 'onDocumentClick($event)' },
})
export class App {
  private readonly document = inject(DOCUMENT);
  private readonly navigation = viewChild.required<ElementRef<HTMLElement>>('navigation');
  private readonly moreMenu = viewChild.required<ElementRef<HTMLDetailsElement>>('moreMenu');
  private readonly moreToggle = viewChild.required<ElementRef<HTMLElement>>('moreToggle');
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      this.document.documentElement.dataset['theme'] = this.theme();
      const navigation = this.navigation().nativeElement;
      const updateHeight = () => {
        this.host.nativeElement.style.setProperty(
          '--navigation-height',
          `${navigation.getBoundingClientRect().height}px`,
        );
      };
      updateHeight();
      const observer = new ResizeObserver(updateHeight);
      observer.observe(navigation);
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  protected readonly theme = signal<'light' | 'dark'>(this.initialTheme());

  protected closeMoreMenu(restoreFocus = false): void {
    this.moreMenu().nativeElement.open = false;
    if (restoreFocus) this.moreToggle().nativeElement.focus();
  }

  protected navigateFromMore(event: MouseEvent): void {
    const anchor = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
    if (!anchor || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const target = this.document.getElementById(anchor.hash.slice(1));
    if (!target) return;
    event.preventDefault();
    this.closeMoreMenu();
    this.document.defaultView?.history.pushState(null, '', anchor.hash);
    target.scrollIntoView({ block: 'start' });
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  }

  protected onDocumentClick(event: Event): void {
    if (!this.moreMenu().nativeElement.contains(event.target as Node)) {
      this.closeMoreMenu();
    }
  }

  protected onMoreFocusOut(event: FocusEvent): void {
    if (!this.moreMenu().nativeElement.contains(event.relatedTarget as Node | null)) {
      this.closeMoreMenu();
    }
  }

  private initialTheme(): 'light' | 'dark' {
    const saved = this.document.documentElement.dataset['theme'];
    if (saved === 'light' || saved === 'dark') return saved;
    return this.document.defaultView?.matchMedia?.('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  protected toggleTheme(): void {
    const theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(theme);
    this.document.documentElement.dataset['theme'] = theme;
    try {
      this.document.defaultView?.localStorage.setItem('portfolio-theme', theme);
    } catch {
      // The selected theme still works when browser storage is unavailable.
    }
  }

  protected readonly publications = publications;
  protected readonly underReviewPublications = underReviewPublications;
  protected readonly projectGroups = [
    { label: 'Research', projects: projects.filter(project => project.title !== 'DeliveryDash') },
    { label: 'Other', projects: projects.filter(project => project.title === 'DeliveryDash') },
  ];
  protected readonly experience = experience;
  protected readonly skills = skills;
}
