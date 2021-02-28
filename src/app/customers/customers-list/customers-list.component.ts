import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { map } from 'rxjs/operators';


@Component({
  selector: 'customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customers: Customer[];

  constructor(private customerSerive: CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerSerive.getCustomersList()
    .snapshotChanges()
    .pipe(map(customers => customers.map(c => ({ key: c.key, ...c.payload.val() }))))
    .subscribe(customers => this.customers = customers);
  }

  deleteCustomers() {
    this.customerSerive.deleteAll()
    .catch(err => console.error(err));
  }
}
