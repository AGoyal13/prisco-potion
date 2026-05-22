import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-header.html',
  styleUrl: './section-header.scss',
})
export class SectionHeaderComponent {
  @Input() label = '';
  @Input() title = '';
  @Input() titleAccent = '';
  @Input() subtitle = '';
  @Input() align: 'left' | 'center' | 'right' = 'left';
  @Input() showDivider = true;
}
