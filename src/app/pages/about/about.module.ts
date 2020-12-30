import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AboutHeaderComponent } from './components/about-header/about-header.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AboutComponent, AboutHeaderComponent],
  imports: [SharedModule, AboutRoutingModule],
})
export class AboutModule {}
