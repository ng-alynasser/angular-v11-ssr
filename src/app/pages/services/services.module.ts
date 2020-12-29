import { NgModule } from '@angular/core';
import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ServicesHeaderComponent } from './components/services-header/services-header.component';
import { ServicesSectionOneComponent } from './components/services-section-one/services-section-one.component';
import { ServicesSectionTwoComponent } from './components/services-section-two/services-section-two.component';

@NgModule({
  declarations: [
    ServicesComponent,
    ServicesHeaderComponent,
    ServicesSectionOneComponent,
    ServicesSectionTwoComponent,
  ],
  imports: [SharedModule, ServicesRoutingModule],
})
export class ServicesModule {}
