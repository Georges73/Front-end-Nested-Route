import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FrontEndService } from 'src/app/front-end.service';
import { Location } from '@angular/common';
import {Account} from '../account';
@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss']
})
export class AccountDetailComponent implements OnInit {

 // @Input() account: Account;

  account: Account;
  // id;
  //sub;

  // tslint:disable-next-line:variable-name
  constructor(private _Activatedroute: ActivatedRoute,
              // tslint:disable-next-line:variable-name
              private _router: Router,
              // tslint:disable-next-line:variable-name
              private accountService: FrontEndService) {
  }


 ngOnInit(): void {
    this.getAccount();
  }
  getAccount() {


    const sub = this._Activatedroute.params.subscribe(params => {
      const id = params.id;
  // this.id = params['id'];
      const account = this.accountService.getAccounts();
      this.account = account.find(a => a.id = id); // ne fonctionne pas avec ===

    });
  }

  /* Using snapshot
  ngOnInit() {
      this.id=this._Activatedroute.snapshot.params['id'];
      let products=this._productService.getProducts();
      this.product=products.find(p => p.productID==this.id);
  }
  */

  onBack(): void {
    this._router.navigate(['account']);
  }


  // ngOnDestroy() {    this.sub.unsubscribe();  }

}
