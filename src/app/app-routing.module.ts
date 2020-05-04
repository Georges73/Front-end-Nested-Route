import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountHomeComponent } from './account-center/account-home/account-home.component';
import { ContactComponent } from './contact/contact.component';
import { AccountComponent } from './account-center/account/account.component';
import { AccountDetailComponent } from './account-center/account-detail/account-detail.component';
import { AccountOverviewComponent } from './account-center/account-overview/account-overview.component';
import { AccountSpecComponent } from './account-center/account-spec/account-spec.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';


const routes: Routes = [
  
  { path: 'home', component: AccountHomeComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'account', component: AccountComponent,
    children: [
      { path: 'detail/:id', component: AccountDetailComponent,
          children : [
              { path: 'overview', component: AccountOverviewComponent },
              { path: 'spec', component: AccountSpecComponent },
              { path: '', redirectTo: 'overview', pathMatch: 'full' }
          ]
      }
    ]
  },
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: '**', component: ErrorpageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
