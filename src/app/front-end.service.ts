import { Injectable } from '@angular/core';
import {Account} from './account-center/account';
// import { getMaxListeners } from 'cluster';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrontEndService {


 public getAccounts() {

  let accounts: Account[];

  accounts = [
      new Account(1, 'Account_1', 'acc1@getMaxListeners.com'),
      new Account(2, 'Account_2', 'acc2@getMaxListeners.com'),
      new Account(3, 'Account_3', 'acc3@getMaxListeners.com')
  ];

  return accounts;
}


public getAccount(id) {
  const accounts: Account[] = this.getAccounts();
  return accounts.find(a => a.id === id);
}



}
