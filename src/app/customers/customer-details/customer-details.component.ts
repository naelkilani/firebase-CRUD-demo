import { CustomerService } from './../customer.service';
import { Component, Input } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent{
  @Input('customer') customer: Customer;

  constructor(private customerService: CustomerService) { }

  active(isActive: boolean) {
    this.customerService
    .updateCustomer(this.customer.key, { active: isActive })
    .catch(err => console.error(err));
  }

  deleteCustomer() {
    this.customerService
    .deleteCustomer(this.customer.key)
    .catch(err => console.error(err));
  }
}
