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
})
export class App {
  private readonly document = inject(DOCUMENT);
  private readonly navigation = viewChild.required<ElementRef<HTMLElement>>('navigation');
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
