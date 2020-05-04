import { Component, OnInit } from '@angular/core';
import {Account} from '../account';
import { FrontEndService } from 'src/app/front-end.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  accounts: Account[];

  constructor(private frontendService: FrontEndService, private location: Location){
  }

  ngOnInit() {
    this.accounts = this.frontendService.getAccounts();
    console.log(this.location.getState());
  }


}
