import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-glass-card',
  standalone: true,
  templateUrl: './glass-card.html',
  styleUrl: './glass-card.scss',
})
export class GlassCardComponent {
  @Input() hoverable = true;
  @Input() accentGold = false;
  @Input() padding = 'var(--space-6)';
}
