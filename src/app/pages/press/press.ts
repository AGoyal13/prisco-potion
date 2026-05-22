import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';

export interface PressItem {
  type: 'article' | 'mention' | 'award' | 'forum';
  source: string;
  title: string;
  excerpt: string;
  date?: string;
  url?: string;
  placeholder: boolean;
}

@Component({
  selector: 'app-press',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, SectionHeaderComponent],
  templateUrl: './press.html',
  styleUrl: './press.scss',
})
export class PressComponent {
  pressItems: PressItem[] = [
    {
      type: 'article',
      source: 'Spiritz',
      title: 'Beer evolving beyond the basics',
      excerpt: 'India\'s beer market is transforming as consumers seek premium craft-style brews. Prisco Potion is featured with Macarena, Crossbones, and Fingerprint as trailblazers of this new wave of Indian beer culture.',
      date: 'April 21, 2025',
      url: 'https://spiritz.in/cover-story/beer-evolving-beyond-the-basics-8967910',
      placeholder: false,
    },
    {
      type: 'article',
      source: 'Spiritz',
      title: 'Macarena Craft Beer launched in Delhi',
      excerpt: 'Macarena Premium Lager Craft Beer debuts in Delhi with vibrant can artwork, pale gold appearance, and crisp malt sweetness balanced with hop bitterness for a dry, refreshing finish.',
      date: 'January 14, 2025',
      url: 'https://spiritz.in/stories/macarena-craft-beer-launched-in-delhi-8620394',
      placeholder: false,
    },
    // {
    //   type: 'award',
    //   source: 'Industry Recognition',
    //   title: 'Award & Accolade Coming Soon',
    //   excerpt: 'Certifications, industry awards, and recognitions received by Prisco Potion or its brands will be highlighted here.',
    //   placeholder: true,
    // },
    // {
    //   type: 'forum',
    //   source: 'Community Platforms',
    //   title: 'Community Discussion Coming Soon',
    //   excerpt: 'Forum posts, enthusiast reviews, and community acknowledgements from spirits communities and connoisseur groups.',
    //   placeholder: true,
    // },
    // {
    //   type: 'article',
    //   source: 'Spirits & Hospitality',
    //   title: 'Trade Feature Coming Soon',
    //   excerpt: 'Trade press coverage, distributor stories, and hospitality sector features about our portfolio and operations.',
    //   placeholder: true,
    // },
    // {
    //   type: 'mention',
    //   source: 'Social & Digital',
    //   title: 'Digital Coverage Coming Soon',
    //   excerpt: 'Influencer reviews, social media features, and digital editorial coverage from spirits and lifestyle platforms.',
    //   placeholder: true,
    // },
  ];

  typeIcon: Record<PressItem['type'], string> = {
    article: '📰',
    mention: '💬',
    award: '🏆',
    forum: '🗣️',
  };

  typeLabel: Record<PressItem['type'], string> = {
    article: 'Article',
    mention: 'Mention',
    award: 'Award',
    forum: 'Community',
  };
}
