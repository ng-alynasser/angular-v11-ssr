import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { TrustSectionComponent } from './components/trust-section/trust-section.component';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { ClientsCarouselComponent } from './components/clients-carousel/clients-carousel.component';
import { VisionSectionComponent } from './components/vision-section/vision-section.component';
import { PartnersCarouselComponent } from './components/partners-carousel/partners-carousel.component';
import { QualitySectionComponent } from './components/quality-section/quality-section.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeCarouselComponent,
    ServicesSectionComponent,
    TrustSectionComponent,
    ExperienceSectionComponent,
    ClientsCarouselComponent,
    VisionSectionComponent,
    PartnersCarouselComponent,
    QualitySectionComponent,
  ],
  imports: [SharedModule, HomeRoutingModule, CarouselModule],
})
export class HomeModule {}
