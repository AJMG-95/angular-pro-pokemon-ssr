import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-pricing-page',
  imports: [],
  templateUrl: './pricing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPageComponent implements OnInit {
  #title = inject(Title);
  #meta = inject(Meta);
  #platform = inject(PLATFORM_ID);

  ngOnInit(): void {
    /*
    //* Esto solo coloca el titulo del lado del cliente y no del servidor por lo que no ayuda al SEO
      if (!isPlatformServer(this.#platform)) {
        document.title = 'Pricing Page'
      }
    */

    //* Esto coloca el titulo y los meta tag's del lado del servidor ayudando al SEO
    this.#title.setTitle('Pricing Page');
    this.#meta.updateTag({ name: 'description', content: 'Este es mi Pricing Page' });
    this.#meta.updateTag({ name: 'og:title', content: 'Pricing Page' });
    this.#meta.updateTag({
      name: 'keywords',
      content: 'Hola,Mundo,SSR,Fernando,Herrera,Curso,Angular,Pro',
    });

  }
}
