import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header';
import { FooterComponent } from './layout/footer/footer';
import { SeoService } from './shared/services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.init();
  }
}
