import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[scrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  // Selector input — allows [scrollReveal]="true" binding syntax
  @Input() scrollReveal: boolean = true;
  @Input() revealDelay = 0;
  @Input() revealDirection: 'up' | 'down' | 'left' | 'right' | 'fade' = 'up';
  @Input() revealThreshold = 0.12;

  private observer?: IntersectionObserver;
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    // During prerender (no DOM / no IntersectionObserver) render content fully visible so the
    // static HTML contains real, crawlable, visible content. The reveal animation runs on the
    // client only, after hydration.
    if (!this.isBrowser) return;

    const el = this.el.nativeElement;
    el.style.opacity = '0';
    el.style.transform = this.initialTransform();
    el.style.transition = [
      `opacity 0.65s var(--ease-out) ${this.revealDelay}ms`,
      `transform 0.65s var(--ease-out) ${this.revealDelay}ms`,
    ].join(', ');

    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.style.opacity = '1';
            el.style.transform = 'translate3d(0, 0, 0)';
            this.observer?.unobserve(el);
          }
        });
      },
      { threshold: this.revealThreshold, rootMargin: '0px 0px -40px 0px' }
    );

    this.observer.observe(el);
  }

  private initialTransform(): string {
    switch (this.revealDirection) {
      case 'up':    return 'translate3d(0, 32px, 0)';
      case 'down':  return 'translate3d(0, -32px, 0)';
      case 'left':  return 'translate3d(32px, 0, 0)';
      case 'right': return 'translate3d(-32px, 0, 0)';
      case 'fade':  return 'translate3d(0, 0, 0)';
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
