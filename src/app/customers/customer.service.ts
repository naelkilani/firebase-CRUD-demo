import { Customer } from './customer';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private readonly dbPath = '/customers';
  private customers: AngularFireList<Customer> = null;

  constructor(private db: AngularFireDatabase) {
    this.customers = this.db.list(this.dbPath);
  }

  getCustomersList(): AngularFireList<Customer> {
    return this.customers;
  }

  createCustomer(customer: Customer): void {
    console.log('Customer', customer);
    this.customers.push(customer);
  }

  updateCustomer(key: string, value: any) : Promise<void> {
    return this.db.object(`${this.dbPath}/${key}`).update(value);
  }

  deleteCustomer(key: string) : Promise<void> {
    return this.db.object(`${this.dbPath}/${key}`).remove();
  }

  deleteAll(): Promise<void> {
    return this.customers.remove();
  }
}
