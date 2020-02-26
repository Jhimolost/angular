import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { HeaderComponent } from '../common/header/header.component';
import { FooterComponent } from '../common/footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { HeaderModule } from '../common/header/header.module';
import { InfoComponent } from './info/info.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    LandingPageComponent,
    FooterComponent,
    BannerComponent,
    InfoComponent,
    DeliveryComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    
    HeaderModule
  ],
  exports: [
    LandingPageComponent
  ]
})
export class LandingPageModule { }
