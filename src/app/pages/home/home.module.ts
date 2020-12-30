import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { TrustSectionComponent } from './components/trust-section/trust-section.component';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeCarouselComponent,
    ServicesSectionComponent,
    TrustSectionComponent,
    ExperienceSectionComponent,
  ],
  imports: [SharedModule, HomeRoutingModule, CarouselModule],
})
export class HomeModule {}
