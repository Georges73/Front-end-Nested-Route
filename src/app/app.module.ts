import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

import { AccountOverviewComponent } from './account-center/account-overview/account-overview.component';
import { AccountSpecComponent } from './account-center/account-spec/account-spec.component';
import { AccountComponent } from './account-center/account/account.component';
import { AccountHomeComponent } from './account-center/account-home/account-home.component';
import { AccountDetailComponent } from './account-center/account-detail/account-detail.component';
import { FrontEndService } from './front-end.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ErrorpageComponent,
    AccountHomeComponent,
    AccountDetailComponent,
    AccountOverviewComponent,
    AccountSpecComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [FrontEndService],
  bootstrap: [AppComponent]
})
export class AppModule { }
