import { Component, Input, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-value-card',
  standalone: true,
  templateUrl: './value-card.html',
  styleUrl: './value-card.scss',
})
export class ValueCardComponent {
  @Input() icon = '';
  @Input() title = '';
  @Input() description = '';

  private sanitizer = inject(DomSanitizer);

  get safeIcon(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.icon);
  }
}
