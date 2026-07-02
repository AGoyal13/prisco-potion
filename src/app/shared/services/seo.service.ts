import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

/** Per-route SEO payload, attached via the route's `data.seo`. */
export interface SeoData {
  /** Meta description for the page. */
  description: string;
  /** Absolute OG/Twitter image URL. Falls back to the site default. */
  ogImage?: string;
  /** OG type. Defaults to 'website'. */
  ogType?: string;
}

const SITE_ORIGIN = 'https://priscopotion.com';
const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/assets/og-image.jpg`;
const SITE_NAME = 'Prisco Potion Pvt. Ltd.';

/**
 * Keeps document SEO tags (title is handled by the router TitleStrategy) in sync with the
 * active route: meta description, canonical link, Open Graph and Twitter Card tags.
 *
 * Runs during prerendering too, so each statically generated page gets its own correct tags.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);

  init(): void {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => this.update());
  }

  private update(): void {
    let child = this.route.snapshot;
    while (child.firstChild) child = child.firstChild;

    const seo = child.data['seo'] as SeoData | undefined;
    // Read the title from the route config directly — during prerender the router's
    // TitleStrategy may set document.title *after* this handler runs, so title.getTitle()
    // can still hold the index.html default at this point.
    const pageTitle = child.title ?? this.title.getTitle();
    // Canonical: origin + path, without query/fragment, no trailing slash (except root).
    const path = this.router.url.split(/[?#]/)[0];
    const canonical = SITE_ORIGIN + (path === '/' ? '/' : path.replace(/\/$/, ''));
    const image = seo?.ogImage ?? DEFAULT_OG_IMAGE;
    const description = seo?.description ?? '';
    const ogType = seo?.ogType ?? 'website';

    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
      this.meta.updateTag({ property: 'og:description', content: description });
      this.meta.updateTag({ name: 'twitter:description', content: description });
    }

    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:type', content: ogType });
    this.meta.updateTag({ property: 'og:url', content: canonical });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:site_name', content: SITE_NAME });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    this.setCanonical(canonical);
  }

  private setCanonical(url: string): void {
    const head = this.doc.head;
    let link = head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
