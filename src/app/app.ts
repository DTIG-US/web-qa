import { Component } from '@angular/core';

import { HeaderComponent } from './web-header/header.component';
import { CarouselComponent } from './web-carousel/carousel.component';
import { PartnersComponent } from './web-partner/partners.component';
import { FooterComponent } from './web-footer/footer.component';
import { OfferingComponent } from './web-offering/offering.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, CarouselComponent, PartnersComponent, FooterComponent, OfferingComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'angular-project';
}
