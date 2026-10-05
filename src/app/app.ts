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

  protected readonly theme = signal(this.document.documentElement.dataset['theme'] || 'system');

  protected setTheme(theme: 'light' | 'dark' | 'system'): void {
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
  protected readonly projects = projects;
  protected readonly experience = experience;
  protected readonly skills = skills;
}
