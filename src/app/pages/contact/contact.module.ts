import { NgModule } from '@angular/core';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactHeaderComponent } from './components/contact-header/contact-header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactCardsComponent } from './components/contact-cards/contact-cards.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    ContactComponent,
    ContactHeaderComponent,
    ContactCardsComponent,
    ContactFormComponent,
  ],
  imports: [SharedModule, ContactRoutingModule],
})
export class ContactModule {}
