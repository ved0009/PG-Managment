import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WebsiteModule } from './Website/website.module';
import { PgUserModule } from './PgUser/pg-user.module';
import { PgcaretakerModule } from './PgCareTaker/pgcaretaker.module';
import { RouterModule } from '@angular/router';
 

@NgModule({
  declarations: [
    AppComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    WebsiteModule,
    PgUserModule,
    PgcaretakerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
