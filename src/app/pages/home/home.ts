import {
  Component,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { GlassCardComponent } from '../../shared/components/glass-card/glass-card';

interface QuickLink {
  title: string;
  desc: string;
  path: string;
  label: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollRevealDirective, GlassCardComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('heroVideo') videoRef!: ElementRef<HTMLVideoElement>;

  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private onCanPlay?: () => void;
  private onPause?: () => void;

  quickLinks: QuickLink[] = [
    {
      title: 'Our Products',
      desc: 'Explore our own-label beers and whiskeys crafted for discerning palates.',
      path: '/products',
      label: 'Explore Products',
    },
    {
      title: 'International Division',
      desc: 'Exclusive global spirits and wines, curated and brought to India.',
      path: '/international',
      label: 'View Portfolio',
    },
    {
      title: 'Our Network',
      desc: 'Manufacture, import, distribute — we operate end to end across India.',
      path: '/network',
      label: 'See Network',
    },
    {
      title: 'Partner With Us',
      desc: 'Distribution partnerships, trade enquiries, and collaboration opportunities.',
      path: '/contact',
      label: 'Get in Touch',
    },
  ];

  ngAfterViewInit(): void {
    // Video playback is a browser-only concern; skip entirely during prerender.
    if (!this.isBrowser) return;

    const video = this.videoRef?.nativeElement;
    if (!video) return;

    video.muted = true;
    video.loop = true;

    const tryPlay = () => video.play().catch(() => {});

    // On fresh page load the video may not be ready; wait for canplay first
    if (video.readyState >= 2) {
      tryPlay();
    } else {
      this.onCanPlay = tryPlay;
      video.addEventListener('canplay', tryPlay, { once: true });
    }

    // Restart if the browser silently pauses the video (e.g. low-power mode, tab restore)
    this.onPause = () => {
      if (!video.ended) tryPlay();
    };
    video.addEventListener('pause', this.onPause);
  }

  ngOnDestroy(): void {
    const video = this.videoRef?.nativeElement;
    if (!video) return;
    if (this.onCanPlay) video.removeEventListener('canplay', this.onCanPlay);
    if (this.onPause) video.removeEventListener('pause', this.onPause);
  }
}
