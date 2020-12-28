import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [HomeComponent, HomeCarouselComponent],
  imports: [SharedModule, HomeRoutingModule, CarouselModule],
})
export class HomeModule {}
